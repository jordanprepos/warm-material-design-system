/**
 * Data shapes mirror `CafeVisit` and friends from the Android app's domain
 * model (see README.md § State Management) — kept intentionally close so a
 * screen built here maps onto real data with no reshaping.
 */

export interface CafeVisit {
  id: string;
  name: string;
  location: string;
  dateShort: string;
  dateStr: string;
  ratingStr: string;
  priceRange: string;
  recommendation: string;
  notes: string;
  facilities: string[];
}

export interface LocationStat {
  id: string;
  name: string;
  visitCount: number;
  avgRating: string;
}

export interface MonthStat {
  label: string;
  value: number;
}

export interface TopCafe {
  rank: number;
  name: string;
  count: number;
  maxCount: number;
}

export interface Suggestion {
  id: string;
  name: string;
  matchPercent: number;
  meta: string;
  tagA: string;
  tagB: string;
  reason: string;
}

export interface SearchResult {
  id: string;
  name: string;
  location: string;
  matchedOn: string;
  ratingStr: string;
}

export interface ProfileStats {
  initials: string;
  name: string;
  tagline: string;
  visits: number;
  cafes: number;
  avgRating: string;
}

export type NavDestination = 'journal' | 'places' | 'stats' | 'profile';

/** Exact facility options from README §3 — Log visit. */
export const FACILITY_OPTIONS = ['WiFi', 'Outlets', 'Parking', 'AC', 'Outdoor', 'Pet friendly'] as const;
