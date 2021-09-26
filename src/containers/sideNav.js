import React, { useState } from 'react';
import Rooms from '../components/rooms';

const SideNav = (rooms, handleRoomClick, handleAddClick) => {
  const [toggleSign, setToggleSign] = useState('v');

  const handleToggle = (e) => {
    setToggleSign(toggleSign === 'v' ? '^' : 'v');
    const roomsClass = toggleSign === 'v' ? 'hide-rooms' : 'show-rooms';
  };

    <section>
      <Rooms rooms={rooms} handleRoomClick={handleRoomClick} handleToggle={handleToggle} handleAddClick={handleAddClick} toggleSign={toggleSign} roomsClass={roomsClass} />
    </section>;
};

export default SideNav;
