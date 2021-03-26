import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AppBar from './UserMenu/AppBar';
import Phonebook from './Components/Phonebook';
import { getCurrentUser } from './redux/auth/auth.operations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/phonebook" component={Phonebook} />
        </Switch>
      </>
    );
  }
}

const mapDispathToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispathToProps)(App);
