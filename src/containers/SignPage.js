import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeNav from '../components/homeNav';
import SignForm from '../components/signForm';

const SignPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
  };
  const { sign } = useParams();
  return (
    <div>
      <HomeNav />
      <h2>{sign === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      <SignForm
        username={username}
        password={password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleClick={handleClick}
      />
    </div>
  );
};

export default SignPage;
