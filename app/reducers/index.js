import { combineReducers } from 'redux';
import Images from './Images';
// import SelectedImage from './SelectedImage';

const rootReducer = combineReducers({
    Images,
    // SelectedImage,
});

export default rootReducer;

export * from './Images';
// export * from './SelectedImage';

