// import axios from 'axios';
// import _ from 'lodash';
// import { Actions } from 'react-native-router-flux';


// ACTIONS
export const LIKE_ARTIST = 'LIKE_ARTIST';
export const FETCH_LIKES = 'FETCH_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const CLEAR_LIKES = 'CLEAR_LIKES';

// ACTION CREATORS


// THUNKS ? FUNCTIONS
export const swipeRightArtist = (artist) => {
    return {
        type: LIKE_ARTIST,
        payload: artist,
    }
};

export const fetchLikes = () => {
    return {
        type: FETCH_LIKES,
        payload: artists,
    }
};

export const removeLike = (artist) => {
    return {
        type: REMOVE_LIKE,
        payload: artist,
    }
};

export const clearLikes = () => {
    return {
        type: CLEAR_LIKES,
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
        case FETCH_LIKES:
            return action.payload;
        case CLEAR_LIKES:
            return [];
        case REMOVE_LIKE:
            return state.filter(artist => artist.id !== action.payload.id);
        default:
            return state;
    }
};
// LIKE_ARTIST
// return _.uniqBy([
//     ...state,
//     action.payload,
// ], 'action.id');
