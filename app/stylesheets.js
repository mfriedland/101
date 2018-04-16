import { StyleSheet, View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager} from 'react-native';
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchPortraitView: {
    flex: 1,
    marginTop: 30,
  },
  searchLandscapeView: {
    flex:1,
  },
  searchContainer: {
    flex: 1,
    height: 10,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  searchInput: {
    flex: 1,
    height: 20.3,
    paddingLeft: 20,
    paddingBottom: 5,
    fontFamily: "WorkSans",
    fontSize: 18.7,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginVertical: 20,
    color: "#ffffff"
  },
  searchButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    height: 35,
    backgroundColor: 'grey',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    marginRight: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    paddingHorizontal: 3,
  },
  imagesListPortraitView: {
    flex: 11
  },
  imagesListLandscapeView: {
    flex: 6
  },
  imagesListContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagesFlatList: {
    display: 'flex',
    justifyContent: 'space-between',
    marginHorizontal:'1.667%',
    marginVertical: '4%',
    alignContent:'space-between'
  },
  imagesContainer: {
    height: 100,
    width: '30%',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal:'1.667%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  image: {
    flex: 1
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portraitModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  landscapeModalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    width: SCREEN_WIDTH,
  },
  modalImageBackground: {
    flex:1,
    alignItems: 'flex-end',
    width: SCREEN_WIDTH,
  },
  modalPortraitImageBackground: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  modalLandscapeImageBackground: {
    flex:1,
    justifyContent: 'center',
    transform: [{ rotate: '270deg' }],
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  modalImage: {
    flex: 1,
  },
  modalPortraitTextContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    paddingLeft: 20,
    paddingVertical: 8,
    width: SCREEN_WIDTH,
  },
  modalLandscapeTextContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    paddingLeft: 20,
    paddingVertical: 8,
    marginBottom: 45,
    justifyContent: 'flex-end'
  },
  modalText: {
    color: 'white',
    fontSize: 15
  },
  modalX: {
    display: 'flex',
    color: 'black',
    paddingTop: 30,
    textShadowColor:'white',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 20,
    fontSize: '28',
    fontWeight: '700'
  }
})

export default styles
