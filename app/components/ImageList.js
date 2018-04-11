import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import styles from '../stylesheets'
// import { Link } from 'react-router-dom';
let imageResults = []
let search;
let capitalSearch;

class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      imageResults: [],
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

    // handleChange(event) {
    //   this.setState({
    //       search: event.target.value
    //     })
    // }

    // handleSubmit(event) {
    //   event.preventDefault();
    //   imageResults = [];
    //   this.setState({imageResults: []})
    //   search = this.state.search
    //   let urlSearch = search.replace(/\s/,'+')
    //   fetch(`https://pixabay.com/api/?key=8649244-1d60bb9a8dd7e4f6ba9f1d298&q=yellow+flowers&image_type=photo`)
    //   .then(res => res.json())
    //   .then(foundResults => foundResults.hits)
    //   .then(images => {
    //     for (let i=0; i<images.length; i++) {
    //   imageResults.push({image: results[i].largeImageURL, tags: results[i].tags, user: images[i].user})
    //   }
    //   this.setState({imageResults})
    // })
    // }

    componentDidMount() {
      imageResults = [];
      this.setState({imageResults: []})
      search = this.state.search
      let urlSearch = search.replace(/\s/,'+')
      console.log(urlSearch)
      fetch(`https://pixabay.com/api/?key=8649244-1d60bb9a8dd7e4f6ba9f1d298&q=${urlSearch}&image_type=photo`)
      .then(res => res.json())
      .then(foundResults => foundResults.hits)
      .then(images => {
        for (let i=0; i<images.length; i++) {
      imageResults.push({image: images[i].largeImageURL, tags: images[i].tags, user: images[i].user, id: images[i].id })
      }
      this.setState({imageResults})
    })
    }

render() {
  console.log(imageResults)
  search = this.state.search;
  // if (search) {
  //   capitalSearch = search.split(' ') ?
  //   search.toLowerCase().split(' ').map(name => {
  //     if (name[0] !== undefined) return name[0].toUpperCase()+name.slice(1)
  //     else return ''
  //     }).join(' ')
  //   : search[0].toUpperCase() + search.slice(1)

  // }

  return (
    <View className="page" style={{flex: 1, width: 300, backgroundColor: 'white'}}>
    {/* <View id = "search"> */}
      {/* <form method="POST" id = "searchForm" onSubmit={this.handleSubmit}>
        <input id = "searchInput" onChange={this.handleChange} placeholder="Search Images"/>
        <Button className="search-button"> Submit </Button>
      </form> */}
     {/* </View> */}
       <Text>{capitalSearch} Images</Text>
      <ScrollView className="albums-container" style={{flexGrow: 1, backgroundColor: 'white'}}>
      {
        this.state.imageResults.map(image => (
          <View className="albums" key={ image.id }>
              <Image id="album-image" style={{height: 100, width: 100}} source={{ uri: image.image}} />
              <View className="album-caption">
                <Text>{ image.name }</Text>
              </View>
          </View>
        ))
      }
    </ScrollView>
    </View>
  );
}
}


export default ImageList;
