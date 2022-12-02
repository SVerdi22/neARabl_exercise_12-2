import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
const { default: rootReducer } = require("./reducers");

const loggerMiddleware = createLogger()
const middleware = []

//For redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default function configureStore(preloadedState) {
    return createStore(
        rootReducer, 
        preloadedState, 
        composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
        )
}