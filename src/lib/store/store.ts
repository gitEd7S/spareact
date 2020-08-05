import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducers } from './root-reducer'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
)