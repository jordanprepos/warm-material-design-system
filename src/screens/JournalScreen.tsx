import type { ReactNode } from 'react';
import type { CafeVisit } from '../types';
import { AICard } from '../components/AICard';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { NavBar } from '../components/NavBar';
import { Thumbnail } from '../components/Thumbnail';
import { BoltIcon, PlusIcon, SearchIcon, StarIcon } from '../icons';

export type JournalSort = 'recent' | 'top-rated';

export interface JournalScreenProps {
  greeting?: string;
  name: string;
  streakWeeks: number;
  visits: CafeVisit[];
  sort?: JournalSort;
  onSortChange?: (sort: JournalSort) => void;
  onSearchTap?: () => void;
  /** The AI insight card's body copy — pass a fragment to highlight a clause, e.g. with `<span style={{color: 'var(--cj-amber)'}}>`. */
  insightContent: ReactNode;
  onInsightTap?: () => void;
  onInsightDismiss?: () => void;
  insightDismissed?: boolean;
  onVisitTap?: (visit: CafeVisit) => void;
  onLogVisit?: () => void;
  onNavigate?: (destination: 'places' | 'stats' | 'profile') => void;
}

/** Screen 1 — Journal (Home). README §1. */
export function JournalScreen({
  greeting = 'Selamat pagi',
  name,
  streakWeeks,
  visits,
  sort = 'recent',
  onSortChange,
  onSearchTap,
  insightContent,
  onInsightTap,
  onInsightDismiss,
  insightDismissed,
  onVisitTap,
  onLogVisit,
  onNavigate
}: JournalScreenProps) {
  return (
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110 }}>
        <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.02em', color: 'var(--cj-muted)' }}>{greeting}</div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', marginTop: 2 }}>{name}</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              height: 36,
              padding: '0 14px',
              borderRadius: 18,
              background: 'var(--cj-amber-soft)',
              color: 'var(--cj-amber-ink)',
              fontSize: 13,
              fontWeight: 700
            }}
          >
            <BoltIcon size={15} />
            {streakWeeks}-week streak
          </div>
        </div>

        <div
          onClick={onSearchTap}
          style={{
            margin: '0 20px 18px',
            height: 46,
            borderRadius: 23,
            background: 'var(--cj-surface)',
            border: '1px solid var(--cj-line)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 16px',
            color: 'var(--cj-muted)',
            cursor: 'pointer'
          }}
        >
          <SearchIcon size={18} />
          <span style={{ fontSize: 14, fontWeight: 500 }}>Search cafes, drinks, cities</span>
        </div>

        {!insightDismissed && (
          <div style={{ margin: '0 20px 20px' }}>
            <AICard variant="primary" eyebrow="Journal insight" decorativeCircle="top-right">
              {insightContent}
              <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                <Button variant="amber" size="sm" onClick={onInsightTap}>
                  Show me
                </Button>
                <Button variant="ghost-outline" size="sm" onClick={onInsightDismiss}>
                  Not now
                </Button>
              </div>
            </AICard>
          </div>
        )}

        <div style={{ padding: '0 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-.01em' }}>Recent visits</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Chip variant="filter" selected={sort === 'recent'} onClick={() => onSortChange?.('recent')}>
              Recent
            </Chip>
            <Chip variant="filter" selected={sort === 'top-rated'} onClick={() => onSortChange?.('top-rated')}>
              Top rated
            </Chip>
          </div>
        </div>

        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {visits.map((v) => (
            <div
              key={v.id}
              onClick={() => onVisitTap?.(v)}
              style={{
                borderRadius: 20,
                background: 'var(--cj-surface)',
                border: '1px solid var(--cj-line)',
                boxShadow: 'var(--cj-shadow-card)',
                padding: 12,
                display: 'flex',
                gap: 14,
                cursor: 'pointer'
              }}
            >
              <Thumbnail size={88} radius={16} showGlyph />
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      letterSpacing: '-.01em',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {v.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 'none' }}>
                    <StarIcon size={13} style={{ color: 'var(--cj-star)' }} />
                    <span style={{ fontSize: 13, fontWeight: 800 }}>{v.ratingStr}</span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: 'var(--cj-muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {v.location} · {v.dateShort}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: '18px',
                    color: 'var(--cj-ink-soft)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {v.recommendation}
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 1 }}>
                  {v.facilities.slice(0, 2).map((f) => (
                    <Chip key={f} variant="facility-static">
                      {f}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 78,
          height: 110,
          background: 'linear-gradient(to bottom, transparent, var(--cj-bg) 55%)',
          pointerEvents: 'none'
        }}
      />
      <Button
        variant="primary"
        onClick={onLogVisit}
        icon={<PlusIcon size={20} />}
        style={{ position: 'absolute', right: 20, bottom: 98 }}
      >
        Log visit
      </Button>

      <NavBar active="journal" onNavigate={(d) => d !== 'journal' && onNavigate?.(d)} />
    </div>
  );
}
