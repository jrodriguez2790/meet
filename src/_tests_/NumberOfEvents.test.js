// src/_tests_/NumberOfEvents.test.js //

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let setEventCountMock;
  let NumberOfEventsComponent;

  beforeEach(() => {
    setEventCountMock = jest.fn(); // Mock the setEventCount function
    NumberOfEventsComponent = render(<NumberOfEvents setEventCount={setEventCountMock} />);
  });

  test('renders textbox with default value 32', () => {
    const textbox = NumberOfEventsComponent.getByRole('spinbutton');
    expect(textbox).toHaveValue(32); // Verify the default value is 32
  });

  test('updates number of events based on user input', async () => {
    const user = userEvent.setup();
    const textbox = NumberOfEventsComponent.getByRole('spinbutton');
    await user.type(textbox, '{backspace}{backspace}10'); // Simulate typing "10"
    expect(textbox).toHaveValue(10); // Verify the input value updates
    expect(setEventCountMock).toHaveBeenCalledWith(10); // Verify the mock function is called with the correct value
  });

  test('renders NumberOfEvents component', () => {
    const numberOfEventsDiv = NumberOfEventsComponent.container.querySelector('#number-of-events');
    expect(numberOfEventsDiv).toBeInTheDocument(); // Verify the component is rendered
  });
});

export default NumberOfEvents;