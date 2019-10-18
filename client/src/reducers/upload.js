import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  HIDE_LINK
} from '../actions/types';
const initialState = {
  cloudinaryUrl: null,
  shortUrl: null,
  emailSent: false
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        cloudinaryUrl: payload.cloudinaryUrl,
        shortUrl: payload.shortUrl
      };

    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        cloudinaryUrl: null
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        //cloudinaryUrl: payload.longUrl,
        emailSent: true
      };
    case HIDE_LINK:
      return {
        ...state,
        //cloudinaryUrl: payload.longUrl,
        emailSent: false
      };

    default:
      return state;
  }
}
