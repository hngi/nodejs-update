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
  emailSent: !1,
  loading: !1,
  uploadstate: { success: !1 },
  uploads: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_SUCCESS:
      return { ...state, uploadstate: payload, loading: !1 };
    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        cloudinaryUrl: null,
        shortUrl: null,
        shortCode: null,
        loading: !1
      };
    case SEND_EMAIL_SUCCESS:
      return { ...state, loading: !1, emailSent: !0 };
    case GET_USER_UPLOADS_SUCCESS:
      return { ...state, uploads: payload.uploads, emailSent: !1, loading: !1 };
    case GET_USER_UPLOADS_FAIL:
      return { ...state, uploads: [], emailSent: !1, loading: !1 };
    case LOADING:
      return { ...state, loading: !0 };
    default:
      return state;
  }
}
