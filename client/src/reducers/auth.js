import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOADING,
  NOT_LOADING,
  SIGN_IN_GOOGLE
} from '../actions/types';
const initialState = {
  token: localStorage.getItem('token'),
  loading: !1,
  authData: !0,
  user: {},
  isSignedInWithGoogle: !1
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, loading: !1 };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: !0,
        loading: !1,
        user: {
          id: payload.user._id,
          username: payload.user.username,
          email: payload.user.email
        }
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { ...state, loading: !1, authData: !1, isAuthenticated: !1 };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return { ...state, loading: !1, authData: !1, isAuthenticated: !1 };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isSignedInWithGoogle: !1,
        loading: !1,
        token: null,
        isAuthenticated: !1
      };
    case SIGN_IN_GOOGLE:
      return { ...state, loading: !1, isSignedInWithGoogle: !0 };
    case LOADING:
      return { ...state, loading: !0 };
    case NOT_LOADING:
      return { ...state, loading: !1 };
    default:
      return state;
  }
}
