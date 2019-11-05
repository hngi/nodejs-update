import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  GET_USER_UPLOADS_SUCCESS,
  GET_USER_UPLOADS_FAIL,
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
  },
  uploads: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploadstate: payload,
        loading: false
      };

    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        cloudinaryUrl: null,
        shortUrl: null,
        shortCode: null,
        loading: false
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        //cloudinaryUrl: payload.longUrl,
        loading: false,

        emailSent: true
      };
    case GET_USER_UPLOADS_SUCCESS:
      return {
        ...state,
        uploads: payload.uploads,
        emailSent: false,
        loading: false
      };
    case GET_USER_UPLOADS_FAIL:
      return {
        ...state,
        uploads: [],
        emailSent: false,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
