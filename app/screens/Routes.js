import React, {Component} from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import Navigator from './Navigator'
import styles from '../stylesheets'

const Routes = () =>  {
  return(
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

const mapStateToProps = (state) => {
  return { images } = state.Images || [];
};

export default connect(mapStateToProps)(Routes)
