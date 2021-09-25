import React, { useState } from 'react';
import MessageForm from '../components/messageForm';

const MessageSection = () => {
    const [message, setMessage] = useState('');

    const handleChange = e => setMessage(e.taget.value);
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section>
            <MessageForm value={message} handleChange={handleChange} handleSubmit={handleSubmit} />
        </section>
    )
}

export default MessageSection;