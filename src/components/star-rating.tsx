import { HStack, Icon } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { StarRating as StarRatingType } from '../api';
import { StarFilled, StarOutline } from '../assets';

type StarRatingProps = {
  starRating: StarRatingType;
}

export const StarRating: React.FC<StarRatingProps> = ({ starRating }) => {
  const maxStars = 5;

  const filledStars = useMemo(() => {
    switch (starRating) {
    case StarRatingType.ONE:
      return 1;
    case StarRatingType.TWO:
      return 2;
    case StarRatingType.THREE:
      return 3;
    case StarRatingType.FOUR:
      return 4;
    case StarRatingType.FIVE:
      return 5;
    }
  }, [starRating]);

  const renderStars = (numberOfStars: number, filled = true) => {
    const icon = filled ? StarFilled : StarOutline;
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<Icon as={icon} boxSize='5' color='black' key={i} />);
    }
    return stars;
  };

  return (
    <HStack alignItems='flex-start' spacing='1'>
      {renderStars(filledStars)}
      {renderStars(maxStars - filledStars, false)}
    </HStack>
  );
};
