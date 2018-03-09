import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import styles from '../stylesheets'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Card = (props) => {
  return (
    <View style={styles.deckCardStyle}>
      {props.children}
      <Image style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT}} source={props.image} />
         </View>
  );
};


export { Card };
