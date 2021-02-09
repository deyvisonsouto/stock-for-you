import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stockSymbol: null,
    stockRecommendations: [],
    error: '',
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RECOMMENDED_ALGHORITHM:
            return {
                ...state,
                stockRecommendations: action.stockRecommendations
            }
        case actionTypes.SET_RECOMMENDED_ALGHORITHM_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }

}
export default reducer;