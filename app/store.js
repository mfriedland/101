import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';


export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
)