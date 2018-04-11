import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput,
        TouchableOpacity, AsyncStorage  ,
        Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { fetchImages } from '../reducers'
import { Spinner } from './Spinner';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      password: '',
      error: '',
      loading: false,
      prop: props,
    }
  }


  onSearchChange(text) {
    this.setState({search: text})
  }

  onButtonPress() {
    // let nav = this.state.prop.onSubmit;
    //   const { email, password } = this.props;
      this.props.fetchImages(this.state.search);
  }

  renderError() {
      if (this.props.error) {
        return (
          <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
          {/* {this.props.error} */}
          </Text>
          </View>
        )
      }
    }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.loginButton} > Search </Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View >
            <TextInput
            style={styles.inputBox}
            placeholder="Search Images"
            value={this.props.search}
            placeholderTextColor='lightgrey'
            // keyboardType="email-address"
            autoCorrect={false}
            onChangeText={this.onSearchChange.bind(this)}
            />
          {this.renderButton()}
          {this.renderError()}
      </View>
    );


  }
}

// const mapStateToProps = ({ CurrentUser } ) => {
//   const { email, password, error, loading } = CurrentUser;

//   return { email, password, error, loading }
// };

export default connect(null, {fetchImages})(Search)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,

  },
  inputBox: {
    width: 300,
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

  loginButton: {
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
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});
