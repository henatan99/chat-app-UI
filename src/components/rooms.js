import React from 'react';
import PropTypes from 'prop-types';

const Rooms = (rooms, handleRoomClick, handleToggle, handleAddClick, toggleSign, roomsClass) => (
  <div>
    <div>
      <button onClick={handleToggle}>{toggleSign}</button>
      <span>My Rooms</span>
      <button onClick={handleAddClick}>+</button>
    </div>
    <ul className={roomsClass}>
      { rooms.map((room) => (
        <li>
          {' '}
          <button type="button" onClick={handleRoomClick}>{room.name}</button>
          {' '}
        </li>
      )) }
      ;
    </ul>
  </div>
);

Rooms.defaultProps = {
  rooms: [],
  handleRoomClick: null,
  handleToggle: null,
  handleAddClick: null,
  toggleSign: '',
  roomsClass: '',
};

Rooms.propTypes = {
  rooms: PropTypes.instanceOf(Array),
  handleRoomClick: PropTypes.func,
  handleToggle: PropTypes.func,
  handleAddClick: PropTypes.func,
  toggleSign: PropTypes.string,
  roomsClass: PropTypes.string,
};

export default Rooms;
