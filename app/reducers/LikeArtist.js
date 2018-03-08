// import axios from 'axios';
import _ from 'lodash';
// import { Actions } from 'react-native-router-flux';


// ACTIONS
export const LIKE_ARTIST = 'LIKE_ARTIST';

// ACTION CREATORS


// THUNKS ? FUNCTIONS
export const swipeRightArtist = (artist) => {
    return {
        type: LIKE_ARTIST,
        payload: artist,
    }
};

// INITIAL STATE
const INITIAL_STATE = [];

// REDUCER
export default Likes = (state = [], action) => {
    switch (action.type) {
        case LIKE_ARTIST:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
// LIKE_ARTIST
// return _.uniqBy([
//     ...state,
//     action.payload,
// ], 'action.id');
