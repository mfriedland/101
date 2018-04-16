import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from '../stylesheets'
import ImageList from '../components/ImageList'
import Search from '../components/Search'
import { fetchAllImages } from '../reducers'

export class HomePage extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();
    this.state = {
      dimensions: Dimensions.get("window")
    }
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }

  componentWillReceiveProps() {
    imageResults = this.props.images
    this.setState({imageResults})
  }

  handler = dims => {
      let height = dims.window.height
      let width = dims.window.width
      this.setState({dimensions: {height, width}});
  }

  portraitView = (mode) => {
    return(
      <View style={styles.container}>
        <View style={styles.searchPortraitView}>
          <Search />
        </View>
        <View style={styles.imagesListPortraitView}>
          <ImageList mode={mode}/>
        </View>
      </View>
    )
  }

  landscapeView(mode) {
    return(
      <View style={styles.container}>
        <View style={styles.searchLandscapeView}>
          <Search />
        </View>
        <View style={styles.imagesListLandscapeView}>
          <ImageList mode={mode}/>
        </View>
      </View>
    )
  }

  render() {
    const {width, height} = this.state.dimensions;
    const mode = height > width ? "portrait" : "landscape";
    let view = mode === 'portrait' ? this.portraitView(mode) : this.landscapeView(mode)
    return (
      <View style={styles.container}>
        { view }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images;
};

export default connect(mapStateToProps, {fetchAllImages})(HomePage)
