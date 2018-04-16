import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages } from '../reducers'
import styles from '../stylesheets'

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  componentDidMount() {
    imageResults = this.props.images
    this.setState({imageResults})
  }

  onSearchChange(text) {
    this.setState({search: text})
  }

  onButtonPress() {
    this.props.getImages(this.state.search)
    this.setState({found: true})
  }

  renderButton() {
    return (
      <TouchableOpacity style={styles.searchButton} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.searchButtonText}> Search </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.searchContainer}>
          <TextInput
          style={styles.searchInput}
          placeholder="Search Images"
          value={this.props.search}
          placeholderTextColor='white'
          autoCorrect={false}
          onChangeText={this.onSearchChange.bind(this)}
          />
          {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { images } = state.Images;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (search) => dispatch(fetchImages(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
