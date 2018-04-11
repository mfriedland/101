import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { fetchImages, deleteImages } from '../reducers'
import { Spinner } from './Spinner';
import styles from '../stylesheets'

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  onSearchChange(text) {
    this.setState({search: text})
  }

  onButtonPress() {
      this.props.fetchImages(this.state.search);
      this.props.deleteImages();
      this.setState({search: ''})
  }

  renderButton() {
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.searchButton} > Search </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.searchContainer}>
            <TextInput
            style={styles.inputBox}
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

export default connect(mapStateToProps, {fetchImages, deleteImages})(Search)
