import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import logReducer from './logReducers';
import * as ActionTypes from '../action-types';

const appReducer = combineReducers({
  logReducer
});

const RootReducer = (state, action) => {
  if (action.type === ActionTypes.AUTH_LOGOUT) {
    // reset all state (default) after logout
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default RootReducer;
