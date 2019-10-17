import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import showShare from "./share";

const rootReducer = combineReducers({ auth, alert, showShare });

export default rootReducer;
