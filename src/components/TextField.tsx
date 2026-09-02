import { useState } from 'react';
import type { FocusEvent, InputHTMLAttributes, ReactNode } from 'react';
import { SectionLabel } from './SectionLabel';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'size'> {
  label?: string;
  leadingIcon?: ReactNode;
  /** Overrides the real DOM focus state — for static previews only (e.g. showing the focused/unfocused pair side by side). Leave unset for a normal interactive field. */
  focused?: boolean;
}

/**
 * 52dp, 14dp-radius field from Log visit. Real keyboard focus drives the
 * 1.5dp primary border called out in the README; otherwise a 1dp neutral
 * line.
 */
export function TextField({ label, leadingIcon, focused, placeholder, onFocus, onBlur, ...rest }: TextFieldProps) {
  const [domFocused, setDomFocused] = useState(false);
  const isFocused = focused ?? domFocused;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <div
        style={{
          height: 52,
          borderRadius: 14,
          background: 'var(--cj-surface)',
          border: isFocused ? '1.5px solid var(--cj-primary)' : '1px solid var(--cj-line)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 16px'
        }}
      >
        {leadingIcon && <span style={{ color: 'var(--cj-muted)', display: 'flex' }}>{leadingIcon}</span>}
        <input
          placeholder={placeholder}
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            setDomFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            setDomFocused(false);
            onBlur?.(e);
          }}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            flex: 1,
            fontFamily: 'var(--cj-font)',
            fontSize: isFocused ? 15.5 : 15,
            fontWeight: isFocused ? 700 : 400,
            color: 'var(--cj-ink)'
          }}
          {...rest}
        />
      </div>
    </div>
  );
}
