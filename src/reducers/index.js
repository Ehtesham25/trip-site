import { combineReducers } from "redux";

import tripsReducer from "./tripReducers";
import authReducer from "./authReducer";

export default combineReducers({
  tripsReducer,
  authReducer,
});
