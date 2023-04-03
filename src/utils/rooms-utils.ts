import { Room } from '../api';
import { HotelFilters } from '../hooks';

export const filterRooms = (rooms: Room[], filters: Omit<HotelFilters, 'starRating'>) => {
  return rooms
    .filter(r => filters.children === 0 || r.occupancy.maxChildren >= filters.children)
    .filter(r => filters.adults === 0 || r.occupancy.maxAdults >= filters.adults);
};
