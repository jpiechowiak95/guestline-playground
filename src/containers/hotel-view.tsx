import { Flex, Grid, GridItem, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

import { Hotel, HotelsAPI } from '../api';
import { FullScreenCarousel, ImageThumbnail, RoomDetails, StarRating } from '../components';
import { HotelFilters } from '../hooks';
import { filterRooms } from '../utils';

type HotelViewProps = {
  hotel: Hotel;
  roomsFilters: Omit<HotelFilters, 'starRating'>;
}

export const HotelView: React.FC<HotelViewProps> = ({
  hotel,
  roomsFilters: { adults, children }
}) => {
  const { data = { rooms: [] }, isLoading: isLoadingRooms } = useQuery(['rooms', hotel.id], () => HotelsAPI.getRoomDetails(hotel.id));

  const carouselModal = useDisclosure();
  const images = hotel.images.map(image => image.url);

  const filteredRooms = filterRooms(data.rooms, { adults, children });

  const isFiltered = adults > 0 || children > 0;

  return isFiltered && filteredRooms.length === 0 ? null : (
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
            <StarRating starRating={Number(hotel.starRating)} />
          </Flex>
        </GridItem>
      </Grid>
      {isLoadingRooms ? (
        <Flex alignItems='center' justifyContent='center' py='4' w='full'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <Stack>
          {filteredRooms.map(room => (
            <RoomDetails key={room.id} room={room} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};