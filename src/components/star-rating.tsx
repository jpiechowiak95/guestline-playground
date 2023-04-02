import { HStack, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';

import { StarFilled, StarOutline } from '../assets';

type StarRatingProps = {
  starRating?: number;
  onStarClick?: (starRating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ starRating = 0, onStarClick }) => {
  const [hoveredStars, setHoveredStars] = useState<number>(0);

  const handleStarHover = (hoveredStars: number) => {
    if (onStarClick) {
      setHoveredStars(hoveredStars);
    }
  };

  const handleStarLeave = () => {
    if (onStarClick) {
      setHoveredStars(0);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      let icon;
      if (hoveredStars > 0) {
        icon = i < hoveredStars ? StarFilled : StarOutline;
      } else {
        icon = i < starRating ? StarFilled : StarOutline;
      }

      stars.push(
        <Icon
          as={icon}
          boxSize='5'
          color='black'
          data-testid={`star-icon-${icon === StarFilled ? 'filled' : 'outline'}`}
          key={i}
          role='img'
          {...(onStarClick ? {
            onClick: () => onStarClick(i + 1),
            onMouseEnter: () => handleStarHover(i + 1),
            onMouseLeave: handleStarLeave,
            cursor: 'pointer'
          } : {})}
        />
      );
    }
    return stars;
  };

  return (
    <HStack alignItems='flex-start' spacing='0'>
      {renderStars()}
    </HStack>
  );
};
