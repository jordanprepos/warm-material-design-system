import type { ReactNode } from 'react';
import type { Suggestion } from '../types';
import { AICard } from '../components/AICard';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { IconButton } from '../components/IconButton';
import { Thumbnail } from '../components/Thumbnail';
import { ArrowBackIcon } from '../icons';

export type ShortlistState = 'success' | 'loading' | 'error';

export interface ShortlistScreenProps {
  state?: ShortlistState;
  /** The prompt card's body copy — pass a fragment to highlight a clause. */
  promptContent: ReactNode;
  suggestions: Suggestion[];
  onBack?: () => void;
  onSave?: () => void;
  onRefine?: () => void;
  onRetry?: () => void;
}

/**
 * Screen 6 — Shortlist (new). README §6. Loading/error states aren't in
 * the mocks (README §Interactions & Behavior calls for a 3-card skeleton
 * and a retry state) — implemented here to the same shell.
 */
export function ShortlistScreen({ state = 'success', promptContent, suggestions, onBack, onSave, onRefine, onRetry }: ShortlistScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconButton variant="surface" size={38} onClick={onBack}>
          <ArrowBackIcon size={19} />
        </IconButton>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.02em' }}>Your shortlist</div>
      </div>

      <div style={{ margin: '0 20px 18px' }}>
        <AICard variant="primary" eyebrow="Matched on your taste" decorativeCircle="bottom-right" padding={20}>
          {promptContent}
        </AICard>
      </div>

      <div style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {state === 'loading' &&
          [0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                borderRadius: 20,
                background: 'var(--cj-surface)',
                border: '1px solid var(--cj-line)',
                boxShadow: 'var(--cj-shadow-card)',
                padding: 16,
                display: 'flex',
                gap: 14,
                opacity: 0.5
              }}
            >
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--cj-line)' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
                <div style={{ height: 14, width: '60%', borderRadius: 4, background: 'var(--cj-line)' }} />
                <div style={{ height: 10, width: '40%', borderRadius: 4, background: 'var(--cj-line)' }} />
              </div>
            </div>
          ))}

        {state === 'error' && (
          <div style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--cj-muted)' }}>Couldn't build a shortlist right now</div>
            <Button variant="outline" onClick={onRetry}>
              Retry
            </Button>
          </div>
        )}

        {state === 'success' && (
          <>
            {suggestions.map((s) => (
              <div
                key={s.id}
                style={{
                  borderRadius: 20,
                  background: 'var(--cj-surface)',
                  border: '1px solid var(--cj-line)',
                  boxShadow: 'var(--cj-shadow-card)',
                  overflow: 'hidden'
                }}
              >
                <div style={{ padding: '16px 16px 14px', display: 'flex', gap: 14 }}>
                  <Thumbnail size={64} radius={16} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                      <div style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: '-.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--cj-primary)', flex: 'none' }}>{s.matchPercent}% match</div>
                    </div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 3 }}>{s.meta}</div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                      <Chip variant="facility-static">{s.tagA}</Chip>
                      <Chip variant="facility-static">{s.tagB}</Chip>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--cj-ai-soft)', borderTop: '1px solid var(--cj-line)', fontSize: 13, lineHeight: '19px', color: 'var(--cj-ink-soft)' }}>
                  {s.reason}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
              <Button variant="primary" fullWidth onClick={onSave}>
                Save shortlist
              </Button>
              <Button variant="outline" onClick={onRefine}>
                Refine
              </Button>
            </div>
            <div style={{ fontSize: 11.5, lineHeight: '17px', fontWeight: 600, color: 'var(--cj-muted)', textAlign: 'center', marginTop: 2 }}>
              Suggestions come from your own entries. Nothing leaves the device unless sync is on.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
