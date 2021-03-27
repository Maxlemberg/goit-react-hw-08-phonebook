import React from 'react';
import { connect } from 'react-redux';
import { getEmail } from '../redux/auth/auth.selectors';
import { logOut } from '../redux/auth/auth.operations';
import styles from './User.module.css';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div className={styles.wraper}>
      <img
        className={styles.img}
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt=""
      />
      <span className={styles.text}>Email: {email}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Вийти
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: getEmail(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
