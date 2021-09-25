import React from 'react';
import MessageSection from './messageSection';
import SideNav from './sideNav';

const MessagePage = () => {
    return (
        <div>
            <SideNav rooms={rooms} handleRoomClick={handleRoomClick} handleAddClick={handleAddClick} />
            <MessageSection />
        </div>
    )
}

export default MessagePage;