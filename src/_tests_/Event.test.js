// src/_tests_/Event.test.js //

import React from 'react';
import { render, screen } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  const mockEvent = mockData[0];

  test('renders event title, location, and start time', () => {
    render(<Event event={mockEvent} />);
    expect(screen.queryByText(mockEvent.summary)).toBeInTheDocument();
    expect(screen.queryByText(mockEvent.location)).toBeInTheDocument();
    expect(screen.queryByText(new Date(mockEvent.start.dateTime).toLocaleString())).toBeInTheDocument();
  });

  test('toggles event details visibility when show/hide button is clicked', async () => {
    render(<Event event={mockEvent} />);
    const showDetailsButton = screen.getByText(/show details/i);
    await userEvent.click(showDetailsButton);
    expect(screen.queryByText(mockEvent.description)).toBeInTheDocument();

    const hideDetailsButton = screen.getByText(/hide details/i);
    await userEvent.click(hideDetailsButton);
    expect(screen.queryByText(mockEvent.description)).not.toBeInTheDocument();
  });
});

export default Event;