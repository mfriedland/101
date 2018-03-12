// import React, {Component} from 'react';
// import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
// import { createStore, combineReducers } from 'redux';
// import { connect } from 'react-redux';
// import { HomePage, ChooseUserType, Login, Signup, Trending, SharePage, Profile, EditProfile, Discover, Likes, NavBar, MenuBar} from './screens/index';

// export const AppNavigator = TabNavigator(
//   {
//   welcome: { screen: HomePage}, //, navigationOptions: {tabBarVisible: false}},
//   choose: { screen: ChooseUserType}, //, navigationOptions: {tabBarVisible: false} },
// //   signup: { screen: Signup}, //, navigationOptions: {tabBarVisible: false} },
// //   login: { screen: Login}, //, navigationOptions: {tabBarVisible: false} },
// //   main: {
// //     screen: TabNavigator(
// //     {
// //       profile: {
// //         screen: StackNavigator({
// //           profilePage: { screen: Profile, path: 'profile/:name',
// //           navigationOptions: ({ navigation }) => ({
// //             title: 'Profile',
// //             headerRight: <Button title='Edit' onPress={() => navigation.navigate('editProfile')} />
// //            }),
// //           },
// //           editProfile: { screen: EditProfile, path: 'profile/:name/edit' }
// //         })
// //       },
// //       explore: {
// //         screen: StackNavigator({
// //           discover: { screen: Discover, path: 'discover/:name'},
// //           likes: { screen: Likes, path: 'discover/:likes' }
// //         })
// //       },
// //       trending: { screen: Trending },
// //       faves: { screen: Likes },
// //       share: { screen: SharePage },

// //     },
// //     {
// //       navigationOptions: ({ navigation }) => ({
// //       tabBarIcon: ({ focused, tintColor }) => {
// //         const { routeName } = navigation.state;
// //         let iconName;
// //         if (routeName === 'home') {
// //           iconName = require('../assets/MenuBar/home.png');
// //         } else if (routeName === 'explore') {
// //           iconName = require('../assets/MenuBar/discover.png');
// //         } else if (routeName === 'trending') {
// //           iconName = require('../assets/MenuBar/trending.png');
// //         } else if (routeName === 'profile') {
// //           iconName = require('../assets/MenuBar/profile.png');
// //         }

// //         // You can return any component that you like here! We usually use an
// //         // icon component from react-native-vector-icons
// //         return <Image source={iconName} size={25} color={tintColor} />;
// //         },
// //       }),
// //         tabBarOptions: {
// //           activeTintColor: 'tomato',
// //           inactiveTintColor: 'gray',
// //           tabBarVisible: false,
// //         },
// //         tabBarComponent: TabBarBottom,
// //         tabBarPosition: 'bottom',
// //         tabBarVisible: false,
// //         animationEnabled: false,
// //         swipeEnabled: false,
// //         lazyLoad: true
// //     //     labelStyle: { fontSize: 12 }
// //       },
// //   )},
// // },
// // {
// //   tabBarOptions: {
// //     tabBarVisible: false
// //   },
// //   lazyLoad: true
// });

// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <AppNavigator
//     navigation={addNavigationHelpers({ dispatch, state: nav })}
//   />
// );

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
