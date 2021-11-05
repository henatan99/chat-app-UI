import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeNav from '../components/homeNav';
import SignForm from '../components/signForm';
import { signedUp, loggedIn } from '../helpers/authUsers';

const SignPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState('');

  const { sign } = useParams();
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const clearMsgSetErrors = (err) => {
    setMsg('');
    setErrors(err);
  };

  const handleResponse = (response) => {
    if (response.success) {
      console.log('jahskahska', response);
      setErrors([]);
      setMsg('You are now logging in...');
      localStorage.setItem('token', response.token);

      // here: status should be changed to login, setCurrentUser
      // send users to the proper page
    } else if (response.errors.length > 0) {
      clearMsgSetErrors(response.errors);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (sign === 'signup') {
        response = await signedUp(username, password);
      } else {
        response = await loggedIn(username, password);
      }
      handleResponse(response);
    } catch (err) {
      clearMsgSetErrors(err);
    }
  };

  return (
    <div>
      <HomeNav />
      <h2>{sign === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      {errors
        && errors.map((error) => (
          <p key={error} className="message-error">
            {error}
          </p>
        ))}
      {msg && <p className="message-info">{msg}</p>}
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
