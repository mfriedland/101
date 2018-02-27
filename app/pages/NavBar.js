import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';


class NavBar extends Component {

    _onPress() {
      // Actions.trending();
      Actions.profile()
    }

  // HomeNavigation = () => {
  //   this.props.navigate('Login');
  // };

  render() {
    console.log('hey', this.props);
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <TouchableWithoutFeedback onPress={this._onPress}>
              <Image
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                  transform: [{ scaleX: 1.33 }, { scaleY: 1.33 }]
                }}
               source={require('../../assets/NavBar/logo.png')}
              />
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.props.headerText}</Text>
        </View>
        <View style={styles.lineContainer} >
            <Image
              style={{
                // flexDirection:'row',
                alignItems: 'center',
                // justifyContent :'center',
                marginTop: 20,
                // marginLeft: 20,
                width: '95%'

              }}
              source={require('../../assets/NavBar/horizontalLine.png')}
            />
        </View>
      </View>

    );
  }
}

export { NavBar };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#12092f',
    elevation: 2,
    height: 60,
    paddingTop: 10,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  lineContainer: {
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(252,197,76)',
    marginTop: -12,
  }
});
