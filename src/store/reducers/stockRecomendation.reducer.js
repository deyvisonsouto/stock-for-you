import * as actionTypes from '../actions/actionTypes';

const initialState = {
  stockSymbol: null,
  recommendations: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECOMMENDED_ALGHORITHM:
      return {
        ...state,
        recommendations: action.recommendations
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