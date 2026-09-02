import type { MonthStat, TopCafe } from '../types';
import { AICard } from '../components/AICard';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import { SectionLabel } from '../components/SectionLabel';

export interface StatsScreenProps {
  dateRangeLabel: string;
  visitsLogged: number;
  cafeCount: number;
  avgRating: string;
  months: MonthStat[];
  topCafes: TopCafe[];
  patternNote: string;
  onNavigate?: (destination: 'journal' | 'places' | 'profile') => void;
}

/** Screen 5 — Stats (new). README §5. */
export function StatsScreen({
  dateRangeLabel,
  visitsLogged,
  cafeCount,
  avgRating,
  months,
  topCafes,
  patternNote,
  onNavigate
}: StatsScreenProps) {
  const maxMonth = Math.max(...months.map((m) => m.value), 1);
  const peakThreshold = Math.max(...months.map((m) => m.value));

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 20 }}>
        <div style={{ padding: '8px 20px 18px' }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em' }}>Your year in coffee</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 3 }}>{dateRangeLabel}</div>
        </div>

        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              borderRadius: 22,
              background: 'var(--cj-ai-bg)',
              color: 'var(--cj-ai-ink)',
              padding: 20,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--cj-amber)' }}>
                Visits logged
              </div>
              <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1, marginTop: 8 }}>{visitsLogged}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.75 }}>{cafeCount} cafes</div>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.75, marginTop: 4 }}>avg {avgRating} ★</div>
            </div>
          </div>

          <Card radius={20} padding={18}>
            <SectionLabel>Visits per month</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 120, marginTop: 16 }}>
              {months.map((m) => (
                <div key={m.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, justifyContent: 'flex-end', height: '100%' }}>
                  <div
                    style={{
                      width: '100%',
                      height: (m.value / (maxMonth || 1)) * 88,
                      borderRadius: 7,
                      background: m.value >= peakThreshold ? 'var(--cj-primary)' : 'var(--cj-bar-off)'
                    }}
                  />
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cj-muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card radius={20} padding={18}>
            <SectionLabel style={{ marginBottom: 12 }}>Most visited</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {topCafes.map((c) => (
                <div key={c.rank} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 26, fontSize: 15, fontWeight: 800, color: 'var(--cj-primary)' }}>{c.rank}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                    <div style={{ height: 6, borderRadius: 3, background: 'var(--cj-chip)', marginTop: 6, overflow: 'hidden' }}>
                      <div style={{ width: `${(c.count / c.maxCount) * 100}%`, height: '100%', borderRadius: 3, background: 'var(--cj-primary)' }} />
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--cj-muted)' }}>{c.count}×</div>
                </div>
              ))}
            </div>
          </Card>

          <AICard variant="soft" eyebrow="Pattern spotted">
            {patternNote}
          </AICard>
        </div>
      </div>

      <NavBar active="stats" onNavigate={(d) => d !== 'stats' && onNavigate?.(d)} />
    </div>
  );
}
