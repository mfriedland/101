import { combineReducers } from 'redux';
import Images from './Images';

const rootReducer = combineReducers({
    Images,
});

export default rootReducer;

export * from './Images';
