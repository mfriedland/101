import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesheets'
let imageResults = []
let search;

export class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      imageResults: [],
      columns: 3,
    }
  }

    componentDidMount() {
      imageResults = [];
      imageResults = this.props.images
      this.setState({imageResults})
      // search = this.state.search
      // let urlSearch = search.replace(/\s/,'+')
      // console.log(urlSearch)
      // fetch(`https://pixabay.com/api/?key=8649244-1d60bb9a8dd7e4f6ba9f1d298&q=${urlSearch}&image_type=photo`)
      // .then(res => res.json())
      // .then(foundResults => foundResults.hits)
      // .then(images => {
      //   for (let i=0; i<images.length; i++) {
      // imageResults.push({image: images[i].largeImageURL, tags: images[i].tags, user: images[i].user, id: images[i].id })
      // }
      // this.setState({imageResults})
    // })
    }

  _renderItem = ({item}) => (
      // <TouchableHighlight id={item.id} onPress={() => this._setModalVisible(true,item.id)} >
        <Image style={{height: 100, width: '30%', alignContent: 'space-between', justifyContent: 'space-between', marginBottom: 10, marginHorizontal:'1.667%'}} source={{ uri: item.image }} />
      // </TouchableHighlight>
 )

  render() {
    search = this.state.search;
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images || [];
};

export default connect(mapStateToProps)(ImageList)

