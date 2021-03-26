import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        exact
        to="/register"
        className="link"
        activeClassName="active-link"
      >
        Реєстрація
      </NavLink>
      <NavLink to="/login" className="link" activeClassName="active-link">
        Логін
      </NavLink>
    </div>
  );
};

export default AuthNav;
