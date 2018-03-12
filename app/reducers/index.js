import { combineReducers } from 'redux';
import AllUsers from './AllUsers';
import Artists from './Artists';
import CurrentUser from './CurrentUser';
import Likes from './LikeArtist';
// import NavReducer from './Navigation';

const rootReducer = combineReducers({
    // NavReducer,
    AllUsers,
    Artists,
    CurrentUser,
    Likes,
});

export default rootReducer;

export * from './Artists';
