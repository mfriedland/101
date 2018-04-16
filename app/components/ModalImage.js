import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from '../stylesheets'
import ModalImage from './ModalImage'

export default class ModalView extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: null,
      dimensions: Dimensions.get("window")
    };
  }

  render() {
    return (
      <View style={styles.modalContainer}>

        <ImageBackground style={{ justifyContent: 'flex-end', alignItems: 'flex-end', width: this.props.width, height: this.props.height}} source={{uri: image.image}}>
          <Text style={styles.modalX}> X </Text>
          <View style={{ backgroundColor: 'rgba(0,0,0,1)', paddingLeft: 20, paddingVertical: 8, width: this.props.width, justifyContent: 'flex-end'}}>
            <Text style={styles.modalText}>User: {image.user} </Text>
            <Text style={styles.modalText}>Tags: {image.tags}</Text>
            <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
