import type { LocationStat } from '../types';
import { NavBar } from '../components/NavBar';
import { ChevronRightIcon, PinIcon } from '../icons';

export interface PlacesScreenProps {
  cafeCount: number;
  cityCount: number;
  locationStats: LocationStat[];
  onLocationTap?: (location: LocationStat) => void;
  onOpenMap?: () => void;
  onNavigate?: (destination: 'journal' | 'stats' | 'profile') => void;
}

/**
 * Screen 4 — Places. README §4. The map is a stylized placeholder — see
 * README §Assets: "Replace with the real map SDK; keep the geometry."
 */
export function PlacesScreen({ cafeCount, cityCount, locationStats, onLocationTap, onOpenMap, onNavigate }: PlacesScreenProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 20 }}>
        <div style={{ padding: '8px 20px 18px' }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em' }}>Places</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 3 }}>
            {cafeCount} cafes across {cityCount} cities
          </div>
        </div>

        <div
          onClick={onOpenMap}
          style={{
            margin: '0 20px 18px',
            height: 170,
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--cj-map)',
            border: '1px solid var(--cj-line)',
            cursor: onOpenMap ? 'pointer' : undefined
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.5,
              background:
                'repeating-linear-gradient(90deg, transparent 0 38px, var(--cj-map-line) 38px 39px), repeating-linear-gradient(0deg, transparent 0 34px, var(--cj-map-line) 34px 35px)'
            }}
          />
          <div style={{ position: 'absolute', left: '-10%', top: '40%', width: '120%', height: 22, background: 'var(--cj-map-road)', transform: 'rotate(-8deg)' }} />
          <div style={{ position: 'absolute', left: '30%', top: '-10%', width: 18, height: '120%', background: 'var(--cj-map-road)', transform: 'rotate(6deg)' }} />
          <div style={{ position: 'absolute', left: '24%', top: '30%', width: 26, height: 26, borderRadius: 13, background: '#6b4a3a', border: '3px solid #fff', boxShadow: '0 3px 8px rgba(0,0,0,.2)' }} />
          <div style={{ position: 'absolute', left: '56%', top: '54%', width: 26, height: 26, borderRadius: 13, background: '#6b4a3a', border: '3px solid #fff', boxShadow: '0 3px 8px rgba(0,0,0,.2)' }} />
          <div style={{ position: 'absolute', left: '72%', top: '22%', width: 20, height: 20, borderRadius: 10, background: '#b08b6e', border: '3px solid #fff' }} />
          <div style={{ position: 'absolute', left: '41%', top: '72%', width: 20, height: 20, borderRadius: 10, background: '#b08b6e', border: '3px solid #fff' }} />
          <div
            style={{
              position: 'absolute',
              right: 12,
              bottom: 12,
              height: 32,
              padding: '0 14px',
              borderRadius: 16,
              background: 'var(--cj-surface)',
              display: 'flex',
              alignItems: 'center',
              fontSize: 12,
              fontWeight: 800,
              boxShadow: '0 2px 8px rgba(0,0,0,.12)'
            }}
          >
            Open map
          </div>
        </div>

        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {locationStats.map((l) => (
            <div
              key={l.id}
              onClick={() => onLocationTap?.(l)}
              style={{
                borderRadius: 18,
                background: 'var(--cj-surface)',
                border: '1px solid var(--cj-line)',
                padding: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                cursor: onLocationTap ? 'pointer' : undefined
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  flex: 'none',
                  borderRadius: 14,
                  background: 'var(--cj-chip)',
                  color: 'var(--cj-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <PinIcon size={21} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.01em' }}>{l.name}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 2 }}>
                  {l.visitCount} visits · avg {l.avgRating}
                </div>
              </div>
              <ChevronRightIcon size={18} style={{ color: 'var(--cj-muted)' }} />
            </div>
          ))}
        </div>
      </div>

      <NavBar active="places" onNavigate={(d) => d !== 'places' && onNavigate?.(d)} />
    </div>
  );
}
