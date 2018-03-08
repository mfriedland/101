import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'
// import { Actions } from 'react-native-router-flux';
import { HomePage, ChooseUserType, Login, Signup, Trending, SharePage, Profile, EditProfile, Discover, Likes, NavBar, MenuBar} from './index'; //NavBar,
import {View, StyleSheet, Image,  } from 'react-native'
import { connect } from 'react-redux';
import { fetchUsers } from '../reducers/AllUsers'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

export class Route extends Component {

  componentDidMount() {
    // this.props.fetchUsers();
  }


  render() {
    const MainNavigator = TabNavigator(
      {
      welcome: { screen: HomePage}, //, navigationOptions: {tabBarVisible: false}},
      choose: { screen: ChooseUserType}, //, navigationOptions: {tabBarVisible: false} },
      signup: { screen: Signup}, //, navigationOptions: {tabBarVisible: false} },
      login: { screen: Login}, //, navigationOptions: {tabBarVisible: false} },
      main: {
        screen: TabNavigator(
        {
          home: { screen: HomePage },
          explore: {
            screen: StackNavigator({
              discover: { screen: Discover, path: 'discover/:name'},
              likes: { screen: Likes, path: 'discover/:likes' }
            })
          },
          trending: { screen: Trending },
          faves: { screen: Likes },
          profile: { screen: Profile },
        },
        {
          navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'home') {
              iconName = require('../../assets/MenuBar/home.png');
            } else if (routeName === 'explore') {
              iconName = require('../../assets/MenuBar/discover.png');
            } else if (routeName === 'trending') {
              iconName = require('../../assets/MenuBar/trending.png');
            } else if (routeName === 'profile') {
              iconName = require('../../assets/MenuBar/profile.png');
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Image source={iconName} size={25} color={tintColor} />;
            },
          }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              tabBarVisible: false,
            },
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            tabBarVisible: false,
            animationEnabled: false,
            swipeEnabled: false,
            lazyLoad: true
        //     labelStyle: { fontSize: 12 }
          },
      )},
    },
    {
      tabBarOptions: {
        tabBarVisible: false
      },
      lazyLoad: true
    });


    return(
        <View style={styles.container}>
          <View style={styles.container}>
            <NavBar headerText={'Albums'} />
          </View>
          <View style={styles.containerLarge}>
            <MainNavigator />
          </View>
        </View>
    )
  }
}
// <View style={styles.container}>
//             <MenuBar />
//           </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12092f',
  },
  containerLarge: {
    flexGrow: 12,
    backgroundColor: '#12092f',
  },
})

export default connect(null, {fetchUsers} )(Route);
