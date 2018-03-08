import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import firebase from 'firebase';
import { Spinner } from './components/Spinner'
import Routes from './screens/Routes';
import store from './store'
console.disableYellowBox = true;


export default class myapp extends Component {

  state = { loggedIn: null} // or start w true?

  componentDidMount() { // check to see if this instance is being unmounted


    firebase.auth().onAuthStateChanged(user => {
      // if (this.  ) return;
      if (user) this.setState({loggedIn: true});
      else this.setState({ loggedIn: false});
      // this.setState({ loggedIn: !loggedIn })
    })
  }

  // componentWillUnmount() {
    // this.cancelled = true;
  // }


  render() {

    return (
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}



