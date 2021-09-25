import React from 'react';
import PropTypes from 'prop-types';

const MessageCard = ({
  avatar, name, message, timeStamp,
}) => (
  <div>
    <div>
      <img src={avatar} alt={name} />
    </div>
    <div>
      <div>
        <span>{name}</span>
        <span>{timeStamp}</span>
      </div>
      <p>{message}</p>
    </div>
  </div>
);

MessageCard.defaultProps = {
  avatar: '',
  name: '',
  message: '',
  timeStamp: '',
};

MessageCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  timeStamp: PropTypes.string,
};

export default MessageCard;
