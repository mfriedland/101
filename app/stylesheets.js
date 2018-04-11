import { StyleSheet, View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  containerNoGrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  mainNavigatorFullContainer: {
    flex: 1
  },
  mainNavigatorContainer: {
    flexGrow: 13,
  },
  inputBox: {
      width: 300.3,
      height: 15.3,
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
    backgroundColor: '#7a8288',
    border: 'none',
    height: '20px',
    fontSize: '16px',
  }
})

export default styles
