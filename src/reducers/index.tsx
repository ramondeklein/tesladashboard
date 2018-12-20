import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import { accountReducer } from "./account";
import { isFetchingReducer } from "./isfetching";
import { vehiclesReducer } from "./vehicles";

const createReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  isFetching: isFetchingReducer,
  account: accountReducer,
  vehicles: vehiclesReducer,
});

export default createReducer;
