import type { ReactNode } from 'react';
import { ThemeProvider, type Theme } from '../ThemeProvider';
import { StatusBar } from './StatusBar';

export interface PhoneFrameProps {
  theme?: Theme;
  children: ReactNode;
  showStatusBar?: boolean;
}

/**
 * 390×844dp device chrome (a Pixel-class phone — see README §About the
 * Design Files) for previewing screens in Storybook. Not a design-system
 * component itself, just presentation scaffolding.
 */
export function PhoneFrame({ theme = 'light', children, showStatusBar = true }: PhoneFrameProps) {
  return (
    <div
      style={{
        width: 406,
        height: 860,
        background: '#141010',
        borderRadius: 52,
        padding: 8,
        boxSizing: 'border-box',
        boxShadow: '0 24px 60px rgba(40,25,18,.28)'
      }}
    >
      <ThemeProvider
        theme={theme}
        style={{
          width: 390,
          height: 844,
          borderRadius: 44,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {showStatusBar && <StatusBar />}
        {children}
      </ThemeProvider>
    </div>
  );
}
