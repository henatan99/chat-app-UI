import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeNav from '../components/homeNav';
import SignForm from '../components/signForm';
import { signedUp, loggedIn } from '../helpers/authUsers';

const SignPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { slug } = useParams();
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (slug === 'signup') {
        const data = await signedUp(username, password);
        // eslint-disable-next-line
        console.log(data);
      } else {
        const data = await loggedIn(username, password);
        // eslint-disable-next-line
        console.log(data);
      }
    } catch (error) {
      setError(JSON.stringify(error));
      // eslint-disable-next-line
      console.log(error);
    }
  };

  return (
    <div>
      <HomeNav />
      <h2>{slug === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
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
