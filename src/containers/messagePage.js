import React, { useState } from 'react';
import MessageSection from './messageSection';
import SideNav from './sideNav';

const MessagePage = () => {
  const [room, setRoom] = useState();

  const handleRoomClick = (e) => setRoom(room);

  return (
    <div>
      <SideNav rooms={rooms} handleRoomClick={handleRoomClick} handleAddClick={handleAddClick} />
      <MessageSection room={room} />
    </div>
  );
};

export default MessagePage;
