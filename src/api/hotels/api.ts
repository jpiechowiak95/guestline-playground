import { httpClient } from '../../utils';
import { Hotel, Room } from './models';
import { getHotelsURL, getRoomDetailsURL } from './urls';

export const HotelsAPI = {
  getAll: async (): Promise<Hotel[]> => {
    return await httpClient.get(getHotelsURL())
      .then(response => response.data);
  },
  getRoomDetails: async (hotelId: string): Promise<{ rooms: Room[] }> => {
    return await httpClient.get(getRoomDetailsURL(hotelId))
      .then(response => response.data);
  }
};
