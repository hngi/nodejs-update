import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOADING,
  SIGN_IN_GOOGLE
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  loading: false,
  user: null,
  isSignedInWithGoogle: false
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
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
      return {
        ...state,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isSignedInWithGoogle: false,
        loading: false,
        token: null
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
    default:
      return state;
  }
}
