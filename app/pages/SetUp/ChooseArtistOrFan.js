import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { StackNavigator} from 'react-navigation';

class ChooseUserType extends Component {

    _onPress() {
      Actions.signup()
    }
  render() {
    const resizeMode = 'stretch';
    //
    return (
        <ImageBackground
          style={{
            flex: 1,
            resizeMode
          }}
          source={require('../../../assets/ChooseArtistOrFan/flashpage.png') }
          >
            <View style={styles.textContainer}>
              <TouchableWithoutFeedback onPressOut={this._onPress}>
                <Text style={styles.artistButton}> I'M AN ARTIST </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.textContainer}>
              <TouchableWithoutFeedback onPressOut={this._onPress}>
                <Text style={styles.artistButton}> I'M A FAN </Text>
              </TouchableWithoutFeedback>
            </View>
        </ImageBackground>

    );
  }
}

export { ChooseUserType }

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistButton: {
        fontSize: 17,
        fontWeight: '700',
        color: 'white',
        letterSpacing: 5,
    },
  editButton: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white',
    },
});
