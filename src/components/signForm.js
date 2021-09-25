import React from 'react';

const SignForm = (username, password, handleUsernameChange, handlePasswordChange, handleClick) => {
    <form>
        <input value={username} onChange={handleUsernameChange} placeholder="Username or email"/>
        <input value={password} onChange={handlePasswordChange} placeholder="Password"/>
        <button type="button" onClick={handleClick}>Submit</button>
    </form>
}

export default SignForm;