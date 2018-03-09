import React, { Component } from 'react';
import {  StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import SignUpForm from '../../components/SignUpForm';
import styles from '../../stylesheets'

class Signup extends Component {


  render() {
    return (
      <View style={styles.container}>

          <SignUpForm type="Signup" />
          <View style={styles.loginNavigateTextContainer}>
            <Text style={styles.loginNavigateText}> Already have an account? </Text>
            <TouchableOpacity  onPressOut={() => this.props.navigation.navigate('login')}>
              <Text style={styles.loginNavigateButton}> Log in </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

export { Signup };
