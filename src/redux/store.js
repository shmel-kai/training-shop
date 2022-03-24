import { applyMiddleware, compose, createStore } from 'redux'

import { rootReducer } from './reducer'

import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga/productSaga'

const sagaMiddleware = createSagaMiddleware()

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composedEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export const action = (type, data) => store.dispatch({ type, data })

