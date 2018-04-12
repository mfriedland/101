import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)

export const store = createStore(rootReducer, middleware);

export default store;



// import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // USING ASYNC INSTEAD
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import   { AsyncStorage } from 'react-native';


// const reducer = combineReducers({ loading, url, speech, speeches, user })

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
