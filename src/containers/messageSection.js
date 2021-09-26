import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MessageForm from '../components/messageForm';
import MessageCard from '../components/messageCard';

const MessageSection = ({ room }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>{room}</h2>
      <MessageCard avatar="my avatar" name="Henok" message="My message" timeStamp="06:02" />
      <MessageForm value={message} handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
};

MessageSection.defaultProps = {
  room: '',
};

MessageSection.propTypes = {
  room: PropTypes.string,
};

export default MessageSection;
