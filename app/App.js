import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import firebase from 'firebase';
import { Spinner } from './components/Spinner'
import Routes from './pages/Routes';
import { NavBar, MenuBar } from './pages/index';
import { Actions } from 'react-native-router-flux'
// import { reducers } from './reducers';
import store from './store'

export default class myapp extends Component {

  state = { loggedIn: null} // or start w true?

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCxRRmY9_V51_tcfXTGnRDPIevesGmFCxM",
      authDomain: "fame-mobile.firebaseapp.com",
      databaseURL: "https://fame-mobile.firebaseio.com",
      projectId: "fame-mobile",
      storageBucket: "",
      messagingSenderId: "556199703412"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({loggedIn: true});
      else this.setState({ loggedIn: false});
      // this.setState({ loggedIn: !loggedIn })
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return Actions.profile()
      case false:
        return <Login Form />
      default:
      return <Spinner size='large' />
    }
  }

  render() {

    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <View style={styles.container}>
            <NavBar headerText={'Albums'} />
          </View>
          <View style={styles.containerLarge}>
            <Routes />
          </View>
          <View style={styles.container}>
            <MenuBar />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12092f',
  },
  containerLarge: {
    flexGrow: 12,
    backgroundColor: '#12092f',
  },
});

