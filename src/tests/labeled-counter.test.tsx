import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { LabeledCounter } from '../components';

describe('LabeledCounter component', () => {
  test('renders without error', () => {
    render(<LabeledCounter label="Test Label" setValue={() => {}} value={0} />);
  });

  it('should decrement and increment the value when the buttons are clicked', () => {
    const setValueMock = jest.fn();
    const wrapper = render(<LabeledCounter label="Counter" setValue={setValueMock} value={1} />);
    const minusButton = wrapper.getByTestId('decrement-button');
    const plusButton = wrapper.getByTestId('increment-button');

    fireEvent.click(plusButton);
    expect(setValueMock).toHaveBeenCalledWith(2);

    fireEvent.click(minusButton);
    expect(setValueMock).toHaveBeenCalledWith(0);
  });

  it('should not decrement the value below 0', () => {
    const setValueMock = jest.fn();
    const wrapper = render(<LabeledCounter label="Counter" setValue={setValueMock} value={0} />);
    const minusButton = wrapper.getByTestId('decrement-button');

    fireEvent.click(minusButton);
    expect(setValueMock).not.toHaveBeenCalled();
  });
});
