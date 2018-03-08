
import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import store from '../../store.js'
import Deck from './Deck'
import { swipeRightArtist } from '../../reducers/LikeArtist'

let likes = 'hey'

class Likes extends Component {

  constructor() {
    super()

  }
  componentDidMount() {
    if (this.props.likes) likes = this.props.likes[0].text
    console.log('working')
  }

 render() {
  console.log('no')
   return (
      <View style={styles.container}>
        <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}> Musicians </Text>
            <Text style={styles.headingText}> Dancers </Text>
            <Text style={styles.headingText}> {likes} </Text>
        </View>
        <View style={styles.container}>
        <FlatList
          // key={key}
          keyExtractor= {(item, index) => index }
          // numColumns={columns}
          data={this.props.likes}

          renderItem={({item, index}) =>  <Image style={{width: 120, height: 90, marginRight: 10}} source={{ uri: item.uri }} />}

        />
        </View>
      </View>
   )

 }
}


const mapStateToProps = (state) => {
  return { likes : state.Likes }

};

const mapDispatch = dispatch => ({
  like: (artist) => dispatch(swipeRightArtist(artist)),
})

export default connect(mapStateToProps, mapDispatch)(Likes)

export { Likes };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12092f',
    justifyContent: 'center',
    alignItems: 'center',
},
  headingTextContainer: {
    // flex: 1,
    alignItems:'center',
    justifyContent :'space-around',
    height: 20,
    marginRight: 30,
    flexDirection:'row'
  },
  headingText: {
    fontSize: 15,
    color: 'lightgrey',
    // justifyContent :'space-around',
  },
})

