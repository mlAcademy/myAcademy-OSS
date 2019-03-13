import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/img/logos/text_black.png';

function HeaderNoAuth() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar"
      aria-label="main navigation"
      style={{
        borderBottom: 'solid 1px #dddddd',
      }}
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/" activeClassName="is-active">
          <img src={logo} alt="home" />
        </NavLink>
        <button
          aria-label="Show Menu"
          className={`burger hamburger hamburger--vortex
            ${isActive && ` is-active`}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
      <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/topics" activeClassName="is-active">
            <span className="icon" style={{ marginRight: 5 }}>
              <i className="fas fa-lg fa-graduation-cap" />
            </span>
            Learn
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink to="/signup" className="button is-primary">
                <strong>Sign Up</strong>
              </NavLink>
              <NavLink to="/login" className="button is-light">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNoAuth;
