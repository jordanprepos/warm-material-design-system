import type { CSSProperties, ReactNode } from 'react';
import './tokens.css';

export type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/**
 * Applies the Warm Material token set to its subtree via `data-cj-theme`.
 * Every component in this package reads colors through the `--cj-*`
 * custom properties defined in tokens.css, so nesting ThemeProviders
 * (e.g. an AI card that is always "dark" regardless of the ambient
 * theme) is safe and expected — see AICard.
 */
export function ThemeProvider({ theme = 'light', children, style, className }: ThemeProviderProps) {
  return (
    <div className={['cj-root', className].filter(Boolean).join(' ')} data-cj-theme={theme} style={style}>
      {children}
    </div>
  );
}
