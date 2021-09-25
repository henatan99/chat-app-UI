import React from 'react';
import PropTypes from 'prop-types';

const MessageForm = ({value, handleChange}) => (
    <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} placeholder="Send a message" />
    </form>
)

MessageForm.defaultProps = {
    value: '',
    handleChange: null,
    handleSubmit: null,
}

MessageForm.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default MessageForm;