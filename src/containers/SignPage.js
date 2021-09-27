import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeNav from '../components/homeNav';
import SignForm from '../components/signForm';
import { usersFetch } from '../helpers/api';

const SignPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { sign } = useParams();
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = async (e) => {
    e.preventDefault();
    const request = sign === 'signup' ? '' : 'signin';
    console.log(sign);
    console.log(request);
    console.log(username);
    console.log(password);
    try {
      const data = await usersFetch(request);
      console.log(data);
    } catch (error) {
      setError(JSON.stringify(error));
      console.log(error);
    }
  };

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
      <div>{error && error.message}</div>
    </div>
  );
};

export default SignPage;
