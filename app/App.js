import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Routes from './screens/Routes';
import { store } from './store'
import styles from './stylesheets'
console.disableYellowBox = true;

export default class myapp extends Component {

  render() {

    return (
      <Provider store={ store }>
        <View style={styles.container}>
            <Routes />
        </View>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     marginTop: 30,
//   },
// });



