import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'


class MenuBar extends Component {

    _onPress() {
      Actions.login()
    }

  render() {
    const resizeMode = 'stretch';

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
         <TouchableOpacity onPress={this._onPress}>
              <Image
                style={{
                  flexDirection:'row',
                  alignItems:'flex-start',
                  justifyContent :'flex-start',
                  marginTop: 20,
                  // marginLeft: 20,
                  // paddingBottom: 10,
                  transform: [{scaleX: .95}, {scaleY: 1}]
                }}
                source={require('../../assets/MenuBar/FullBar/group.png') }
              />
            </TouchableOpacity>
          </View>
          {
          //   <View style={styles.lineContainer} >
          //   <Image
          //     style={{
          //       // flexDirection:'row',
          //       alignItems: 'center',
          //       // justifyContent :'center',
          //       marginTop: 10,
          //       // marginLeft: 20,
          //       width: '95%'
          //     }}
          //     source={require('../../assets/MenuBar/VerticalLines/group.png') }
          //   />
          // </View>
            }
      </View>

    );
  }
}

export { MenuBar };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#12092f',
  }
});
