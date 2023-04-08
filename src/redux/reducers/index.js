import { combineReducers } from "redux";

import itemReducer from "./item";

const rootReducer = combineReducers({
  itemReducer,
});

export default rootReducer;
