import React from 'react';
import { connect } from 'react-redux';
import { getEmail } from '../redux/auth/auth.selectors';
import { logOut } from '../redux/auth/auth.operations';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt=""
        width="32"
      />
      <span>Email: {email}</span>
      <button type="button" onClick={onLogout}>
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
