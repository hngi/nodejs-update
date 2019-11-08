import { REGISTER_FAIL, LOGIN_FAIL } from '../actions/types';
const initialState = {
  loading: !1,
  authData: ''
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { loading: !1, authData: payload };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return { loading: !1, authData: payload };
    default:
      return state;
  }
}
