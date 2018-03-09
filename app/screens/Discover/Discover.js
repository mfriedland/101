import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import { Card } from '../../components/Card'
import Deck from './Deck';
import styles from '../../stylesheets'
import { musicians } from '../../../assets/SeedImages'
const SCREEN_WIDTH = Dimensions.get('window').width;

class Discover extends React.Component {

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
    return (
      <View style={styles.deckContainer}>
        <Deck
          data={musicians}

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
