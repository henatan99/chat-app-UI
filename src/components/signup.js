import React from 'react';

const SignForm = (sign) => {
    <form>
        <input value={username} onChange={handleUsernameChange} placeholder="Username or email"/>
        <input value={password} onChange={handlePasswordChange} placeholder="Password"/>
        <button type="button" onClick={sign === 'signup' ? handleSignupClick : handlSigninClick}>Submit</button>
    </form>
}