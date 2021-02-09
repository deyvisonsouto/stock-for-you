import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stockSymbol: null,
    stockPrices: [],
    error: '',
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STOCK_PRICE_GENERATOR:
            return {
                ...state,
                stockPrices: action.stockPrices
            }
        case actionTypes.SET_STOCK_PRICE_GENERATOR_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }

}
export default reducer;