import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCxRRmY9_V51_tcfXTGnRDPIevesGmFCxM",
    authDomain: "fame-mobile.firebaseapp.com",
    databaseURL: "https://fame-mobile.firebaseio.com",
    projectId: "fame-mobile",
    storageBucket: "",
    messagingSenderId: "556199703412"
  });

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
)
