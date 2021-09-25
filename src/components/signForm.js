import React from 'react';
import PropTypes from 'prop-types';

const SignForm = (username, password, handleUsernameChange, handlePasswordChange, handleClick) => {
    <form>
        <input value={username} onChange={handleUsernameChange} placeholder="Username or email"/>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
        <button type="button" onClick={handleClick}>Submit</button>
    </form>
}

SignForm.defaultProps = {
    username: '',
    password: '',
    handleUsernameChange: null,
    handlePasswordChange: null,
    handleClick: null,
}

SignForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleClick: PropTypes.func
}

export default SignForm;