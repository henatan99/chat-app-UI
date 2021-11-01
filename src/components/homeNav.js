import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatQuoteFill } from 'react-icons/bs';

const HomeNav = () => (
  <header>
    <nav>
      <div>
        <BsChatQuoteFill />
        <span>ChatRoom</span>
      </div>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/signin">
          <span>SignIn</span>
        </Link>
        <Link to="/signup">
          <span>SignUp</span>
        </Link>
      </div>
    </nav>
  </header>
);

export default HomeNav;
