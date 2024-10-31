export type Event = {
    '@id': string;
    '@type': string;
    id: number;
    maxCoupon: number;
    couponUse: number;
    name: string;
    description: string;
    filename: string;
    country: Country[];
  };
  
  export type Country = {
    '@id': string;
    '@type': string;
    id: number;
    isoName: string;
  };
  
  export type EventCollection = {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:totalItems': number;
    'hydra:member': Event[];
  };