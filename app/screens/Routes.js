import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navigator from './Navigator'
import store from '../store'
import styles from '../stylesheets'
import {View, StyleSheet, Image, Button } from 'react-native'
import {  NavBar} from './index';


let currentUser;
export class Route extends Component {
  constructor() {
    super()
    this.state = store.getState();

  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {
    return(
      <View style={{flex:1, backgroundColor: 'green'}}>
        <Navigator />
      </View>
    )
  }
}


export default connect(null)(Route);
