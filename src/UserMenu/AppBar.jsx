import React from 'react';
import { connect } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../redux/auth/auth.selectors';
import styles from './User.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
