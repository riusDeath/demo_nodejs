import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer'

const middlewareLog = store => next => action => {
    console.log('ok');
    console.log(store.getState())
    next(action)
}

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middlewareLog)
)