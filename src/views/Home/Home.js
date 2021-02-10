import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StockForm from '../../components/StockForm/StockForm';
import StockTable from '../../components/StockTable/StockTable';

import { fetchStockPriceGenerator } from '../../store/actions/stockPriceActions';
import { fetchStockMentions } from '../../store/actions/stockMentionsActions';
import { fetchStockRecommendations } from '../../store/actions/stockRecomendationActions';

import { stockRecommendationsSelector } from '../../store/selectors/stockRecommendation.selector';
import { stockPriceSelector } from '../../store/selectors/stockPrice.selector';
import { stockMentionsFacebookSelector, stockMentionsInstagramSelector, stockMentionsTwitterSelector } from '../../store/selectors/stockMention.selector';

import * as SocialMediaTypes from '../../models/SocialMediaTypes';
import StockChart from '../../components/StockChart/StockChart';
import { stockChartForm, stockTableFormat } from '../../utilities/stockFormatHelper';


function Home(props) {

  const [hasFacebook, setHasFacebook] = useState(false);
  const [hasInstagram, setHasInstagram] = useState(false);
  const [hasTwitter, setHasTwitter] = useState(false);
  const [risk, setRisk] = useState('convervative');

  const dispatch = useDispatch();

  const recommendations = useSelector(stockRecommendationsSelector);
  const stockPrices = useSelector(stockPriceSelector);
  const stockMentionsFacebook = useSelector(stockMentionsFacebookSelector);
  const stockMentionsInstagram = useSelector(stockMentionsInstagramSelector);
  const stockMentionsTwitter = useSelector(stockMentionsTwitterSelector);

  const updateRecommendations = useCallback(() => {
    if (stockPrices && stockPrices.length > 0
      && (!hasInstagram || stockMentionsInstagram) // if it must to have instagram, the instagram data is required
      && (!hasFacebook || stockMentionsFacebook) // if it must to have facebook, the facebook data is required
      && (!hasTwitter || stockMentionsTwitter) // if it must to have twitter, the twitter data is required
      && (!recommendations || recommendations.length === 0 || recommendations[0].stockSymbol !== stockPrices[0].stockSymbol)) {
      dispatch(fetchStockRecommendations(
        stockPrices[0].stockSymbol,
        stockPrices,
        [...stockMentionsFacebook,
        ...stockMentionsInstagram,
        ...stockMentionsTwitter],
        risk
      ));
    }
  }, [stockPrices, stockMentionsFacebook, stockMentionsInstagram, stockMentionsTwitter, hasInstagram, hasFacebook, hasTwitter, risk, recommendations, dispatch]);

  useEffect(() => {
    updateRecommendations();
  }, [updateRecommendations]);

  const checkStocksHandler = (stockForm) => {
    dispatch(fetchStockPriceGenerator(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate));
    setHasFacebook(stockForm.facebook);
    setHasInstagram(stockForm.instagram);
    setHasTwitter(stockForm.twitter);
    setRisk(stockForm.risk);

    if (stockForm.facebook) {
      dispatch(fetchStockMentions(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.FACEBOOK));
    }
    if (stockForm.twitter) {
      dispatch(fetchStockMentions(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.TWITTER));
    }
    if (stockForm.instagram) {
      dispatch(fetchStockMentions(stockForm.stockSymbol, stockForm.initialDate, stockForm.finalDate, SocialMediaTypes.INSTAGRAM));
    }
  }

  const stockPriceRender = stockTableFormat(
    stockPrices,
    stockMentionsFacebook,
    stockMentionsInstagram,
    stockMentionsTwitter,
    recommendations,
    risk);

  const chartDataRender = stockChartForm(stockPrices);

  return (
    <div>
      <StockForm checkStocks={checkStocksHandler} />
      <StockTable stockPrices={stockPriceRender}
        hasFacebook={hasFacebook}
        hasTwitter={hasTwitter}
        hasInstagram={hasInstagram}
      />
      <StockChart data={chartDataRender} />
    </div>
  );
}
export default Home;