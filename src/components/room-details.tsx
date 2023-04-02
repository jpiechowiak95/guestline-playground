import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { Room } from '../api';

type RoomDetailsProps = {
  room: Room;
}

export const RoomDetails: React.FC<RoomDetailsProps> = ({ room }) => {
  return (
    <Box borderColor='gray.700' borderTopWidth='1px' p='4'>
      <Grid gap='4' templateColumns="minmax(150px, 25%) 1fr">
        <GridItem>
          <Stack spacing='1'>
            <Text fontSize='sm' fontWeight='600'>
              {room.name}
            </Text>
            <Text fontSize='xs'>
              Adults: {room.occupancy.maxAdults}
            </Text>
            <Text fontSize='xs'>
              Children: {room.occupancy.maxChildren}
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Text fontSize='xs'>
            {room.longDescription}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};