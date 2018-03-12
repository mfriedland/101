import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal } from 'react-native';
import { musicians, dancers, models } from '../../assets/SeedImages'
// import Video from 'react-native-video'


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
                style={{height:400, width:600}}
                source={{uri: musicians[this.props.id].image}} />
              {/* <Text>{ musicians[0].image }</Text> */}
              {/* <Video source={{uri: "https://www.youtube.com/watch?v=sULnyRvwHA4"}}   // Can be a URL or a local file.
                poster="https://baconmockup.com/300/200/" // uri to an image to display until the video plays
                ref={(ref) => {
                  this.player = ref
                }}                                      // Store reference
                rate={1.0}                              // 0 is paused, 1 is normal.
                volume={1.0}                            // 0 is muted, 1 is normal.
                muted={false}                           // Mutes the audio entirely.
                paused={false}                          // Pauses playback entirely.
                resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                repeat={true}                           // Repeat forever.
                playInBackground={false}                // Audio continues to play when app entering background.
                playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                style={styles.backgroundVideo} /> */}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // height: 500,
    // width: 500,
    flex: 1,
  },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
})


//react-native-button
//react-native-modalbox
