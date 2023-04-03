import { fireEvent, getAllByTestId, render } from '@testing-library/react';
import React from 'react';

import { StarRating } from '../components';

describe('StarRating component', () => {
  it('should render five stars by default', () => {
    const { getAllByRole } = render(<StarRating />);
    const stars = getAllByRole('img');
    expect(stars.length).toBe(5);
  });

  it('should render the correct number of filled stars', () => {
    const { getAllByTestId } = render(<StarRating starRating={3} />);
    const stars = getAllByTestId('star-icon-filled');
    expect(stars.length).toEqual(3);
  });

  it('should call onStarClick with the correct number when a star is clicked', () => {
    const handleClick = jest.fn();
    const { getAllByRole } = render(<StarRating onStarClick={handleClick} />);
    const stars = getAllByRole('img');
    fireEvent.click(stars[3]);
    expect(handleClick).toHaveBeenCalledWith(4);
  });
});
