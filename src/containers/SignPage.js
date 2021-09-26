import React, { useState } from 'react';
import SignForm from '../components/signForm';

const SignPage = (sign) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>{sign === 'signUp' ? 'Sign Up' : 'Sign In'}</h2>
      <SignForm username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleClick={handleClick} />
    </div>
  );
};

export default SignPage;
