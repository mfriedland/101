import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { StackNavigator} from 'react-navigation';
import styles from '../../stylesheets'

class ChooseUserType extends Component {

    _onPress() {
      // Actions.signup()
    }
  render() {
    const resizeMode = 'stretch';
    //
    return (
        <ImageBackground
          style={{
            flex: 1,
            // resizeMode
          }}
          source={require('../../../assets/ChooseArtistOrFan/flashpage.png') }
          >
            <View style={styles.chooseUserTextContainer}>
              <TouchableWithoutFeedback onPressOut={() => this.props.navigation.navigate('login')}>
                <View>
                  <Text style={styles.selectUserTypeButton}>
                  I'M AN ARTIST </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.chooseUserTextContainer}>
              <TouchableWithoutFeedback onPressOut={() => this.props.navigation.navigate('signup')}>
                <View>
                  <Text style={styles.selectUserTypeButton}> I'M A FAN </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
        </ImageBackground>

    );
  }
}

export { ChooseUserType }

