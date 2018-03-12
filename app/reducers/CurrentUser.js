// import axios from 'axios';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

// ACTIONS
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';

// const LOGUT_USER = 'LOGUT_USER';
export const FIRST_NAME_CHANGED = 'FIRST_NAME_CHANGED';
export const LAST_NAME_CHANGED = 'LAST_NAME_CHANGED';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';


// ACTION CREATORS
export const loginUser = ({ email, password }, nav) => {
    console.log('hit me baby')
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, nav))
            .catch((error) => {
                // console.log(nav)
                // console.log(error);
                return loginUserFail(dispatch, nav);
            });
    };
};

const loginUserFail = (dispatch, nav) => {
    dispatch({ type: LOGIN_USER_FAIL });
    nav()
};

const loginUserSuccess = (dispatch, user, nav) => {
    // console.log('success')
    // console.log(nav)
    dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
        });
    nav()

    // Actions.pop();
    // Actions.profile() //{ type: 'reset' }); // or start with Actions.pop() b/c it prevents double stacking
};

//  How to use AsyncStorage
// AsyncStorage.setItem('fb_token', token);
// AsycnStorage.getItem('fb_token')
// need to do thunk b/c othewise action creators think youre returning an action right away, and since this is async we need to do reduxThunk or reduxPromise (?)
// bc theres a single statement within the arrow function
// we can omit the curly braces and the return (before async dispatch)
// export const facebookLogin = () => async dispatch => {
//     let fbToken = await AsyncStorage.getItem('fb_token') //could have done .then or async()
//     if (fbToken) {
//         dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: fbToken })
//     } else {
//         AsyncStorage.setItem('fb_token')
//     }
// };

export const signupUser = ({ firstName, lastName, email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                return firebase.auth().signInWithEmailAndPassword(email, password)
            })
            .then(
                () => {
                    const { currentUser } = firebase.auth();
                    // console.log('firebase', currentUser)
                    return firebase.database().ref(`users/${currentUser.uid}/info`)
                        .set({ firstName, lastName, email, password }) // was using push from tutorial udemy
                }
            )
            // not sure if the line below should go above the previous .then
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        // .catch((error) => { console.log(error);
    };
};

export const updateUser = ({ firstName, lastName, email, password, userId }) => dispatch => {
    // Actions.pop()
    dispatch({ type: UPDATE_USER })
    firebase.database().ref(`users/${userId}`)
        .set({ firstName, lastName, email, password })
        .then(() => console.log('saved!'))
        // .then(() => Communications.text('310-948-2255', 'Your profile has been updated'))
        // .then(() => Actions.pop())

};

export const deleteUser = ({ userId }) => dispatch => {
    dispatch({ type: DELETE_USER })
    firebase.database().ref(`users/${userId}`)
        .remove()
        // .then(() => Actions.home())
};

// const logoutUser = artist => ({
//     type: LOGUT_USER,
//     artist,
// });

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};


// INITIAL STATE
const INITIAL_STATE = {
    id: 1,
    firstName: 'Micah',
    lastName: 'Friedland',
    email: 'micah@gmail.com',
    password: 'Password',
    user: null,
    error: '',
    loading: false
};

// REDUCER
export default currentUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false };

        case UPDATE_USER:
            return {...state, ...INITIAL_STATE, user: action.payload }

        case DELETE_USER:
            return {...state, ...INITIAL_STATE, user: {} }

        case EMAIL_CHANGED:
            return {...state, email: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case FIRST_NAME_CHANGED:
            return {...state, firstName: action.payload };
        case LAST_NAME_CHANGED:
            return {...state, lastName: action.payload };
        default:
            return state;
    }
};


// REDUCER
// export default currentUserReducer = (users = [], action) => {

// case UPDATE_ARTIST:
//     return users.map(artist => (
//         artist.id === action.artist.id ? action.artist : artist
//     ));

// case REMOVE_ARTIST:
//     return users.filter(artist => (
//         artist.id !== action.artist.id
//     ))
