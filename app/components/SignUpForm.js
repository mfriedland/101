import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { firstNameChanged, lastNameChanged, emailChanged, passwordChanged, signupUser } from '../reducers/CurrentUser'

import { Spinner } from './Spinner'
import { Signup } from '../screens';
// import { Form, Section, createValidator } from 'react-native-forms';

export class SignUpForm extends Component {

    onFirstNameChange(text) {
        this.props.firstNameChanged(text)
    }

    onLastNameChange(text) {
        this.props.lastNameChanged(text)
    }
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { firstName, lastName, email, password } = this.props;
        this.props.signupUser({ firstName, lastName, email, password })
        .then( () => this.props.navigate('profile'))
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" />
        }
        return (
            <TouchableOpacity onPress = {this.onButtonPress.bind(this)} >
            <Text style={styles.buttonText}> I'M READY </Text>
        </TouchableOpacity>
        )
    }


    renderError() {
        if (this.props.error) {
            return (
                <View style = {{ backgroundColor: 'white' } } >
                    <Text style = {styles.errorTextStyle}> { this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style = { styles.container } >
                <View >
                <Image source = {require('../../assets/SignUpPage/logo.png')}
                />
                <Image source = { require('../../assets/SignUpPage/invertedlogo.png') }
                />
                </View>
                <TextInput style = { styles.inputBox }
                        placeholder = "First Name"
                        placeholderTextColor = 'lightgrey'
                        onChangeText = { this.onFirstNameChange.bind(this) }
                // onChangeText={text => this.setState({ firstName : text })}
                />
                <TextInput style = { styles.inputBox }
                    placeholder = "Last Name"
                    placeholderTextColor = 'lightgrey'
                    onChangeText = { this.onLastNameChange.bind(this) }
                // onChangeText={text => this.setState({ lastName : text })}
                />
                <TextInput style = { styles.inputBox }
                    placeholder = "Email Address "
                    placeholderTextColor = 'lightgrey'
                    onChangeText = { this.onEmailChange.bind(this) }
                // onChangeText={text => this.setState({ email : text })}
                />
                <TextInput style = { styles.inputBox }
                    placeholder = "Password"
                    placeholderTextColor = 'lightgrey'
                    onChangeText = { this.onPasswordChange.bind(this) }
                // onChangeText={text => this.setState({ password : text })}
                />

            { this.renderButton() }

            { this.renderError() }

                <Text style={{ color: 'lightgrey' }} > or sign up with </Text>
                <View style={styles.signupButtons}>
                <Image style = {styles.signupButton}
                source = {require('../../assets/SignUpPage/facebook.png') }
                />
                <Image style = {styles.signupButton}
                source = {require('../../assets/SignUpPage/twitter.png') }
                />
                <Image style = { styles.signupButton }
                source = { require('../../assets/SignUpPage/google.png') }
                />
            </View>
        </View>
        );
    }
}

const mapStateToProps = ({ CurrentUser }) => {
    const { email, password, firstName, lastName, error, loading } = CurrentUser;

    return { email, password, firstName, lastName, error, loading }
};

// export {SignUpForm}

export default connect(mapStateToProps, { firstNameChanged, lastNameChanged, emailChanged, passwordChanged, signupUser })(SignUpForm)

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    inputBox: {
        width: 300.3,
        height: 15.3,
        // fontFamily: "WorkSans",
        fontSize: 20.7,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        marginVertical: 20,
        color: "#ffffff"
    },

    buttonText: {
        fontSize: 16,
        color: 'rgb(252,197,76)',
        fontWeight: '700',
        marginVertical: 20,
    },
    signupButtons: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 10,
        justifyContent: 'flex-start',
    },
    signupButton: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    leaveButton: {
        // flex: 1,
        fontSize: 13,
        color: 'rgb(252,197,76)',
        fontWeight: '500',
        marginVertical: 50,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
});


{/* state = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: '',
  loading: false,
} */}

// inputChange(event) {
//   this.setState({ event.target.name: event.target.value });
// }
// onButtonPress() {
//   const { email, password } = this.state
//   this.setState({ error: '',  loading: true })

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then( () => firebase.auth().signInWithEmailAndPassword(email, password))
//     .catch( () => {
//         this.setState({ error: 'Invalid email and login'})
//     })
// }
