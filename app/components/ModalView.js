import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { getOrientation } from '../reducers'
import ModalImage from './ModalImage'

// import styles from '../stylesheets'
let SCREEN_WIDTH
let SCREEN_HEIGHT

export class ModalView extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: null,
      dimensions: Dimensions.get("window")
    };
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }

  handler = dims => {
    let height = dims.window.height
    let width = dims.window.width
    this.setState({dimensions: {height, width}});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalVisible: nextProps.modalVisible,
      id: nextProps.id,
    })
  }

  landscapeView(mode, image) {
    if (image) {
      let height = this.state.dimensions.height
      let width = this.state.dimensions.width
    return (
      <View>
        <ModalImage orientation={this.props.mode} height={height} width={width}/>
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
    image = this.props.image
    const {width, height} = this.state.dimensions;
    console.log('props', this.props.mode)
    let view = this.props.mode === 'portrait' ? this.portraitView(this.props.mode, image) : this.landscapeView(this.props.mode, image)
    return (
      <View style={styles.modalContainer}>
        <Modal
          transparent={ true }
          visible={ this.state.modalVisible }
          supportedOrientations={['portrait', 'landscape']}
          onRequestClose={() => { this.props.setModalVisible(false) }}
        >
        <TouchableHighlight style={{flex: 1}} onPress={() => { this.props.setModalVisible(false) }} >
          {view}
        </TouchableHighlight>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images;
};
export default connect(mapStateToProps, {getOrientation})(ModalView)

// {image &&
//   <ModalImage orientation={mode} height={height} width={width} image={image} />
//   }
export const styles = StyleSheet.create({
modalView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
portraitModalContainer: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  // transform: [{ rotate: '270deg' }]
},
landscapeModalContainer: {
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  // transform: [{ rotate: '270deg' }]
},
modalContainer: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  // transform: [{ rotate: '270deg' }],
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
  marginBottom: 45,
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


//  <ImageBackground style={{ flex: 1, height: height, width: width, justifyContent: 'center', transform: [{ rotate: '270deg' }]}} source={{uri: image.image}}>
    //  <Text style={styles.modalX}> X </Text>
    //        <View style={styles.modalLandscapeTextContainer}>
    //       <Text style={styles.modalText}>User: {image.user} </Text>
    //        <Text style={styles.modalText}>Tags: {image.tags}</Text>
    //        <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
    //         </View>
    //  </ImageBackground>
      // {image &&
      //       (height > width ?
      //       <ImageBackground style={{ flex: 1, height: height, width: width, justifyContent: 'flex-end'}} source={{uri: image.image}}>
      //         <Text style={styles.modalX}> X </Text>
      //         <View style={styles.modalLandscapeTextContainer}>
      //           <Text style={styles.modalText}>User: {image.user} </Text>
      //           <Text style={styles.modalText}>Tags: {image.tags}</Text>
      //           <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
      //         </View>
      //       </ImageBackground>
      //     :
      //       <ImageBackground style={{ height: this.state.dimensions.height, width: this.state.dimensions.width, transform: [{ rotate: '270deg' }], justifyContent: 'flex-end' }} source={{uri: image.image}}>
      //         <Text style={styles.modalX}> X </Text>
      //         <View style={styles.modalPortraitTextContainer}>
      //           <Text style={styles.modalText}>User: {image.user} </Text>
      //           <Text style={styles.modalText}>Tags: {image.tags}</Text>
      //           <Text style={styles.modalText}>Resolution: {image.width} x {image.height}</Text>
      //         </View>
      //       </ImageBackground>
      //       )
      //     }
