import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import { Card } from '../../components/Card'
import Deck from './Deck';
const SCREEN_WIDTH = Dimensions.get('window').width;

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://pbs.twimg.com/media/DKUftJ3XcAEEAYg.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://campbellriver.whatsondigest.com/sites/default/files/styles/galleryformatter_slide/public/event_photographs/Taylor-Swift.jpg?itok=fxVIj1O5' },
  { id: 3, text: 'Card #3', uri: 'https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/justinbieber-hero-498329920.jpg?itok=03MYx1T4' },
  { id: 4, text: 'Card #4', uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY317_CR12,0,214,317_AL_.jpg' },
  { id: 5, text: 'Card #5', uri: 'https://img.discogs.com/RMXyQsOaqhmlA6zyUolMYn_PnLk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-151199-1511818392-3093.jpeg.jpg' },
  { id: 6, text: 'Card #6', uri: 'https://cbsmix965houston.files.wordpress.com/2017/06/twentyonepilots-promo5-jabarijacobs4.jpg?w=640&h=360&crop=1' },
  { id: 7, text: 'Card #7', uri: 'https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/thechainsmokers-hero-515589828.jpg?itok=9N6Nl5b5' },
  { id: 8, text: 'Card #8', uri: 'http://mmusicmag.com/m/wp-content/uploads/2015/07/No39-imagine-dragons-1.jpg' },
];
// style={styles.cardStyle}

class Discover extends React.Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
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
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          style={styles.deckStyle}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export { Discover };

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    // height: 400,
    width: SCREEN_WIDTH,
    flex: 1,
  },
  deckStyle: {
    flex:1,
    // height: '400',

    backgroundColor: 'white'
  },
});

// Expo.registerRootComponent(App);


  //       <Button
  //         icon={{ name: 'code' }}
  //         backgroundColor="#03A9F4"
  //         title="View Now!"
  //       />
