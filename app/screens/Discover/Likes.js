import React, { Component } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { List, ListItem, Avatar } from "react-native-elements";
import styles from '../../stylesheets'
import { musicians } from '../../../assets/SeedImages'

class Likes extends Component {
  state = {

  };

  render() {
    return (
      <View >
        <List>
          <FlatList
            data={musicians}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => <View>
              <Image style={{height: 150}} source={{uri: item.image }} />
              </View>}
          />
        </List>
      </View>
    );
  }
}



// let DATA = [
//   { id: 1, text: 'Card #1', uri: 'https://pbs.twimg.com/media/DKUftJ3XcAEEAYg.jpg' },
//   { id: 2, text: 'Card #2', uri: 'http://campbellriver.whatsondigest.com/sites/default/files/styles/galleryformatter_slide/public/event_photographs/Taylor-Swift.jpg?itok=fxVIj1O5' },
//   { id: 3, text: 'Card #3', uri: 'https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/justinbieber-hero-498329920.jpg?itok=03MYx1T4' },
//   { id: 4, text: 'Card #4', uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY317_CR12,0,214,317_AL_.jpg' },
//   { id: 5, text: 'Card #5', uri: 'https://img.discogs.com/RMXyQsOaqhmlA6zyUolMYn_PnLk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-151199-1511818392-3093.jpeg.jpg' },
//   { id: 6, text: 'Card #6', uri: 'https://cbsmix965houston.files.wordpress.com/2017/06/twentyonepilots-promo5-jabarijacobs4.jpg?w=640&h=360&crop=1' },
//   { id: 7, text: 'Card #7', uri: 'https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/thechainsmokers-hero-515589828.jpg?itok=9N6Nl5b5' },
//   { id: 8, text: 'Card #8', uri: 'http://mmusicmag.com/m/wp-content/uploads/2015/07/No39-imagine-dragons-1.jpg' },
// ]

export default Likes
export { Likes }

