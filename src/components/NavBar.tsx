import type { NavDestination } from '../types';
import { NavHomeIcon, NavProfileIcon, NavStatsIcon, PinIcon } from '../icons';

export interface NavBarProps {
  active: NavDestination;
  onNavigate?: (destination: NavDestination) => void;
}

const ITEMS: Array<{ key: NavDestination; label: string; Icon: typeof NavHomeIcon }> = [
  { key: 'journal', label: 'Journal', Icon: NavHomeIcon },
  { key: 'places', label: 'Places', Icon: PinIcon },
  { key: 'stats', label: 'Stats', Icon: NavStatsIcon },
  { key: 'profile', label: 'Profile', Icon: NavProfileIcon }
];

/** 78dp bottom navigation — Journal, Places, Stats, Profile. */
export function NavBar({ active, onNavigate }: NavBarProps) {
  return (
    <div
      style={{
        flex: 'none',
        height: 78,
        background: 'var(--cj-nav)',
        borderTop: '1px solid var(--cj-line)',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 11
      }}
    >
      {ITEMS.map(({ key, label, Icon }) => {
        const isActive = key === active;
        return (
          <div
            key={key}
            onClick={() => onNavigate?.(key)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5,
              color: isActive ? 'var(--cj-primary)' : 'var(--cj-nav-inactive)',
              cursor: onNavigate ? 'pointer' : undefined
            }}
          >
            <Icon size={22} />
            <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'var(--cj-font)' }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
