import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders with default value 32', () => {
    const { getByRole } = render(<NumberOfEvents setEventCount={() => { }} />);
    const input = getByRole('spinbutton');
    expect(input).toHaveValue(32);
  });

  test('updates value when user types', async () => {
    const setEventCountMock = jest.fn();
    const { getByRole } = render(<NumberOfEvents setEventCount={setEventCountMock} />);
    const input = getByRole('spinbutton');
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue(10);
    expect(setEventCountMock).toHaveBeenCalledWith(10);
  });
});

export default NumberOfEvents;