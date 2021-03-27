import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css';

const AuthNav = () => {
  return (
    <div className={styles.wraper}>
      <NavLink
        exact
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Логін
      </NavLink>
    </div>
  );
};

export default AuthNav;
