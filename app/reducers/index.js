import { combineReducers } from 'redux';
import AllUsers from './AllUsers';
import Artists from './Artists';
import CurrentUser from './CurrentUser';

const rootReducer = combineReducers({
    AllUsers,
    Artists,
    CurrentUser
});

export default rootReducer;

export * from './Artists';