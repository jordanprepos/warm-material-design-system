import type { CafeVisit } from '../types';
import { AICard } from '../components/AICard';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Chip } from '../components/Chip';
import { IconButton } from '../components/IconButton';
import { SectionLabel } from '../components/SectionLabel';
import { CafeCupIcon, DirectionsIcon, EditIcon, HeartIcon, PinIcon, ShareIcon, StarIcon, ArrowBackIcon } from '../icons';

export interface DetailScreenProps {
  visit: CafeVisit;
  relatedNote: string;
  favorited?: boolean;
  onBack?: () => void;
  onEdit?: () => void;
  onShare?: () => void;
  onFavoriteToggle?: () => void;
  onDirections?: () => void;
}

/** Screen 2 — Detail. README §2. */
export function DetailScreen({
  visit,
  relatedNote,
  favorited,
  onBack,
  onEdit,
  onShare,
  onFavoriteToggle,
  onDirections
}: DetailScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ height: 300, position: 'relative', background: 'linear-gradient(150deg, #c9a88f, #6f5140)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CafeCupIcon size={76} style={{ color: '#fff', opacity: 0.2 }} />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(20,12,8,.35), rgba(20,12,8,0) 35%, rgba(20,12,8,.75))'
          }}
        />
        <div style={{ position: 'absolute', top: 12, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <IconButton variant="scrim" size={40} onClick={onBack}>
            <ArrowBackIcon size={20} />
          </IconButton>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconButton variant="scrim" size={40} onClick={onEdit}>
              <EditIcon size={19} />
            </IconButton>
            <IconButton variant="scrim" size={40} onClick={onShare}>
              <ShareIcon size={19} />
            </IconButton>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, opacity: 0.92 }}>
            <PinIcon size={14} />
            {visit.location}
          </div>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.025em', marginTop: 6, lineHeight: '36px' }}>
            {visit.name}
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 20px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <Card radius={16} padding="12px 14px" style={{ flex: 1 }}>
            <SectionLabel>Rating</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5 }}>
              <StarIcon size={18} style={{ color: 'var(--cj-star)' }} />
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>{visit.ratingStr}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--cj-muted)' }}>/ 5</span>
            </div>
          </Card>
          <Card radius={16} padding="12px 14px" style={{ flex: 1 }}>
            <SectionLabel>Spend</SectionLabel>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em', marginTop: 5 }}>{visit.priceRange}</div>
          </Card>
        </div>

        <Card radius={20} padding={18}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <SectionLabel tone="primary">Order this</SectionLabel>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 6, letterSpacing: '-.01em' }}>{visit.recommendation}</div>
            </div>
            <div style={{ height: 1, background: 'var(--cj-line)' }} />
            <div>
              <SectionLabel tone="primary">Notes</SectionLabel>
              <div style={{ fontSize: 15, lineHeight: '23px', marginTop: 6, color: 'var(--cj-ink-soft)' }}>{visit.notes}</div>
            </div>
            <div style={{ height: 1, background: 'var(--cj-line)' }} />
            <div>
              <SectionLabel tone="primary">Facilities</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {visit.facilities.map((f) => (
                  <Chip key={f} variant="facility-detail">
                    {f}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <AICard variant="soft" eyebrow="Because you liked this">
          {relatedNote}
        </AICard>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="primary" size="lg" fullWidth icon={<DirectionsIcon size={18} />} onClick={onDirections}>
            Directions
          </Button>
          <IconButton variant="outline" size={52} onClick={onFavoriteToggle}>
            <HeartIcon size={20} fill={favorited ? 'var(--cj-primary)' : 'none'} />
          </IconButton>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--cj-muted)', textAlign: 'center' }}>
          Logged {visit.dateStr}
        </div>
      </div>
    </div>
  );
}
