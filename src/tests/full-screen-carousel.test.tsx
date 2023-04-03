import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { FullScreenCarousel } from '../components';

const images = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg'];

describe('FullScreenCarousel', () => {
  it('should render the first image when it is opened', () => {
    render(<FullScreenCarousel images={images} isOpen={true} onClose={() => {}} />);
    const firstImage = screen.getByAltText('current carousel image');
    expect(firstImage.getAttribute('src')).toBe(images[0]);
  });

  it('should render the correct image when the next button is clicked', () => {
    render(<FullScreenCarousel images={images} isOpen={true} onClose={() => {}} />);
    const nextButton = screen.getByLabelText('Next Image');
    const secondImage = screen.getByAltText('current carousel image');

    fireEvent.click(nextButton);
    expect(secondImage.getAttribute('src')).toBe(images[1]);
  });

  it('should render the correct image when the previous button is clicked', () => {
    render(<FullScreenCarousel images={images} isOpen={true} onClose={() => {}} />);
    const previousButton = screen.getByLabelText('Previous Image');
    const lastImage = screen.getByAltText('current carousel image');

    fireEvent.click(previousButton);
    expect(lastImage.getAttribute('src')).toBe(images[2]);
  });

  it('should loop around to the first image when the next button is clicked on the last image', () => {
    render(<FullScreenCarousel images={images} isOpen={true} onClose={() => {}} />);
    const nextButton = screen.getByLabelText('Next Image');
    const firstImage = screen.getByAltText('current carousel image');

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(firstImage.getAttribute('src')).toBe(images[0]);
  });
});
