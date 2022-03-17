import { applyMiddleware, compose, createStore } from 'redux'

import { cartReducer } from './reducer'

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COPOSE__ || compose;

export const store = createStore(cartReducer, composedEnhancers(applyMiddleware()));

