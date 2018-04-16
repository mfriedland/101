import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal, ImageBackground } from 'react-native';
// import styles from '../stylesheets'
import ModalImage from './ModalImage'
let SCREEN_WIDTH
let SCREEN_HEIGHT

export default class ModalView extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: null,
      dimensions: Dimensions.get("window")
    };
  }

  landscapeView(mode, image) {
    if (image) {
      let height = this.state.dimensions.height
      let width = this.state.dimensions.width
      console.log('in landscapeView', 'screenWidth', width, 'screenHeight', height)

    return (
        <View style={{flex:1}}>
          <ImageBackground style={{ flex: 1, height: height, width: width, justifyContent: 'center', transform: [{ rotate: '270deg' }]}} source={{uri: image.image}}>
          <Text style={styles.modalX}> X </Text>
          <View style={styles.modalLandscapeTextContainer}>
            <Text style={styles.modalText}>User: {image.user} </Text>
            <Text style={styles.modalText}>Tags: {image.tags}</Text>
            <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
          </View>
        </ImageBackground>
      </View>
      )
    }
  }

  portraitView = (mode, image) => {
    if (image) {
    return (
      <View style={{flex:1}}>
        <ImageBackground style={{ height: this.state.dimensions.height, width: this.state.dimensions.width, justifyContent: 'flex-end' }} source={{uri: image.image}}>
          <Text style={styles.modalX}> X </Text>
          <View style={styles.modalPortraitTextContainer}>
            <Text style={styles.modalText}>User: {image.user} </Text>
            <Text style={styles.modalText}>Tags: {image.tags}</Text>
            <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
          </View>
        </ImageBackground>
      </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.modalContainer}>
      { this.props.orientation === 'landscape' ?
            <ImageBackground style={{ flex: 1, height: this.props.height, width: this.props.width, justifyContent: 'flex-end'}} source={{uri: image.image}}>
              <Text style={styles.modalX}> X </Text>
              <View style={styles.modalLandscapeTextContainer}>
                <Text style={styles.modalText}>User: {image.user} </Text>
                <Text style={styles.modalText}>Tags: {image.tags}</Text>
                <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
              </View>
            </ImageBackground>
          :
            <ImageBackground style={{ height: this.state.dimensions.height, width: this.state.dimensions.width, transform: [{ rotate: '270deg' }], justifyContent: 'flex-end' }} source={{uri: image.image}}>
              <Text style={styles.modalX}> X </Text>
              <View style={styles.modalPortraitTextContainer}>
                <Text style={styles.modalText}>User: {image.user} </Text>
                <Text style={styles.modalText}>Tags: {image.tags}</Text>
                <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
              </View>
            </ImageBackground>
          }
      </View>
    )
  }
}

export const styles = StyleSheet.create({

modalContainer: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  width: SCREEN_WIDTH,
},
modalPortraitImageBackground: {
  flex:1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
},
modalLandscapeImageBackground: {
  flex:1,
  justifyContent: 'center',
  transform: [{ rotate: '270deg' }],
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
},
modalImage: {
  flex: 1,
},
modalPortraitTextContainer: {
  backgroundColor: 'rgba(0,0,0,1)',
  paddingLeft: 20,
  paddingVertical: 8,
  width: SCREEN_WIDTH,
},
modalLandscapeTextContainer: {
  backgroundColor: 'rgba(0,0,0,1)',
  paddingLeft: 20,
  paddingVertical: 8,
  width: SCREEN_WIDTH,
  justifyContent: 'flex-end'
},
modalText: {
  color: 'white',
  fontSize: 15
},
modalX: {
  display: 'flex',
  color: 'black',
  paddingTop: 30,
  textShadowColor:'white',
  textShadowOffset: {width: 3, height: 3},
  textShadowRadius: 20,
  fontSize: '28',
  fontWeight: '700'
}
})
