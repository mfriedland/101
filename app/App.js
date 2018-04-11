import Expo, { Notifications } from 'expo';
import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { Spinner } from './components/Spinner'
import Routes from './screens/Routes';
import {persistor, store} from './store'
console.disableYellowBox = true;

export default class myapp extends Component {

  render() {

    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 30,
  },
});



