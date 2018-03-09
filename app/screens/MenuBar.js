import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'


class MenuBar extends Component {

    _onPressDiscover() {
      () => this.props.navigation.navigate('discover')
    }
    _onPressHome() {
      () => this.props.navigation.navigate('welcome')
    }
    _onPressTrending() {
      () => this.props.navigation.navigate('trending')
    }
    _onPressProfile() {
      () => this.props.navigation.navigate('profile')
    }


  render() {
    const resizeMode = 'stretch';

    return (
      <View style={styles.container}>
            <View style={styles.menubarButtons}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')}>
                <Image style={{
                    transform: [{scaleX: .95}, {scaleY: 1}]}}
                    source={require('../../assets/MenuBar/home.png')}
                    />
              </TouchableOpacity>
            </View>
            <View style={styles.menubarButtons}>
              <TouchableOpacity onPress={this._onPressDiscover}>
                <Image style={{
                    transform: [{scaleX: .95}, {scaleY: 1}]}}
                    source={require('../../assets/MenuBar/discover.png')}
                    />
              </TouchableOpacity>
            </View>
            <View style={styles.menubarButtons}>
              <TouchableOpacity onPress={this._onPressTrending}>
                <Image style={{
                  transform: [{scaleX: .95}, {scaleY: 1}]}}
                  source={require('../../assets/MenuBar/trending.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.menubarButtons}>
              <TouchableOpacity onPress={this._onPressProfile}>
                <Image style={{
                  flexDirection:'row',
                  transform: [{scaleX: .95}, {scaleY: 1}]}}
                  source={require('../../assets/MenuBar/profile.png')} />
              </TouchableOpacity>
            </View>
      </View>

    );
  }
}

export { MenuBar };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  menubarButtons: {
    flex: 1,
    width: 100,
    alignItems: 'stretch',
    alignItems:'center',
    justifyContent :'center',
   }
});
