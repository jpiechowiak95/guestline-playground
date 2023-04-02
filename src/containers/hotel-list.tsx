import { Container, Flex, HStack, Spinner, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

import { HotelsAPI } from '../api';
import { HotelView, LabeledCounter, StarRating } from '../components';
import { useHotelFilters } from '../hooks';

export const HotelList: React.FC = () => {
  const { data: hotels = [], isLoading: isLoadingHotels } = useQuery('hotels', HotelsAPI.getAll);
  const { filters, setFilter, filteredHotels } = useHotelFilters(hotels);

  return (
    <Container maxW='2xl' py='8'>
      {isLoadingHotels ? (
        <Flex alignItems='center' h='80vh' justifyContent='center' w='full'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <Stack alignItems='center' spacing='8'>
          <HStack
            borderColor='gray.700'
            borderWidth='1px'
            justifyContent='center'
            p='2'
            spacing='8'
            w={{ base: 'full', md: '75%' }}
          >
            <StarRating
              onStarClick={(stars) => setFilter('starRating', stars)}
              starRating={filters.starRating}
            />
            <LabeledCounter
              label='Adults'
              setValue={(value) => setFilter('adults', value)}
              value={filters.adults}
            />
            <LabeledCounter
              label='Children'
              setValue={(value) => setFilter('children', value)}
              value={filters.children}
            />
          </HStack>
          <Stack spacing='6'>
            {filters.starRating > 0 || filters.children > 0 || filters.adults > 0 ? (
              filteredHotels.map(hotel => (
                <HotelView
                  hotel={hotel}
                  key={hotel.id}
                  roomsFilters={filters}
                />
              ))
            ) : (
              <Text>No rooms available for selected filters.</Text>
            )}
          </Stack>
        </Stack>
      )}
    </Container>
  );
};
