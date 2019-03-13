import React from 'react';

import { AuthUserContext } from '../Session/Session';

import HeaderAuth from './HeaderAuth';
import HeaderNoAuth from './HeaderNoAuth';
import './Header.scss';

function Header() {
  return (
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <HeaderAuth /> : <HeaderNoAuth />)}
    </AuthUserContext.Consumer>
  );
}

export default Header;
