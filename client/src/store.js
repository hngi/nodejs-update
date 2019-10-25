import { createStore, applyMiddleware } from "redux";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      loadingBarMiddleware({
        scope: "sectionBar"
      })
    )
  )
);

export default store;
