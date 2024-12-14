import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test('renders CitySearch component', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('renders NumberOfEvents component', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });

  test('renders EventList component', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(32); // Default event count
  });

  // New test for updating number of events based on user input
  test('updates number of events based on user input', async () => {
    const { getByRole } = render(<App />);
    const input = getByRole('spinbutton'); // Get the input element by its role
    await userEvent.type(input, '{backspace}{backspace}10'); // Simulate typing "10"
    const eventListItems = await screen.findAllByRole('listitem'); // Get the updated list items
    expect(eventListItems).toHaveLength(10); // Check if the number of list items matches the input value
  });
});

export default App;