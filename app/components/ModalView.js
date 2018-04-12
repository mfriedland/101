import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import styles from '../stylesheets'

export default class ModalView extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalVisible: nextProps.modalVisible,
      id: nextProps.id,
    })
  }

  render() {
    image = this.props.image
    return (
       <Modal
        // animationType="slide"
        transparent={ true }
        visible={ this.state.modalVisible }
        onRequestClose={() => { this.props.setModalVisible(false) }}
        style={styles.modalContainer}
       >
         <View style={styles.modalContainer}>
           <View>
            <TouchableHighlight
              onPress={() => { this.props.setModalVisible(false) }}
            >
              {image &&
              <View style={{flex:1}} >
                <ImageBackground style={styles.modalImageBackground} source={{uri: image.image}}>
                  <Text style={styles.modalX}> X </Text>
                </ImageBackground>
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalText}>User: {image.user} </Text>
                  <Text style={styles.modalText}>Tags: {image.tags}</Text>
                  <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
                </View>
              </View>
              }
            </TouchableHighlight>
           </View>
         </View>
       </Modal>
    )
  }
}
