import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


import LoginForm from '../../components/LoginForm';
import store from '../../store.js'
import { fetchUsers } from '../../reducers/AllUsers'


class Login extends Component {

  signup() {
      Actions.signup();
  }

  state = store.getState();

  componentDidMount() {

    store.dispatch(fetchUsers());
    // this.props.fetchUsers;
    // store.getState();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      // case true:
      // return Actions.main()
      case false:
        return <Login Form />
      default:
      return <Spinner size='large' />
    }
  }

  onNextPage = () => {
    this.props.navigation.navigate('profile');
  }

  render() {
    const { container, signupTextContainer, signupText, signupButton } = styles;

    return (
      <View style={container}>
          <LoginForm type="Login" onSubmit={this.onNextPage.bind(this)} />

          <View style={signupTextContainer}>
            <Text style={signupText}> Don't have an account? </Text>
            <TouchableOpacity onPressOut={() => this.props.navigation.navigate('signup')}>
              <Text style={signupButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

export { Login };

// const mapStateToProps = state => {
//   console.log("HEY")
//   console.log(state)
// }

export default connect(null, { fetchUsers })(Login);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#12092f',
  },
  signupTextContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'

  },
  signupText: {
    fontSize: 13,
    color: 'rgb(252,197,76)',
  },
  signupButton: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgb(252,197,76)',
  },
});

