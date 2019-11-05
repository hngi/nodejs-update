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
  loading: false,
  user: {},
  isSignedInWithGoogle: false
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user: {
          id: payload.user._id,
          username: payload.user.username,
          email: payload.user.email
        }
      };

    case REGISTER_FAIL:
    localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      };
    case LOGIN_FAIL:
    localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isSignedInWithGoogle: false,
        loading: false,
        token: null,
        isAuthenticated: false
      };

    case SIGN_IN_GOOGLE:
      return {
        ...state,
        loading: false,
        isSignedInWithGoogle: true
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case NOT_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
