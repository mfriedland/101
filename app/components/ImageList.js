import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from '../stylesheets'
import ModalView from './ModalView'
import { fetchAllImages, setOrientation } from '../reducers'

let imageResults = []

export class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageResults: [],
      columns: 3,
      modalVisible: false,
      selectedImage: null,
    }
  }

  componentDidMount() {
    this.props.fetchAllImages();
    imageResults = this.props.images
    this.setState({imageResults})
  }

  componentWillReceiveProps() {
    imageResults = this.props.images
    this.setState({imageResults})
  }

  componentWillUnmount() {
    this.setState(this.state)
  }

  _renderItem = ({item}) => (
        <TouchableHighlight style={styles.imagesContainer} id={item.id} onPress={() => this._setModalVisible(true,item)} >
          <Image style={styles.image} source={{ uri: item.image }} />
        </TouchableHighlight>
  )
  _setModalVisible(visible, item) {
    if (item) {
      this.setState({ modalVisible: visible, selectedImage: item});
    } else  this.setState({ modalVisible: visible })
  }

  _handleLoadMore = () => {
  }

  render() {
    return (
      <View style={styles.imagesListContainer}>
        <FlatList
          keyExtractor= {(item, index) => index }
          numColumns={this.state.columns}
          ItemSeparatorComponent={this._renderSeparator}
          data={this.state.imageResults}
          renderItem={this._renderItem}
          contentContainerStyle={styles.imagesFlatList}
          onEndReached={this._handleLoadMore}
          onEndThreshold={0}
        />
        { this.props.mode === 'portrait' ?
        <ModalView
            modalVisible={ this.state.modalVisible }
            setModalVisible={ (vis) => { this._setModalVisible(false) }}
            image = {this.state.selectedImage}
            style={styles.portraitModalContainer}
            mode={this.props.mode}
        />
        :
        <ModalView
            modalVisible={ this.state.modalVisible }
            setModalVisible={ (vis) => { this._setModalVisible(false) }}
            image = {this.state.selectedImage}
            // style={styles.landscapeModalContainer}
            mode={this.props.mode}
        />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images || [];
};

export default connect(mapStateToProps, {fetchAllImages})(ImageList)

