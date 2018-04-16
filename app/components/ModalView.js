import React, { Component } from 'react';
import { FlatList, View, Dimensions, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { getOrientation } from '../reducers'
import ModalImage from './ModalImage'
import styles from '../stylesheets'

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

  display = (mode, image) => {
    if (image) {
      let height = this.state.dimensions.height
      let width = this.state.dimensions.width
    return (
      <TouchableHighlight style={styles.modalImage} onPress={() => { this.props.setModalVisible(false) }} >
        <View>
          <ModalImage orientation={this.props.mode} height={height} width={width}/>
        </View>
      </TouchableHighlight>
      )
    }
  }

  render() {
    image = this.props.image
    const {width, height} = this.state.dimensions;
    return (
      <View style={styles.modalContainer}>
        <Modal
          transparent={ true }
          visible={ this.state.modalVisible }
          supportedOrientations={['portrait', 'landscape']}
          onRequestClose={() => { this.props.setModalVisible(false) }}
        >
          {this.display(this.props.mode, image)}
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images;
};
export default connect(mapStateToProps, {getOrientation})(ModalView)
