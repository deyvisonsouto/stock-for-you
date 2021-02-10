import * as actionsTypes from './actionTypes';
import stockAPI from '../../services/stockAPI';

export const setStockRecomendations = (recommendations) => {
  return {
    type: actionsTypes.SET_RECOMMENDED_ALGHORITHM,
    recommendations
  };
}

export const setStockRecomendationsFailed = (error) => {
  return {
    type: actionsTypes.SET_RECOMMENDED_ALGHORITHM_FAILED,
    error: error
  };
}

export const fetchStockRecommendations = (stockSymbol, stockPrices, socialMediaMentions, risk) => {
  return dispatch => {
    stockAPI.recommendationAlgorithm(stockSymbol, stockPrices, socialMediaMentions, risk)
      .then(response => {
        dispatch(setStockRecomendations(response.data));
      })
      .catch(error => {
        dispatch(setStockRecomendationsFailed(error));
      });
  };
};