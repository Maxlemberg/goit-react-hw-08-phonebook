import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="">
      <NavLink exact to="/" className="link" activeClassName="active-link">
        Головна
      </NavLink>
      <NavLink to="/phonebook" className="link" activeClassName="active-link">
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;
