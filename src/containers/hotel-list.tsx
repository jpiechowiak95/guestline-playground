import { Container, Flex, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import { useQueries, useQuery } from 'react-query';

import { HotelsAPI } from '../api';
import { HotelView } from '../components/hotel-view';

export const HotelList: React.FC = () => {
  const { data: hotels = [], isLoading: isLoadingHotels } = useQuery('hotels', HotelsAPI.getAll);

  const rooms = useQueries(
    hotels.map(hotel => ({
      queryKey: ['rooms', hotel.id],
      queryFn: () => HotelsAPI.getRoomDetails(hotel.id),
      enabled: !!hotel
    }))
  );

  return (
    <Container maxW='2xl' py='8'>
      {isLoadingHotels ? (
        <Flex alignItems='center' h='80vh' justifyContent='center' w='full'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <Stack spacing='6'>
          {hotels.map((hotel, hotelIndex) => (
            <HotelView
              hotel={hotel}
              key={hotel.id}
              rooms={rooms[hotelIndex].data?.rooms ?? []}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};
