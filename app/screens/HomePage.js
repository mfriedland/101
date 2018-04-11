import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../stylesheets'
import ImageList from '../components/ImageList'
import Search from '../components/Search'

class HomePage extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
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
