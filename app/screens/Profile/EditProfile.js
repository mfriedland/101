import React, { Component } from 'react';
import {  StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import EditForm from '../../components/EditForm';
import styles from '../../stylesheets'

class EditProfile extends Component {

  login () {
      // Actions.login()
  }

  render() {
    // console.log('editprofile', this.props.user, this.props.userId)
    return (
      <View style={styles.containerNoGrow}>
          <EditForm type="edit" user={this.props.user} userId={this.props.userId} />
      </View>
    );
  }
}

export { EditProfile };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#12092f',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
// });
