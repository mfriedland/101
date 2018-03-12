import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import { Card } from '../../components/Card'
import Deck from './Deck';
import styles from '../../stylesheets'
import { musicians } from '../../../assets/SeedImages'
import store from '../../store'
import { fetchLikes, clearLikes } from '../../reducers/LikeArtist'
const SCREEN_WIDTH = Dimensions.get('window').width;

let liked,  cardsToRender;

class Discover extends React.Component {
  constructor() {
    super()
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  renderCard(item) {
    return (
      <Card
        key={item.id}
        image={{ uri: item.image }}
      >
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }



  render() {
    liked = this.state.Likes;
    cardsToRender =  musicians.filter(artist => {
        for (let i=0; i<liked.length; i++) {
          if (artist.id < liked[i].id) return false
        }
        return true
      })


    return (
      <View style={styles.deckContainer}>
        <Deck
          data={cardsToRender}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export { Discover };
  //       <Button
  //         icon={{ name: 'code' }}
  //         backgroundColor="#03A9F4"
  //         title="View Now!"
  //       />
