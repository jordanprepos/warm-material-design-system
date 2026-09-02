import type { ReactNode } from 'react';
import { SparkleIcon } from '../icons';

export type AICardVariant = 'primary' | 'soft';

export interface AICardProps {
  variant?: AICardVariant;
  eyebrow: string;
  children: ReactNode;
  decorativeCircle?: 'top-right' | 'bottom-right' | 'none';
  padding?: number;
  radius?: number;
}

/**
 * The AI surface used for the Journal insight card, Detail's "Because you
 * liked this", Stats' "Pattern spotted" and the Shortlist prompt.
 * `primary` is the dark `--cj-ai-bg` inverted surface (used in *both*
 * themes — see README §0); `soft` is the lighter `--cj-ai-soft` variant.
 */
export function AICard({
  variant = 'primary',
  eyebrow,
  children,
  decorativeCircle = 'none',
  padding = 18,
  radius = 22
}: AICardProps) {
  const isPrimary = variant === 'primary';
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius,
        padding,
        background: isPrimary ? 'var(--cj-ai-bg)' : 'var(--cj-ai-soft)',
        border: isPrimary ? 'none' : '1px solid var(--cj-line)',
        color: isPrimary ? 'var(--cj-ai-ink)' : 'var(--cj-ink-soft)'
      }}
    >
      {decorativeCircle !== 'none' && (
        <div
          style={{
            position: 'absolute',
            width: 140,
            height: 140,
            borderRadius: 70,
            background: 'rgba(227,183,154,.16)',
            ...(decorativeCircle === 'top-right' ? { right: -30, top: -30 } : { right: -40, bottom: -50, width: 170, height: 170, borderRadius: 85 })
          }}
        />
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8 }}>
        <SparkleIcon size={isPrimary ? 16 : 15} style={{ color: isPrimary ? 'var(--cj-amber)' : 'var(--cj-primary)' }} />
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: isPrimary ? '.14em' : '.12em',
            textTransform: 'uppercase',
            color: isPrimary ? 'var(--cj-amber)' : 'var(--cj-primary)'
          }}
        >
          {eyebrow}
        </span>
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: 10,
          fontSize: isPrimary ? 16 : 14.5,
          lineHeight: isPrimary ? '23px' : '21px',
          fontWeight: isPrimary ? 600 : 400
        }}
      >
        {children}
      </div>
    </div>
  );
}
