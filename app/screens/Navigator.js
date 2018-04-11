import React, {Component} from 'react';
import { HomePage, Detail} from './index';
import {View, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';



const deleteLikes = () =>  store.dispatch(clearLikes());

const Navigator =
    StackNavigator({
      home: { screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#12092f',
          tintColor:'rgb(252,197,76)',
        },

      }),
      },
      detail: { screen: Detail, navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#12092f',
          tintColor:'white',
        }
      }),
    },
    })



export default Navigator;
