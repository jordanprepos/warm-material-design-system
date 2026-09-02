import type { SearchResult } from '../types';
import { Chip } from '../components/Chip';
import { IconButton } from '../components/IconButton';
import { Thumbnail } from '../components/Thumbnail';
import { ArrowBackIcon, SearchIcon, StarIcon } from '../icons';

export interface SearchFilter {
  id: string;
  label: string;
  active: boolean;
}

export interface SearchScreenProps {
  query: string;
  onQueryChange?: (query: string) => void;
  filters: SearchFilter[];
  onFilterToggle?: (id: string) => void;
  results: SearchResult[];
  onBack?: () => void;
  onResultTap?: (result: SearchResult) => void;
}

/** Screen 7 — Search (new). README §7. Searches the user's own entries, not a global directory. */
export function SearchScreen({ query, onQueryChange, filters, onFilterToggle, results, onBack, onResultTap }: SearchScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ padding: '8px 20px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconButton variant="surface" size={38} onClick={onBack}>
          <ArrowBackIcon size={19} />
        </IconButton>
        <div
          style={{
            flex: 1,
            height: 46,
            borderRadius: 23,
            background: 'var(--cj-surface)',
            border: '1.5px solid var(--cj-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 16px'
          }}
        >
          <SearchIcon size={17} style={{ color: 'var(--cj-muted)' }} />
          <input
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
            placeholder="Search your visits"
            style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontFamily: 'var(--cj-font)', fontSize: 14.5, fontWeight: 700, color: 'var(--cj-ink)' }}
          />
        </div>
      </div>

      <div style={{ padding: '0 20px 16px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {filters.map((f) => (
          <Chip key={f.id} variant="search-filter" selected={f.active} onClick={() => onFilterToggle?.(f.id)}>
            {f.label}
          </Chip>
        ))}
      </div>

      <div style={{ padding: '0 20px 10px', fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--cj-muted)' }}>
        {results.length} matches · sorted by your rating
      </div>

      <div style={{ padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {results.map((r) => (
          <div
            key={r.id}
            onClick={() => onResultTap?.(r)}
            style={{
              borderRadius: 16,
              background: 'var(--cj-surface)',
              border: '1px solid var(--cj-line)',
              padding: '13px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 13,
              cursor: onResultTap ? 'pointer' : undefined
            }}
          >
            <Thumbnail size={46} radius={14} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {r.location} · {r.matchedOn}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 'none' }}>
              <StarIcon size={12} style={{ color: 'var(--cj-star)' }} />
              <span style={{ fontSize: 12.5, fontWeight: 800 }}>{r.ratingStr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
