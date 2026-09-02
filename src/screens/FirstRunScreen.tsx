import { Button } from '../components/Button';
import { NavBar } from '../components/NavBar';
import { CafeCupIcon, PlusIcon } from '../icons';

export interface FirstRunScreenProps {
  greeting?: string;
  name: string;
  onLogFirstVisit?: () => void;
  /** Only shown when a Google Maps import actually exists — README §8. */
  onImportFromMaps?: () => void;
  onNavigate?: (destination: 'places' | 'stats' | 'profile') => void;
}

/** Screen 8 — First run (empty). README §8. Shown whenever visit count is 0. */
export function FirstRunScreen({ greeting = 'Selamat pagi', name, onLogFirstVisit, onImportFromMaps, onNavigate }: FirstRunScreenProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--cj-muted)' }}>{greeting}</div>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', marginTop: 2 }}>{name}</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 34px', textAlign: 'center' }}>
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 30,
            background: 'var(--cj-chip)',
            color: 'var(--cj-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 22
          }}
        >
          <CafeCupIcon size={44} />
        </div>
        <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-.02em', lineHeight: '30px' }}>Your journal starts with one cup</div>
        <div style={{ fontSize: 14.5, lineHeight: '22px', fontWeight: 500, color: 'var(--cj-muted)', marginTop: 10 }}>
          Log where you were, what you ordered, and whether you'd go back. After three entries the app starts spotting your
          patterns.
        </div>
        <Button variant="primary" icon={<PlusIcon size={19} />} onClick={onLogFirstVisit} style={{ marginTop: 26 }}>
          Log your first visit
        </Button>
        {onImportFromMaps && (
          <div onClick={onImportFromMaps} style={{ fontSize: 13, fontWeight: 700, color: 'var(--cj-primary)', marginTop: 16, cursor: 'pointer' }}>
            Import from Google Maps saves
          </div>
        )}
      </div>
      <NavBar active="journal" onNavigate={(d) => d !== 'journal' && onNavigate?.(d)} />
    </div>
  );
}
