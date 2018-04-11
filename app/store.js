import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // USING ASYNC INSTEAD
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import   { AsyncStorage } from 'react-native';




const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,   composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

export default store;

export const persistor = persistStore(store); //.purge() to reset


