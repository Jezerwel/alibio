// Alibio's content in one place. The six condos' locations come from the client (Davao City; Saint Dominique in
// Iloilo City; Boracay Newcoast; Subic); Makati and Cebu City, and every price, size, amenity and photograph,
// are stand-ins until the real listings arrive. Replace each `airbnbUrl` with the condo's own Airbnb listing.

export type Photo = {
  id: string;
  alt: string;
  width: number;
  height: number;
  /** published widths of /assets/img/photo-<id>-<w>.webp; `full` is /assets/img/photo-<id>.webp */
  widths: readonly number[];
  full?: number;
};

export type Amenity = 'wifi' | 'aircon' | 'kitchen' | 'pool' | 'parking' | 'workspace' | 'washer' | 'beach';

export type Condo = {
  slug: string;
  name: string;
  district: string;
  city: string;
  kind: 'city' | 'beach';
  pricePerNight: number;
  layout: string;
  areaM2: number;
  guests: number;
  summary: string;
  amenities: readonly Amenity[];
  airbnbUrl: string;
  photo: Photo;
};

export const site = {
  name: 'Alibio',
  tagline: 'Comfort that puts you at ease',
  mainAction: 'Book a stay',
  email: 'hello@alibio.example',
  checkIn: 'From 14:00, self check-in',
  checkOut: 'By 11:00',
} as const;

const img = (id: string, alt: string, width: number, height: number): Photo => ({ id, alt, width, height, widths: [320, 500, 960], full: 1280 });

export const condos: readonly Condo[] = [
  {
    slug: 'saint-dominique', name: 'Condo at Saint Dominique', district: 'Iloilo Business Park', city: 'Iloilo City', kind: 'city',
    pricePerNight: 4300, layout: '2 bedrooms', areaM2: 64, guests: 5,
    summary: 'A two-bedroom unit in the Saint Dominique tower, with a full kitchen and a balcony over the business park.',
    amenities: ['wifi', 'aircon', 'kitchen', 'pool', 'parking', 'washer'],
    airbnbUrl: 'https://www.airbnb.com/s/Iloilo-City--Philippines/homes',
    photo: img('f73183392', 'A kitchen with wood cabinets, a black fridge and a granite island', 960, 657),
  },
  {
    slug: 'bajada', name: 'Condo in Bajada', district: 'Bajada', city: 'Davao City', kind: 'city',
    pricePerNight: 2650, layout: '1 bedroom', areaM2: 38, guests: 2,
    summary: 'A one-bedroom with a dining corner by the window, north of the city centre.',
    amenities: ['wifi', 'aircon', 'kitchen', 'pool', 'workspace'],
    airbnbUrl: 'https://www.airbnb.com/s/Davao-City--Philippines/homes',
    photo: img('f165047557', 'A dining corner by a floor-to-ceiling window with shelves and four chairs', 960, 720),
  },
  {
    slug: 'boracay-newcoast', name: 'Condo in Boracay Newcoast', district: 'Newcoast', city: 'Boracay', kind: 'beach',
    pricePerNight: 5200, layout: '1 bedroom', areaM2: 40, guests: 4,
    summary: 'A one-bedroom in Boracay Newcoast, with a queen bed, a sofa bed and the pool a floor down.',
    amenities: ['wifi', 'aircon', 'kitchen', 'pool', 'beach'],
    airbnbUrl: 'https://www.airbnb.com/s/Boracay--Philippines/homes',
    photo: img('f104842288', 'A double bed with white linen between two lamps and an armchair', 960, 720),
  },
  {
    slug: 'subic', name: 'Condo in Subic Bay Freeport', district: 'Subic Bay Freeport', city: 'Subic', kind: 'beach',
    pricePerNight: 2800, layout: 'Studio', areaM2: 30, guests: 2,
    summary: 'A studio inside the Freeport, a short drive from the bay and the beaches of Zambales.',
    amenities: ['wifi', 'aircon', 'kitchen', 'parking', 'beach'],
    airbnbUrl: 'https://www.airbnb.com/s/Subic--Philippines/homes',
    photo: img('f27294315', 'A suite with a dining table for four, an armchair and a bed beyond', 960, 636),
  },
  {
    slug: 'salcedo', name: 'Condo in Salcedo Village', district: 'Salcedo Village', city: 'Makati', kind: 'city',
    pricePerNight: 2950, layout: 'Studio', areaM2: 26, guests: 2,
    summary: 'A bright studio with a window wall and a desk, a walk from the offices of Makati.',
    amenities: ['wifi', 'aircon', 'kitchen', 'workspace', 'washer'],
    airbnbUrl: 'https://www.airbnb.com/s/Makati--Philippines/homes',
    photo: img('f147942740', 'A bright studio with a window wall, plants and a small dining table', 960, 640),
  },
  {
    slug: 'it-park', name: 'Condo in IT Park', district: 'IT Park', city: 'Cebu City', kind: 'city',
    pricePerNight: 3400, layout: '1 bedroom', areaM2: 42, guests: 3,
    summary: 'A one-bedroom with a separate living room and balcony, in the middle of Cebu IT Park.',
    amenities: ['wifi', 'aircon', 'kitchen', 'pool', 'workspace'],
    airbnbUrl: 'https://www.airbnb.com/s/Cebu-City--Philippines/homes',
    photo: img('f187101720', 'A living room with a tan sofa, a low table and a balcony door', 960, 640),
  },
];

export const amenityLabel: Record<Amenity, string> = {
  wifi: 'Wi-Fi', aircon: 'Air conditioning', kitchen: 'Kitchen', pool: 'Shared pool',
  parking: 'Parking', workspace: 'Desk for work', washer: 'Washer', beach: 'Near the beach',
};

export const peso = (n: number) => `₱${n.toLocaleString('en-US')}`;

export const lowestPrice = Math.min(...condos.map((c) => c.pricePerNight));

export const mapSearch = (district: string, city: string) =>
  `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${district} ${city}`)}`;

/** srcset for a fetched photograph: its sized files, then the largest */
export const srcSet = (p: Photo) =>
  [...p.widths.map((w) => `/assets/img/photo-${p.id}-${w}.webp ${w}w`), ...(p.full ? [`/assets/img/photo-${p.id}.webp ${p.full}w`] : [])].join(', ');
