import React from 'react';
import { useHistory } from 'react-router-dom';

import HomeNav from '../components/homeNav';

const HomePage = () => {
  const history = useHistory();

  const handleSignIn = () => (
    history.push('/signin')
  );

  const handleSignUp = () => (
    history.push('/signup')
  );

  return (
    <div>
      <HomeNav handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
      <main>
        <section>
          <h1>Welcome to ChatRoom</h1>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
