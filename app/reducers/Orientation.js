const GET_ORIENTATION = 'GET_ORIENTATION';
const CREATE_ORIENTATION = 'CREATE_ORIENTATION';

const getOrientation = orientation => ({
    type: GET_ORIENTATION,
    orientation,
});

const createOrientation = orientation => ({
    type: CREATE_ORIENTATION,
    orientation,
});

export const setOrientation = orientation => dispatch => {
    dispatch(getOrientation(orientation))
}

export const fetchOrientation = () => dispatch => {
  dispatch(getOrientation())
}

export default orientationReducer = (state = [], action) => {

    switch (action.type) {
        case GET_ORIENTATION:
            return action;
        case CREATE_ORIENTATION:
            return action;
        default:
            return state;
    }
};
