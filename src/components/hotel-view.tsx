import { Flex, Grid, GridItem, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { Hotel, Room } from '../api';
import { FullScreenCarousel } from './full-screen-carousel';
import { ImageThumbnail } from './image-thumbnail';
import { RoomDetails } from './room-details';
import { StarRating } from './star-rating';

type HotelViewProps = {
  hotel: Hotel;
  rooms: Room[]
}

export const HotelView: React.FC<HotelViewProps> = ({ hotel, rooms }) => {
  const carouselModal = useDisclosure();
  const images = hotel.images.map(image => image.url);

  return (
    <Stack borderColor='gray.700' borderWidth='1px'>
      <Grid gap={4} templateColumns='minmax(150px, 25%) 1fr'>
        <GridItem p='4'>
          <ImageThumbnail cursor='pointer' image={images[0]} onClick={carouselModal.onOpen} />
          <FullScreenCarousel
            images={images}
            isOpen={carouselModal.isOpen}
            onClose={carouselModal.onClose}
          />
        </GridItem>
        <GridItem>
          <Flex justifyContent='space-between' p='4'>
            <Stack spacing='1'>
              <Text fontSize='xl' fontWeight='600'>{hotel.name}</Text>
              <Text>{hotel.address1}</Text>
              <Text>{hotel.address2}</Text>
            </Stack>
            <StarRating starRating={hotel.starRating} />
          </Flex>
          {rooms.length > 0 ? (
            <Stack>
              {rooms.map(room => (
                <RoomDetails key={room.id} room={room} />
              ))}
            </Stack>
          ) : null}
        </GridItem>
      </Grid>
    </Stack>
  );
};