// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      {/* Event Title */}
      <h3 className="event-summary">{event.summary}</h3>

      {/* Event Location */}
      <p className="event-location">{event.location}</p>

      {/* Event Start Time */}
      <p className="event-start-time">{new Date(event.start.dateTime).toLocaleString()}</p>

      {/* Show/Hide Details Button */}
      <button
        className="event-details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Event Details */}
      {showDetails && <p className="event-description">{event.description}</p>}
    </li>
  );
};

export default Event;