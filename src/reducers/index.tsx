import { isFetchingReducer } from './isfetching';
import { accountReducer } from './account';
import { vehiclesReducer } from './vehicles';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  isFetching: isFetchingReducer,
  account: accountReducer,
  vehicles: vehiclesReducer
});
