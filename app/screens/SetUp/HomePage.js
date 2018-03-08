import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { TabNavigator, StackNavigator } from 'react-navigation';

class HomePage extends Component {


    // _onPress() {
    //   // Actions.choose()
    //   navigation.navigate('login')
    // }

  render() {
    const resizeMode = 'stretch';
    //
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPressOut={() => this.props.navigation.navigate('choose')}>
              <Image
                style={{
                  flex: 1,
                  // resizeMode
                }}
                source={require('../../../assets/HomePage/FlashScreen.jpg') }
              />
          </TouchableWithoutFeedback>
      </View>

    );
  }
}

export { HomePage }
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12092f',
  },
});
