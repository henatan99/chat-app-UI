import React from 'react';
import PropTypes from 'prop-types';

const MessageCard = ({name, message, timeStamp}) => (
    <div>
        <div>
            <span>{name}</span>
            <span>{timeStamp}</span>
        </div>
        <div>
            <p>{message}</p>
        </div>
    </div>
)

MessageCard.defaultProps = {
    name: '',
    message: '',
    timeStamp: ''
}

MessageCard.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    timeStamp: PropTypes.string
}

export default MessageCard;
