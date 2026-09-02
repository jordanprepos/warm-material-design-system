import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'amber' | 'ghost-outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
}

const SIZES: Record<ButtonSize, { height: number; fontSize: number; paddingX: number; radius: number }> = {
  sm: { height: 34, fontSize: 13, paddingX: 16, radius: 17 },
  md: { height: 50, fontSize: 14.5, paddingX: 20, radius: 25 },
  lg: { height: 54, fontSize: 15, paddingX: 22, radius: 27 }
};

/**
 * The pill CTA used for "Log visit", "Save visit", "Directions", "Save
 * shortlist", "Show me" / "Not now", etc. — see README §Design Tokens.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth,
  children,
  style,
  ...rest
}: ButtonProps) {
  const s = SIZES[size];
  const base: CSSProperties = {
    height: s.height,
    padding: `0 ${s.paddingX}px`,
    borderRadius: s.radius,
    fontFamily: 'var(--cj-font)',
    fontSize: s.fontSize,
    fontWeight: 800,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: 'none',
    cursor: 'pointer',
    width: fullWidth ? '100%' : undefined,
    whiteSpace: 'nowrap'
  };

  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: 'var(--cj-primary)',
      color: '#fff',
      boxShadow: 'var(--cj-shadow-cta)'
    },
    amber: {
      background: 'var(--cj-amber)',
      color: 'var(--cj-ai-bg)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--cj-muted)',
      border: '1.5px solid var(--cj-line)',
      boxShadow: 'none',
      fontWeight: 700
    },
    'ghost-outline': {
      background: 'transparent',
      color: 'inherit',
      border: '1px solid rgba(246,233,223,.3)',
      boxShadow: 'none',
      fontWeight: 700
    }
  };

  return (
    <button
      style={{ ...base, ...variants[variant], opacity: rest.disabled ? 0.5 : 1, ...style }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
