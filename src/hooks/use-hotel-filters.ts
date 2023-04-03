import { useState } from 'react';

import { Hotel } from '../api';

export interface HotelFilters {
  starRating: number;
  adults: number;
  children: number;
}

export const useHotelFilters = (hotels: Hotel[]) => {
  const [filters, setFilters] = useState<HotelFilters>({
    starRating: 0,
    adults: 0,
    children: 0
  });

  const setFilter = (filter: keyof HotelFilters, value: number) => {
    setFilters(prevState => {
      const newFilters = { ...prevState };
      newFilters[filter] = value;
      return newFilters;
    });
  };

  const filteredHotels = hotels.filter(h => !filters.starRating || Number(h.starRating) >= filters.starRating);

  const isFiltered = filters.adults > 0 || filters.children > 0 || filters.starRating > 0;

  return { filters, setFilter, filteredHotels, isFiltered };
};
