export function getHotelsURL(): string {
  return '/hotels?collection-id=OBMNG';
}

export function getRoomDetailsURL(hotelId: string): string {
  return `/roomRates/OBMNG/${hotelId}`;
}
