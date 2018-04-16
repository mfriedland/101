import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AsyncStorage } from 'react-native';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,   composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

export default store;

export const persistor = persistStore(store);
