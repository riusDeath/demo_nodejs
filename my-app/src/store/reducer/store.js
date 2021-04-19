import  {  createStore,  applyMiddleware  }  from  'redux';
import  thunk  from  'redux-thunk';
import  {rootReducer}  from  './reducers';
import { ACTION_CLICK_REQUEST } from '../actions/constants'

const middlewareLog = store => next => action => {
    if (action == ACTION_CLICK_REQUEST) {
        console.log(action);
        console.log(store.getState())
        next(action)
    }
}

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middlewareLog)
)