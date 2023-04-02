export enum StarRating {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
}

export type Hotel = {
  id: string;
  name: string;
  address1: string;
  address2: string;
  images: { url: string; }[];
  starRating: StarRating;
}

export type Room = {
  id: string;
  name: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
  };
  longDescription: string;
}
