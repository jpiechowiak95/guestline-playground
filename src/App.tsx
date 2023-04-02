import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { queryClientConfig } from './constants';
import { HotelList } from './containers/hotel-list';

const queryClient = new QueryClient(queryClientConfig);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <HotelList />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
