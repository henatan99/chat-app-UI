import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => (
    <header>
        <nav>
            <div>
                <img src="" alt="logo"/>
                <span>ChatRoom</span>
            </div>
            <div>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/signin">
                    <span>SignIn</span>
                </Link>
                <Link to="signup">
                    <span>SignUp</span>
                </Link>
            </div>
        </nav>
    </header>
)

export default HomeNav;