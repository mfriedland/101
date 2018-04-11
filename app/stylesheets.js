import { StyleSheet, View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: 'row'
  },
  inputBox: {
    width: 300,
    height: 15.3,
    paddingLeft: 20,
    // fontFamily: "WorkSans",
    fontSize: 20.7,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginVertical: 20,
    color: "#ffffff"
  },
  searchInput: {
    backgroundColor: '#222222',
    height: '30px',
    length: '300px',
    fontSize: '20px',
    color: '#7a8288',
    border: 'none',
    borderBottom: '2px solid #7a8288',
    paddingLeft: '15px',
    marginRight: '20px',
  },
  searchButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    marginVertical: 20,
    backgroundColor: 'grey'
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT/2,
  },
  modalTextContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    width: SCREEN_WIDTH
  },
  modalText: {
    color: 'white',
    fontSize: '15'
  }
})

export default styles
