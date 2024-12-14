// src/components/CitySearch.js
import React from 'react';
import { useState } from "react";
import CitySearch from './CitySearch';

const CitySearch = ({ allLocations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filteredLocations = allLocations
      ? allLocations.filter((location) =>
        location.toUpperCase().includes(value.toUpperCase())
      )
      : [];
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (location) => {
    setQuery(location);
    setShowSuggestions(false);
  };

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleItemClicked(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
          <li
            key="See all cities"
            onClick={() => handleItemClicked("See all cities")}
          >
            <b>See all cities</b>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CitySearch;