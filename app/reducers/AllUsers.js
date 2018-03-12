// import axios from 'axios';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


// ACTIONS
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

// ACTION CREATORS


// THUNKS ? FUNCTIONS
export const fetchUsers = () => {
    return (dispatch) => {
        // console.log("HEY its working? because i dont have it restricted for loggedin users only")
        firebase.database().ref('/users').on('value', snapshot => {
            return dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: snapshot.val()
            });
        })
    }
};

// INITIAL STATE
const INITIAL_STATE = {};

// REDUCER
export default allUsers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
