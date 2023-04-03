import { render, screen } from '@testing-library/react';
import React from 'react';

import { ImageThumbnail } from '../components';

describe('ImageThumbnail', () => {
  it('renders an image', () => {
    render(<ImageThumbnail image="https://example.com/image.jpg" />);

    const imageElement = screen.getByAltText('carousel image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual('https://example.com/image.jpg');
  });
});