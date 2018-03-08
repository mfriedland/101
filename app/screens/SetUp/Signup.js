import React, { Component } from 'react';
import {  StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import SignUpForm from '../../components/SignUpForm';

class Signup extends Component {


  render() {
    return (
      <View style={styles.container}>

          <SignUpForm type="Signup" />
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}> Already have an account? </Text>
            <TouchableOpacity  onPressOut={() => this.props.navigation.navigate('login')}>
              <Text style={styles.loginButton}> Log in </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

export { Signup };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12092f',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginTextContainer: {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'flex-start',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginText: {
    fontSize: 13,
    color: 'rgb(252,197,76)',
  },
  loginButton: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgb(252,197,76)',
  }

});
