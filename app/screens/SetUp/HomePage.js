import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { TabNavigator, StackNavigator } from 'react-navigation';
import styles from '../../stylesheets'

class HomePage extends Component {


    // _onPress() {
    //   // Actions.choose()
    //   navigation.navigate('login')
    // }

  render() {
    // const resizeMode = 'stretch';
    //
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPressOut={() => this.props.navigation.navigate('choose')}>
              <Image
                style={{
                  flex: 1,
                  height: 400,
                  width: 400,
                  // resizeMode
                }}
                source={require('../../../assets/HomePage/FlashScreen.jpg') }
              />
          </TouchableWithoutFeedback>
      </View>

    );
  }
}

// const mapStateToProps = state => ({
//   navigation: state.nav,
// });
// export default connect(mapStateToProps)(HomepAge);

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#12092f',
//   },
// });

export { HomePage }
