import { REGISTER_FAIL, LOGIN_FAIL } from '../actions/types';
const initialState = {
  loading: !1,
  authData: '',
  num_of_fails: 0
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_FAIL:
      var new_num_of_fails = state.num_of_fails + 1;

      localStorage.removeItem('token');
      return {
        ...state,
        loading: !1,
        num_of_fails: new_num_of_fails,
        authData: payload.toString() + new_num_of_fails.toString()
      };
    case LOGIN_FAIL:
      var new_num_of_fails = state.num_of_fails + 1;
      localStorage.removeItem('token');
      return {
        ...state,
        loading: !1,
        num_of_fails: new_num_of_fails,
        authData: payload.toString() + new_num_of_fails.toString()
      };
    default:
      return state;
  }
}
