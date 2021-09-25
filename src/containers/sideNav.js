import React from 'react';
import Rooms from '../components/rooms';

const SideNav = () => {
    <section>
        <Rooms rooms={rooms} handleRoomClick={handleRoomClick} handleToggle={handleToggle} handleAddClick={handleAddClick} toggleSign={toggleSign} />
    </section>
}

export default SideNav;