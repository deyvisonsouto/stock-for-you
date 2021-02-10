import * as actionTypes from '../actions/actionTypes';

const initialState = {
  stockSymbol: null,
  stockMentionsFacebook: [],
  stockMentionsTwitter: [],
  stockMentionsInstagram: [],
  error: '',
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SOCIAL_MEDIA_COUNTER_FACEBOOK:
      return {
        ...state,
        stockMentionsFacebook: action.socialMedia
      }
    case actionTypes.SET_SOCIAL_MEDIA_COUNTER_INSTAGRAM:
      return {
        ...state,
        stockMentionsInstagram: action.socialMedia
      }
    case actionTypes.SET_SOCIAL_MEDIA_COUNTER_TWITTER:
      return {
        ...state,
        stockMentionsTwitter: action.socialMedia
      }
    case actionTypes.SET_SOCIAL_MEDIA_COUNTER_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }

}
export default reducer;