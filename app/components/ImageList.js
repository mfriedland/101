import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from '../stylesheets'
import ModalView from './ModalView'

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
    // imageResults = [];
    // this.setState({imageResults})

    imageResults = this.props.images
    this.setState({imageResults})
  }

  _renderItem = ({item}) => (
        <TouchableHighlight style={{height: 100, width: '30%', alignContent: 'space-between', justifyContent: 'space-between', marginBottom: 10, marginHorizontal:'1.667%'}} id={item.id} onPress={() => this._setModalVisible(true,item)} >
          <Image style={{flex:1}} source={{ uri: item.image }} />
        </TouchableHighlight>
  )
  _setModalVisible(visible, item) {
    if (item) {
      // id = item - 1
      this.setState({ modalVisible: visible, selectedImage: item});
    } else  this.setState({ modalVisible: visible })
  }

  render() {
    console.log('images', this.props.images)
    return (
      <View className="page" style={{flex: 10, backgroundColor: 'white'}}>
        <FlatList
          keyExtractor= {(item, index) => index }
          numColumns={this.state.columns}
          ItemSeparatorComponent={this._renderSeparator}
          data={this.state.imageResults}
          renderItem={this._renderItem}
          contentContainerStyle={{display: 'flex', justifyContent: 'space-between', marginHorizontal:'1.667%', marginVertical: '4%', alignContent:'space-between'}}
        />
        <ModalView
            modalVisible={ this.state.modalVisible }
            setModalVisible={ (vis) => { this._setModalVisible(false) }}
            image = {this.state.selectedImage}
            style={{display:'flex',height:800, width:800, alignItems: 'center', justifyContent: 'center'}}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images || [];
};

export default connect(mapStateToProps)(ImageList)

