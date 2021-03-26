import React from 'react';
import { connect } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../redux/auth/auth.selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    aliginItems: 'center',
    borderBottom: '1px solid black',
  },
};

const AppBar = ({ isAuthenticated }) => {
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
