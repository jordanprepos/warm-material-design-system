import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type IconButtonVariant = 'surface' | 'scrim' | 'outline';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant?: IconButtonVariant;
  size?: number;
  children: ReactNode;
}

const VARIANTS: Record<IconButtonVariant, CSSProperties> = {
  surface: {
    background: 'var(--cj-surface)',
    border: '1px solid var(--cj-line)',
    color: 'var(--cj-ink)'
  },
  scrim: {
    background: 'rgba(20,12,8,.4)',
    border: 'none',
    color: '#fff'
  },
  outline: {
    background: 'transparent',
    border: '1.5px solid var(--cj-line)',
    color: 'var(--cj-primary)'
  }
};

/** Circular icon button — back/close headers, hero overlay actions, favorite. */
export function IconButton({ variant = 'surface', size = 38, children, ...rest }: IconButtonProps) {
  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flex: 'none',
        ...VARIANTS[variant]
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
