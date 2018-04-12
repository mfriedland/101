import { StyleSheet, View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

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
    // display:'flex',
    // height:800,
    // width:800,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalImageBackground: {
    flex:1,
     alignItems: 'flex-end'
  },
  modalImage: {
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT/2,
    flex: 1,
    marginLeft: 10,
  },
  modalTextContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    width: SCREEN_WIDTH,
    paddingLeft: 20,
    paddingVertical: 8,
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
