import type { CSSProperties, ReactNode } from 'react';

export interface SectionLabelProps {
  children: ReactNode;
  tone?: 'muted' | 'primary' | 'amber';
  letterSpacing?: string;
  style?: CSSProperties;
}

const TONES: Record<NonNullable<SectionLabelProps['tone']>, string> = {
  muted: 'var(--cj-muted)',
  primary: 'var(--cj-primary)',
  amber: 'var(--cj-amber)'
};

/** The uppercase eyebrow label — "ORDER THIS", "RATING", "JOURNAL INSIGHT", field labels. */
export function SectionLabel({ children, tone = 'muted', letterSpacing = '.1em', style }: SectionLabelProps) {
  return (
    <div
      style={{
        fontFamily: 'var(--cj-font)',
        fontSize: 11,
        fontWeight: 800,
        letterSpacing,
        textTransform: 'uppercase',
        color: TONES[tone],
        ...style
      }}
    >
      {children}
    </div>
  );
}
