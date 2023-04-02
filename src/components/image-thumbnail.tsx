import { Box, Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

type ImageThumbnailProps = {
  image: string;
} & ImageProps;

export const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ image, ...props }) => {
  return (
    <>
      <Box bg='black' border='1px solid black' h='90px' justifyContent='center'>
        <Image
          alt='carousel image'
          objectFit='cover'
          src={image}
          {...props}
        />
      </Box>
    </>
  );
};