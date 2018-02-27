import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';



export default function ListItem() {
  return (
    <TouchableWithoutFeedback
      // onPress={() => onPressItem && onPressItem(this.props.image)}
      >
      <Image style={{ width: 20, height: 200 }} source={image}></Image>
      </TouchableWithoutFeedback>
  )
}
