import React, { useState } from 'react';
import MessageForm from '../components/messageForm';
import MessageCard from '../components/messageCard';

const MessageSection = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.taget.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <MessageCard avatar={avatar} name="Henok" message="My message" timeStamp="06:02" />
      <MessageForm value={message} handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
};

export default MessageSection;
