// src/components/EventList.js
import React from 'react';
import Event from "./Event";
import EventList from './EventList';

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events ? events.map(event => <Event key={event.id} event={event} />) : null}
    </ul>
  );
}

export default EventList;