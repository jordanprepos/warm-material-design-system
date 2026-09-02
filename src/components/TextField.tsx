import type { InputHTMLAttributes, ReactNode } from 'react';
import { SectionLabel } from './SectionLabel';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'size'> {
  label?: string;
  leadingIcon?: ReactNode;
  focused?: boolean;
}

/**
 * 52dp, 14dp-radius field from Log visit. `focused` drives the 1.5dp
 * primary border called out in the README; otherwise a 1dp neutral line.
 */
export function TextField({ label, leadingIcon, focused, placeholder, ...rest }: TextFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <div
        style={{
          height: 52,
          borderRadius: 14,
          background: 'var(--cj-surface)',
          border: focused ? '1.5px solid var(--cj-primary)' : '1px solid var(--cj-line)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 16px'
        }}
      >
        {leadingIcon && <span style={{ color: 'var(--cj-muted)', display: 'flex' }}>{leadingIcon}</span>}
        <input
          placeholder={placeholder}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            flex: 1,
            fontFamily: 'var(--cj-font)',
            fontSize: focused ? 15.5 : 15,
            fontWeight: focused ? 700 : 400,
            color: 'var(--cj-ink)'
          }}
          {...rest}
        />
      </div>
    </div>
  );
}
