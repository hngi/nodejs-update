import { TOGGLE_SHARE } from "../actions/types";

const initialState = {
  hide: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHARE:
      return { state, hide: !state.hide };
    default:
      return state;
  }
}
