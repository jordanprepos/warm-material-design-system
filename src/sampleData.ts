import type {
  CafeVisit,
  LocationStat,
  MonthStat,
  ProfileStats,
  SearchResult,
  Suggestion,
  TopCafe
} from './types';

/** Sample data used by Storybook stories and default component previews. */

export const sampleVisits: CafeVisit[] = [
  {
    id: 'v1',
    name: 'Tanamera Coffee',
    location: 'Thamrin, Jakarta',
    dateShort: '2 days ago',
    dateStr: 'on Jul 28, 2026',
    ratingStr: '5.0',
    priceRange: 'Rp 35–50k',
    recommendation: 'Gula aren latte, iced',
    notes: 'Quiet after 2pm, plenty of outlets, great for a full afternoon of work.',
    facilities: ['WiFi', 'Outlets', 'AC']
  },
  {
    id: 'v2',
    name: 'Ruang Seduh',
    location: 'BSD, Tangerang',
    dateShort: '5 days ago',
    dateStr: 'on Jul 25, 2026',
    ratingStr: '4.5',
    priceRange: 'Rp 28–40k',
    recommendation: 'V60 manual brew, Toraja',
    notes: 'Outlets at every seat. Gets loud on weekend mornings.',
    facilities: ['Outlets', 'Parking']
  },
  {
    id: 'v3',
    name: 'Sagaleh',
    location: 'Kemang, Jakarta',
    dateShort: '1 week ago',
    dateStr: 'on Jul 21, 2026',
    ratingStr: '4.5',
    priceRange: 'Rp 30–45k',
    recommendation: 'Kopi susu gula aren',
    notes: 'Quiet, low-key, plants everywhere. My go-to for reading.',
    facilities: ['Outlets', 'Quiet']
  }
];

export const sampleFeatured = sampleVisits[0];

export const sampleLocationStats: LocationStat[] = [
  { id: 'l1', name: 'Jakarta', visitCount: 14, avgRating: '4.4' },
  { id: 'l2', name: 'Bandung', visitCount: 5, avgRating: '4.2' },
  { id: 'l3', name: 'Tangerang', visitCount: 3, avgRating: '4.5' },
  { id: 'l4', name: 'Bogor', visitCount: 2, avgRating: '4.0' }
];

export const sampleMonths: MonthStat[] = [
  { label: 'Jan', value: 2 },
  { label: 'Feb', value: 3 },
  { label: 'Mar', value: 5 },
  { label: 'Apr', value: 3 },
  { label: 'May', value: 4 },
  { label: 'Jun', value: 2 },
  { label: 'Jul', value: 5 }
];

export const sampleTopCafes: TopCafe[] = [
  { rank: 1, name: 'Tanamera Coffee', count: 6, maxCount: 6 },
  { rank: 2, name: 'Ruang Seduh', count: 4, maxCount: 6 },
  { rank: 3, name: 'Kopi Toko Djawa', count: 3, maxCount: 6 }
];

export const sampleSuggestions: Suggestion[] = [
  {
    id: 's1',
    name: 'Sagaleh',
    matchPercent: 94,
    meta: 'Kemang · 1.2 km · Rp 30–45k',
    tagA: 'Outlets',
    tagB: 'Quiet',
    reason: 'Same quiet-plus-outlets profile as Ruang Seduh, which you rated 4.5.'
  },
  {
    id: 's2',
    name: 'Kalyan Kopi',
    matchPercent: 88,
    meta: 'Kemang · 1.8 km · Rp 28–40k',
    tagA: 'Outlets',
    tagB: 'Manual brew',
    reason: 'Manual-brew heavy menu — your manual brews average 4.7 versus 4.0 for espresso.'
  },
  {
    id: 's3',
    name: 'Beranda Kopi',
    matchPercent: 81,
    meta: 'Bangka · 2.4 km · Rp 25–38k',
    tagA: 'Outdoor',
    tagB: 'Outlets',
    reason: 'Outdoor seating with power, like Kopi Toko Djawa. Busiest before 10am.'
  }
];

export const sampleSearchResults: SearchResult[] = [
  { id: 'r1', name: 'Ruang Seduh', location: 'BSD, Tangerang', matchedOn: 'Outlets at every seat', ratingStr: '4.5' },
  { id: 'r2', name: 'Tanamera Coffee', location: 'Thamrin, Jakarta', matchedOn: 'Outlets · AC', ratingStr: '5.0' },
  { id: 'r3', name: 'Sagaleh', location: 'Kemang, Jakarta', matchedOn: 'Outlets · quiet after 2', ratingStr: '4.5' },
  { id: 'r4', name: 'Kopi Toko Djawa', location: 'Braga, Bandung', matchedOn: 'Outlets by the window', ratingStr: '4.5' },
  { id: 'r5', name: 'Titik Kumpul', location: 'Senopati, Jakarta', matchedOn: 'Outlets · long tables', ratingStr: '4.0' }
];

export const sampleProfile: ProfileStats = {
  initials: 'JP',
  name: 'Jordan P.',
  tagline: 'Kopi susu maximalist · Jakarta',
  visits: 24,
  cafes: 11,
  avgRating: '4.3'
};

export const FACILITY_OPTIONS = ['WiFi', 'Outlets', 'Parking', 'AC', 'Outdoor', 'Pet friendly'];
