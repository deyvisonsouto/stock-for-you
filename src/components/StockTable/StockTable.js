import React from 'react';

import './StockTable.css'

class StockTable extends React.Component {

    render() {
        if (!this.props.stockPrices) {
            return <h4>Select a stock</h4>
        }
        let facebookHeader = null;
        if (this.props.hasFacebook) {
            facebookHeader = <th className="align-center">Facebook Mentions</th>
        }

        let twitterHeader = null;
        if (this.props.hasTwitter) {
            twitterHeader = <th className="align-center">Twitter Mentions</th>
        }

        let instagramHeader = null;
        if (this.props.hasInstagram) {
            instagramHeader = <th className="align-center">Instagram Mentions</th>
        }
        return (
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Date</th>
                        <th className="align-right">Price</th>
                        {facebookHeader}
                        {twitterHeader}
                        {instagramHeader}
                        <th className="align-center">Recommendationn</th>
                        <th className="align-center">Risk</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.stockPrices.map(stockPrice => {
                        let facebookData = null;
                        let twitterData = null;
                        let instagramData = null;
                        if (this.props.hasFacebook) {
                            facebookData = <td className="align-center">{stockPrice.facebookData}</td>
                        }

                        if (this.props.hasTwitter) {
                            twitterData = <td className="align-center">{stockPrice.twitterData}</td>
                        }

                        if (this.props.hasInstagram) {
                            instagramData = <td className="align-center">{stockPrice.instagramData}</td>
                        }

                        return (
                            <tr key={stockPrice.date}>
                                <td>{stockPrice.stockSymbol}</td>
                                <td>{this.formatDate(stockPrice.date)}</td>
                                <td className="align-right">{stockPrice.price.toFixed(2)}</td>
                                {facebookData}
                                {twitterData}
                                {instagramData}
                                <td className="align-center">{this.getRecomendation(stockPrice.recommendation)}</td>
                                <td className="align-center">{stockPrice.risk}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }

    getRecomendation(recommendation) {
        switch (parseInt(recommendation)) {
            case 1:
                return (
                    <span className="badge buy">BUY</span>
                );
            case 2:
                return (
                    <span className="badge sell">SELL</span>
                );
            default:
                return (
                    <span className="badge hold">HOLD</span>
                );
        }
    }
    formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}

export default StockTable