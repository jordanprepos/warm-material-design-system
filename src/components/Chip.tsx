import type { CSSProperties, ReactNode } from 'react';
import { CheckIcon } from '../icons';

export type ChipVariant = 'facility-static' | 'facility-detail' | 'facility-toggle' | 'filter' | 'search-filter';

export interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  selected?: boolean;
  onClick?: () => void;
}

/**
 * One component covers every rounded label in the system: the 22dp
 * facility tags on feed rows and Detail, the 36dp toggleable facility
 * chips on Log visit, the "Recent / Top rated" filter chips, and the
 * checkmarked filter chips on Search.
 */
export function Chip({ children, variant = 'facility-static', selected = true, onClick }: ChipProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: 'var(--cj-font)',
    cursor: onClick ? 'pointer' : undefined,
    whiteSpace: 'nowrap'
  };

  let style: CSSProperties;
  switch (variant) {
    case 'facility-static':
      style = {
        ...base,
        height: 22,
        padding: '0 9px',
        borderRadius: 11,
        background: 'var(--cj-chip)',
        color: 'var(--cj-chip-ink)',
        fontSize: 11,
        fontWeight: 700
      };
      break;
    case 'facility-detail':
      style = {
        ...base,
        height: 30,
        padding: '0 12px',
        borderRadius: 15,
        background: 'var(--cj-chip)',
        color: 'var(--cj-chip-ink)',
        fontSize: 12.5,
        fontWeight: 700
      };
      break;
    case 'facility-toggle':
      style = selected
        ? { ...base, height: 36, padding: '0 14px', borderRadius: 18, background: 'var(--cj-primary)', color: '#fff', fontSize: 13, fontWeight: 700 }
        : {
            ...base,
            height: 36,
            padding: '0 14px',
            borderRadius: 18,
            background: 'var(--cj-surface)',
            border: '1px solid var(--cj-line)',
            color: 'var(--cj-muted)',
            fontSize: 13,
            fontWeight: 700
          };
      break;
    case 'filter':
      style = selected
        ? { ...base, height: 30, padding: '0 13px', borderRadius: 15, background: 'var(--cj-ink)', color: 'var(--cj-bg)', fontSize: 12, fontWeight: 700 }
        : {
            ...base,
            height: 30,
            padding: '0 13px',
            borderRadius: 15,
            border: '1px solid var(--cj-line)',
            color: 'var(--cj-muted)',
            fontSize: 12,
            fontWeight: 700
          };
      break;
    case 'search-filter':
      style = selected
        ? { ...base, height: 34, padding: '0 14px', borderRadius: 17, background: 'var(--cj-primary)', color: '#fff', fontSize: 12.5, fontWeight: 700 }
        : {
            ...base,
            height: 34,
            padding: '0 14px',
            borderRadius: 17,
            background: 'var(--cj-surface)',
            border: '1px solid var(--cj-line)',
            color: 'var(--cj-muted)',
            fontSize: 12.5,
            fontWeight: 700
          };
      break;
  }

  return (
    <div style={style} onClick={onClick}>
      {variant === 'search-filter' && selected && <CheckIcon size={13} />}
      {children}
    </div>
  );
}
