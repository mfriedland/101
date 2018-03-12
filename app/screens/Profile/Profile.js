import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase';

// type Props = {};
class Profile extends Component {
    static navigationOptions = {
            title: 'fame',
            headerStyle: {
              backgroundColor: 'white',
              tintColor:'rgb(252,197,76)',
            },
            headerLeft: <Button title='Share' color='white' />,
            headerTintColor: 'rgb(252,197,76)',
           }


    edit() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        var userInfo = (snapshot.val() && snapshot.val()) || 'Anonymous';
       })
    }

    onButtonPress() {

    }


    render() {
        return (
            <View style = { styles.container } >
                <ImageBackground
                    source={require('../../../assets/ArtistProfile2/ArtistProfile2.png')}
                    // style = {{transform: [{scaleX: .9}, {scaleY: .9}]}}
                    style={{flexGrow: 1,
                            width: 370,
                            height: 700,
                            // flexDirection: 'row',
                            // justifyContent: 'center',
                            alignItems: 'stretch',}}
                    >
                </ImageBackground>
             </View>
        );
    }
}

//    <Button title="edit" onPress={this.onButtonPress.bind(this)}>
//                             <Text style={styles.editButton} > Edit </Text>
//                         </Button>
export { Profile };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12092f',
    },
    signupTextContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    // signupText: {
    //     fontSize: 13,
    //     color: 'rgb(252,197,76)',
    //     fontWeight: '500',

    // },
    editButton: {
        fontSize: 17,
        fontWeight: '500',
        backgroundColor: 'white',
        color: 'black',
    },
});

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity
// } from 'react-native';

// import LoginForm from '../components/LoginForm';

// import {Actions} from 'react-native-router-flux';

// export default class Login extends Component<{}> {

// 	signup() {
// 		Actions.signup()
// 	}

// 	render() {
// 		return(
// 			<View style={styles.container}>

// 				<Login type="Login"/>
// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Don't have an account yet?</Text>
// 					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
// 				</View>
// 			</View>
// 			)
// 	}
// }
// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
//   signupTextCont : {
//   	flexGrow: 1,
//     alignItems:'flex-end',
//     justifyContent :'center',
//     paddingVertical:16,
//     flexDirection:'row'
//   },
//   signupText: {
//   	color:'rgba(255,255,255,0.6)',
//   	fontSize:16
//   },
//   signupButton: {
//   	color:'#ffffff',
//   	fontSize:16,
//   	fontWeight:'500'
//   }
// });
