import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeNav = ({handleSignIn, handleSignUp}) => (
  <header>
    <nav>
      <div>
        <img src="" alt="logo" />
        <span>ChatRoom</span>
      </div>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/sign" onClick={handleSignIn}>
          <span>SignIn</span>
        </Link>
        <Link to="/sign" onClick={handleSignUp}>
          <span>SignUp</span>
        </Link>
      </div>
    </nav>
  </header>
);

HomeNav.defaultProps = {
  handleSignUp: null,
  handleSignUp: null
}

HomeNav.propTypes = {
  handleSignIn: PropTypes.func,
  handleSignUp: PropTypes.func
}

export default HomeNav;
