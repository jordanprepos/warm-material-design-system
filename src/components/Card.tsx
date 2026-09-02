import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  radius?: number;
  padding?: number | string;
  shadow?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

/** The generic `surface` card shell — 1dp `--cj-line` border, used everywhere. */
export function Card({ children, radius = 20, padding = 16, shadow = false, onClick, style }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: radius,
        padding,
        background: 'var(--cj-surface)',
        border: '1px solid var(--cj-line)',
        boxShadow: shadow ? 'var(--cj-shadow-card)' : undefined,
        cursor: onClick ? 'pointer' : undefined,
        ...style
      }}
    >
      {children}
    </div>
  );
}
