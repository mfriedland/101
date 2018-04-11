import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
// import { Actions } from 'react-native-router-flux'
// import { TabNavigator, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../stylesheets'
import ImageList from '../components/ImageList'
import Search from '../components/Search'

class HomePage extends Component {

  render() {
    // const resizeMode = 'stretch';
    //
    return (
      <View style={styles.container}>
        <Search />
        <ImageList />
      </View>

    );
  }
}

const mapStateToProps = state => ({
  navigation: state.nav,
});
export default connect(mapStateToProps)(HomePage);

export { HomePage }
