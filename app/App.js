import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import Routes from './screens/Routes';
import { store } from './store'
import styles from './stylesheets'

export default class myapp extends Component {

  render() {
    return (
      <Provider store={ store }>
        <SafeAreaView style={styles.container}>
            <Routes />
        </SafeAreaView>
      </Provider>
    );
  }
}


