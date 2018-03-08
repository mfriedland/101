import { combineReducers } from 'redux';
import AllUsers from './AllUsers';
import Artists from './Artists';
import CurrentUser from './CurrentUser';
import Likes from './LikeArtist';

const rootReducer = combineReducers({
    AllUsers,
    Artists,
    CurrentUser,
    Likes,
});

export default rootReducer;

export * from './Artists';
