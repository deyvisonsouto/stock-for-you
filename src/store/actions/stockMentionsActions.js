import * as actionsTypes from './actionTypes';
import stockAPI from '../../services/stockAPI';

import * as SocialMediaTypes from '../../models/SocialMediaTypes';

export const setStockMentionsFacebook = (socialMedia) => {
  return {
    type: actionsTypes.SET_SOCIAL_MEDIA_COUNTER_FACEBOOK,
    socialMedia
  };
}

export const setStockMentionsInstagram = (socialMedia) => {
  return {
    type: actionsTypes.SET_SOCIAL_MEDIA_COUNTER_INSTAGRAM,
    socialMedia
  };
}

export const setStockMentionsTwitter = (socialMedia) => {
  return {
    type: actionsTypes.SET_SOCIAL_MEDIA_COUNTER_TWITTER,
    socialMedia
  };
}

export const stockMentionsFailed = (error) => {
  return {
    type: actionsTypes.SET_SOCIAL_MEDIA_COUNTER_FAILED,
    error
  };
}

export const fetchStockMentions = (stockSymbol, initialDate, finalDate, socialMedia) => {
  return dispatch => {
    stockAPI.socialMediaCountGenerator(stockSymbol, initialDate, finalDate, socialMedia)
      .then(response => {
        switch (socialMedia) {
          case SocialMediaTypes.FACEBOOK:
            dispatch(setStockMentionsFacebook(response.data));
            break;
          case SocialMediaTypes.INSTAGRAM:
            dispatch(setStockMentionsInstagram(response.data));
            break;
          case SocialMediaTypes.TWITTER:
            dispatch(setStockMentionsTwitter(response.data));
            break;
          default:
            break;
        }
      })
      .catch(error => {
        dispatch(stockMentionsFailed(error));
      });
  };
};