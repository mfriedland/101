import { combineReducers } from 'redux';
import Images from './Images';
import Orientation from './Orientation';

const rootReducer = combineReducers({
    Images,
    Orientation,
});

export default rootReducer;

export * from './Images';
export * from './Orientation';


