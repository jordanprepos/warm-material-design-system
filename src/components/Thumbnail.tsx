import { CafeCupIcon } from '../icons';

export interface ThumbnailProps {
  size: number;
  radius: number;
  showGlyph?: boolean;
}

/**
 * The gradient placeholder used for every visit photo (feed rows, Detail
 * hero, Search/Shortlist thumbnails) until real photo capture ships — see
 * README §Assets.
 */
export function Thumbnail({ size, radius, showGlyph = false }: ThumbnailProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flex: 'none',
        borderRadius: radius,
        background: 'linear-gradient(140deg, var(--cj-photo-1), var(--cj-photo-2))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {showGlyph && <CafeCupIcon size={Math.round(size * 0.34)} style={{ color: '#fff', opacity: 0.45 }} />}
    </div>
  );
}
