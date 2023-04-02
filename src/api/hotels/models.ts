export type StarRating = '1' | '2' | '3' | '4' | '5'

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
