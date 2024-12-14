// src/App.js

import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [eventCount, setEventCount] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents.slice(0, eventCount));
      setAllLocations(extractLocations(allEvents));
    };
    fetchEvents();
  }, [eventCount]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents setEventCount={setEventCount} />
      <EventList events={events} />
    </div>
  );
};

export default App;