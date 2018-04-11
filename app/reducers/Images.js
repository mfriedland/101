
const GET_IMAGES = 'GET_IMAGES';

const getImages = images => ({
    type: GET_IMAGES,
    images,
});

export const fetchImages = (searchText) => dispatch => {
    let search = searchText.replace(/\s/,'+')
    let imageResults = []
    fetch(`https://pixabay.com/api/?key=8649244-1d60bb9a8dd7e4f6ba9f1d298&q=${search}&image_type=photo`)
    .then(res => res.json())
    .then(foundResults => foundResults.hits)
    .then(images =>  {
        for (let i=0; i<images.length; i++) {
            imageResults.push({image: images[i].largeImageURL, tags: images[i].tags, user: images[i].user, id: images[i].id })
        }
    })
    .then( () => dispatch(getImages(imageResults)))
    .catch(err => console.error('Could not fetch images :(', err));
}


export default imagesReducer = (state = [], action) => {

    switch (action.type) {
        case GET_IMAGES:
            console.log(action)
            return action;
        default:
            return state;
    }
};
