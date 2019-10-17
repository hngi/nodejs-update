import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  SHORTEN_LINK_SUCCESS,
  SHORTEN_LINK_FAIL
} from '../actions/types';
const initialState = {
  cloudinaryUrl: null,
  shortUrl: null
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        cloudinaryUrl: payload.cloudinaryUrl
      };

    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        cloudinaryUrl: null
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        cloudinaryUrl: payload.longUrl
      };

    case SEND_EMAIL_FAIL:
      return {
        ...state,
        cloudinaryUrl: null,
        shortUrl: null
      };
    case SHORTEN_LINK_SUCCESS:
      return {
        ...state,
        shortUrl: payload.shortUrl
      };

    case SHORTEN_LINK_FAIL:
      return {
        ...state,
        shortUrl: null
      };

    default:
      return state;
  }
}
