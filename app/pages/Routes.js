import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'
// import { Actions } from 'react-native-router-flux';
import { HomePage, ChooseUserType, Login, Signup, Trending, SharePage, Profile, EditProfile } from './index'; //NavBar,
import { connect } from 'react-redux';
import { fetchUsers } from '../reducers/AllUsers'

export class Route extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return(
      <Router>
        <Stack key="root" hideNavBar={true}>

          <Scene key="profile" component={Profile}  />
          <Scene key="home" component={HomePage} initial />
          <Scene key="choose" component={ChooseUserType}  />

          <Scene key="authorization" hideNavBar={true}>
              <Scene key="login" component={Login} title="Login" />
              <Scene key="signup" component={Signup} title="SignUp" />
          </Scene>

          <Scene key="main" >
              <Scene key="profile" component={Profile}
                    rightTitle="Share" onRight={() => Actions.share()} />
              <Scene key="share" component={SharePage}
                      rightTitle="Explore" onRight={() => Actions.trending()}/>
              <Scene key="editprofile" component={EditProfile}
                  rightTitle="edit" onRight={() => Actions.trending()}/>
              <Scene key="trending" component={Trending} />
          </Scene>

        </Stack>
      </Router>
    )
  }
}

export default connect(null, {fetchUsers} )(Route);
// <Scene key="editprofile" component={EditProfile}
          // title="editprofile" />
// by home, it shoud have initial={true}


// import HomePage from './HomePage';
// import Login from './Login';
// import SignUp from './SignUp';
// // import EditProfile from './EditProfile';
// import Trending from './Trending';
// import NavBar from './NavBar';
// import MenuBar from './MenuBar';
// import SharePage from './SharePage';
// import Profile from './Profile';
