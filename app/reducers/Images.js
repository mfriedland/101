const GET_IMAGES = 'GET_IMAGES';
const DELETE_SEARCH = 'DELETE_SEARCH'

const getImages = images => ({
    type: GET_IMAGES,
    images,
});

const deleteSearch = () => ({
    type: DELETE_SEARCH,
});

export const fetchImages = (searchText) => dispatch => {
    let search = searchText.replace(/\s/,'+')
    let imageResults = []
    fetch(`https://pixabay.com/api/?key=8649244-1d60bb9a8dd7e4f6ba9f1d298&q=${search}&image_type=photo`)
    .then(res => res.json())
    .then(foundResults => foundResults.hits)
    .then(images =>  {
        for (let i=0; i<images.length; i++) {
            imageResults.push({image: images[i].largeImageURL, tags: images[i].tags, user: images[i].user, width: images[i].imageWidth, height: images[i].imageHeight, id: images[i].id })
        }
    })
    .then( () => dispatch(getImages(imageResults)))
    .catch(err => console.error('Could not fetch images :(', err));
}

export const deleteImages = (searchText) => dispatch => {
    dispatch(deleteSearch())
}

export default imagesReducer = (state = [], action) => {

    switch (action.type) {
        case GET_IMAGES:
            return action;
        case DELETE_SEARCH:
            return [];
        default:
            return state;
    }
};
