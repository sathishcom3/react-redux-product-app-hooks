import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#8b0000' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/products" activeStyle={activeStyle}>
        Products
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {' | '}
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Header;
