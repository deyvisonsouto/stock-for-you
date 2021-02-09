import React, { Component } from 'react';
import { connect } from 'react-redux';

import StockForm from '../../components/StockForm/StockForm';
import StockTable from '../../components/StockTable/StockTable';

import * as stockPriceActions from '../../store/actions/stockPriceActions';
import * as stockMentionsActions from '../../store/actions/stockMentionsActions';
import * as stockRecommendationsActions from '../../store/actions/stockRecomendationActions';

import * as SocialMediaTypes from '../../models/SocialMediaTypes';
import StockChart from '../../components/StockChart/StockChart';


class Home extends Component {

    state = {
        hasFacebook: false,
        hasInstagram: false,
        hasTwitter: false,
        risk: 'convervative'
    }
    render() {
        return (
            <div>
                <StockForm checkStocks={(stockForm) => { this.checkStocks(stockForm) }} />
                <StockTable stockPrices={
                    this.formatStockTable(
                        this.props.stockPrices,
                        this.props.stockMentionsFacebook,
                        this.props.stockMentionsInstagram,
                        this.props.stockMentionsTwitter,
                        this.props.stockRecommendations)}
                    hasFacebook={this.state.hasFacebook}
                    hasTwitter={this.state.hasTwitter}
                    hasInstagram={this.state.hasInstagram}
                />
                <StockChart data={this.formatStockChar(this.props.stockPrices)} />
            </div>
        );
    }

    checkStocks(stockForm) {
        this.props.fetchStockPriceGenerator(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate);
        this.setState({ hasFacebook: stockForm.facebook });
        this.setState({ hasInstagram: stockForm.instagram });
        this.setState({ hasTwitter: stockForm.twitter });
        this.setState({ risk: stockForm.risk });

        if (stockForm.facebook) {
            this.props.fetchStockMention(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.FACEBOOK);
        }
        if (stockForm.twitter) {
            this.props.fetchStockMention(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.TWITTER);
        }
        if (stockForm.instagram) {
            this.props.fetchStockMention(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.INSTAGRAM);
        }
    }

    formatStockTable(stockPrices, stockMentionsFacebook, stockMentionsInstagram, stockMentionsTwitter, stockRecommendations) {
        const stockTable = []
        if (stockPrices && stockRecommendations) {
            stockPrices.map(price => {
                stockTable.push(
                    {
                        stockSymbol: price.stockSymbol,
                        date: price.date,
                        price: price.price,
                        facebookData: (stockMentionsFacebook.filter(d => d.date.toJSON().slice(0, 10) === price.date.toJSON().slice(0, 10))[0] || {}).mentionsCount,
                        instagramData: (stockMentionsInstagram.filter(d => d.date.toJSON().slice(0, 10) === price.date.toJSON().slice(0, 10))[0] || {}).mentionsCount,
                        twitterData: (stockMentionsTwitter.filter(d => d.date.toJSON().slice(0, 10) === price.date.toJSON().slice(0, 10))[0] || {}).mentionsCount,
                        recommendation: (stockRecommendations.filter(d => d.date.toJSON().slice(0, 10) === price.date.toJSON().slice(0, 10))[0] || {}).recommendation,
                        risk: this.state.risk
                    }
                );
                return stockTable;
            })
        }

        if (stockPrices && stockPrices.length > 0
            && (!this.state.hasInstagram || stockMentionsInstagram)
            && (!this.state.hasFacebook || stockMentionsFacebook)
            && (!this.state.hasTwitter || stockMentionsTwitter)
            && (!stockRecommendations || stockRecommendations.length === 0 || stockRecommendations[0].stockSymbol !== stockPrices[0].stockSymbol)) {
            this.props.fetchStockRecommendations(
                stockPrices[0].stockSymbol,
                stockPrices,
                [...stockMentionsFacebook,
                ...stockMentionsInstagram,
                ...stockMentionsTwitter],
                this.state.risk
            )
        }

        return stockTable;
    }

    formatStockChar(stockPrices) {
        if (stockPrices && stockPrices.length > 0) {
            const stockChar = [];
            stockPrices.map(price => {
                stockChar.push({
                    primary: new Date(price.date),
                    secondary: price.price
                })
                return stockChar;
            });

            return [{ label: stockPrices[0].stockSymbol, data: stockChar }];
        }
        return [];
    }
}

const mapStateToProps = state => {
    return {
        stockSymbol: state.stockPrice.stockSymbol,
        stockPrices: state.stockPrice.stockPrices,
        stockMentionsFacebook: state.stockMentions.stockMentionsFacebook,
        stockMentionsInstagram: state.stockMentions.stockMentionsInstagram,
        stockMentionsTwitter: state.stockMentions.stockMentionsTwitter,
        stockRecommendations: state.stockRecommendations.stockRecommendations,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStockPriceGenerator: (stockSymbol, initialDate, finalDate) => dispatch(stockPriceActions.stockPriceGenerator(stockSymbol, initialDate, finalDate)),
        fetchStockMention: (stockSymbol, initialDate, finalDate, socialMedia) => dispatch(stockMentionsActions.fetchStockMentions(stockSymbol, initialDate, finalDate, socialMedia)),
        fetchStockRecommendations: (stockSymbol, stocksPrices, socialMediaMentions, risk) => dispatch(stockRecommendationsActions.fetchStockRecommendations(stockSymbol, stocksPrices, socialMediaMentions, risk)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);