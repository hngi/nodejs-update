import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  // HIDE_LINK,
  LOADING
} from '../actions/types';
const initialState = {
  cloudinaryUrl: null,
  shortUrl: null,
  shortCode: null,
  emailSent: false,
  loading: false,
  uploadstate: {
    success: false
  }
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        uploadstate: payload
      };

    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        cloudinaryUrl: null,
        shortUrl: null,
        shortCode: null
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        //cloudinaryUrl: payload.longUrl,
        emailSent: true
      };
    // case HIDE_LINK:
    //   return {
    //     ...state,
    //     //cloudinaryUrl: payload.longUrl,
    //     emailSent: false
    //   };
    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
