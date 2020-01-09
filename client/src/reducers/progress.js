import { PROGRESS_BAR } from '../actions/types';
const initialState = {};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROGRESS_BAR:
      return { progress: payload };
    default:
      return state;
  }
}
