import { useState } from 'react';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { IconButton } from '../components/IconButton';
import { SectionLabel } from '../components/SectionLabel';
import { StarRating } from '../components/StarRating';
import { TextField } from '../components/TextField';
import { CloseIcon, ImageIcon, PinIcon } from '../icons';
import { FACILITY_OPTIONS } from '../sampleData';

export interface LogVisitDraft {
  name: string;
  location: string;
  rating: number;
  facilities: string[];
  notes: string;
}

export interface LogVisitScreenProps {
  initialDraft?: Partial<LogVisitDraft>;
  onClose?: () => void;
  onSave?: (draft: LogVisitDraft) => void;
}

/** Screen 3 — Log visit. README §3. Validates only that name is non-empty (README §Interactions & Behavior). */
export function LogVisitScreen({ initialDraft, onClose, onSave }: LogVisitScreenProps) {
  const [name, setName] = useState(initialDraft?.name ?? '');
  const [location, setLocation] = useState(initialDraft?.location ?? '');
  const [rating, setRating] = useState(initialDraft?.rating ?? 4);
  const [facilities, setFacilities] = useState<string[]>(initialDraft?.facilities ?? []);
  const [notes, setNotes] = useState(initialDraft?.notes ?? '');

  const toggleFacility = (f: string) =>
    setFacilities((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  return (
    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconButton variant="surface" size={38} onClick={onClose}>
          <CloseIcon size={19} />
        </IconButton>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.02em' }}>New visit</div>
      </div>

      <div style={{ padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 22, flex: 1 }}>
        <div
          style={{
            height: 150,
            borderRadius: 20,
            border: '1.5px dashed var(--cj-line-strong)',
            background: 'var(--cj-surface)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            color: 'var(--cj-muted)'
          }}
        >
          <ImageIcon size={26} />
          <span style={{ fontSize: 13.5, fontWeight: 700 }}>Add a photo</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <TextField
            label="Cafe name"
            placeholder="Cafe name"
            focused={name.length > 0}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Location"
            placeholder="Location"
            leadingIcon={<PinIcon size={18} />}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <SectionLabel style={{ marginBottom: 10 }}>How was it?</SectionLabel>
          <div
            style={{
              borderRadius: 18,
              background: 'var(--cj-surface)',
              border: '1px solid var(--cj-line)',
              padding: 18,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10
            }}
          >
            <StarRating value={rating} size={38} gap={10} interactive onChange={setRating} />
          </div>
        </div>

        <div>
          <SectionLabel style={{ marginBottom: 10 }}>Facilities</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {FACILITY_OPTIONS.map((f) => (
              <Chip key={f} variant="facility-toggle" selected={facilities.includes(f)} onClick={() => toggleFacility(f)}>
                {f}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel style={{ marginBottom: 7 }}>Notes</SectionLabel>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ambiance, seating, noise — anything future-you needs."
            style={{
              width: '100%',
              minHeight: 96,
              borderRadius: 14,
              background: 'var(--cj-surface)',
              border: '1px solid var(--cj-line)',
              padding: '14px 16px',
              fontSize: 14.5,
              lineHeight: '21px',
              fontFamily: 'var(--cj-font)',
              color: 'var(--cj-ink)',
              resize: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'sticky',
          bottom: 0,
          padding: '12px 20px 20px',
          background: 'linear-gradient(to bottom, transparent, var(--cj-bg) 40%)'
        }}
      >
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={name.trim().length === 0}
          onClick={() => onSave?.({ name, location, rating, facilities, notes })}
        >
          Save visit
        </Button>
      </div>
    </div>
  );
}
