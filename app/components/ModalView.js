import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal } from 'react-native';
import { musicians, dancers, models } from '../../assets/SeedImages'

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
            {/* <Image
                style={{flex:1}}
                source={musicians[0].image} /> */}
            <TouchableHighlight
              onPress={() => { this.props.setModalVisible(false) }}
            >
            <Image
                style={{height:150, width:200}}
                source={{uri: musicians[0].image}} />
              {/* <Text>{ musicians[0].image }</Text> */}
            </TouchableHighlight>
           </View>
         </View>
       </Modal>
    )
  }
}

export { ModalView }

const styles = StyleSheet.create({
  modalContainer: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 200,
  }
})
