import { StarIcon, StarOutlineIcon } from '../icons';

export interface StarRatingProps {
  /** 0–5, fractional allowed for display mode (renders whole stars only). */
  value: number;
  size?: number;
  gap?: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
}

const CAPTIONS: Record<number, string> = {
  1: "Not for me",
  2: 'Would skip next time',
  3: 'Solid, would return',
  4: 'Great — would come back',
  5: 'One of my favorites'
};

/** The 5-star row on Log visit (interactive, 38dp) and inline ratings elsewhere. */
export function StarRating({ value, size = 20, gap = 4, interactive = false, onChange }: StarRatingProps) {
  const rounded = Math.round(value);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', gap }}>
        {[1, 2, 3, 4, 5].map((n) =>
          n <= rounded ? (
            <StarIcon
              key={n}
              size={size}
              style={{ color: 'var(--cj-star)', cursor: interactive ? 'pointer' : undefined }}
              onClick={interactive && onChange ? () => onChange(n) : undefined}
            />
          ) : (
            <StarOutlineIcon
              key={n}
              size={size}
              style={{ color: 'var(--cj-line-strong)', cursor: interactive ? 'pointer' : undefined }}
              onClick={interactive && onChange ? () => onChange(n) : undefined}
            />
          )
        )}
      </div>
      {interactive && (
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--cj-muted)', fontFamily: 'var(--cj-font)' }}>
          {CAPTIONS[rounded] ?? CAPTIONS[4]}
        </div>
      )}
    </div>
  );
}
