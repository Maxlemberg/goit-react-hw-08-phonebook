import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth/auth.selectors';
import styles from './User.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className="">
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Головна
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/phonebook"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
