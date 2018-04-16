import React, {Component} from 'react';
import { HomePage, Detail} from './index';
import {View, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


const Navigator =
    StackNavigator({
      home: { screen: HomePage },
      detail: { screen: Detail, navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: 'lightgrey',
          tintColor:'white',
          }
        }),
      },
    })



export default Navigator;
