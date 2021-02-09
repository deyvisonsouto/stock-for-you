import * as actionsTypes from './actionTypes';
import stockAPI from '../../services/stockAPI';

export const setStockPrice = (stockPrices) => {
    return {
        type: actionsTypes.SET_STOCK_PRICE_GENERATOR,
        stockPrices: stockPrices
    };
}

export const stockPriceGeneratorFailed = (error) => {
    return {
        type: actionsTypes.SET_STOCK_PRICE_GENERATOR_FAILED,
        error: error
    };
}

export const stockPriceGenerator = (stockSymbol, initialDate, finalDate) => {
    return dispatch => {
        stockAPI.stockPriceGenerator(stockSymbol, initialDate, finalDate)
            .then(response => {
                dispatch(setStockPrice(response.data));
            })
            .catch(error => {
                dispatch(stockPriceGeneratorFailed(error));
            });
    };
};