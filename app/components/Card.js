import React from 'react';
import { View, Dimensions, Image } from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
      <Image style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT}} source={props.image} />
         </View>
  );
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: .8*SCREEN_WIDTH,
    height: .8*SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
};

export { Card };
