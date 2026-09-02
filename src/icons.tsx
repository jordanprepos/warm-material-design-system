import type { SVGProps } from 'react';

/**
 * Icon paths ported 1:1 from `Screens Warm Material.dc.html` (the approved
 * "Warm Material" direction). These map to Material Symbols glyphs — see
 * the README's Assets section for the Android equivalents.
 */

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'children'> {
  size?: number;
}

function makeIcon(path: ReactNodeFactory, defaultProps?: Partial<SVGProps<SVGSVGElement>>) {
  return function Icon({ size = 24, ...rest }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...defaultProps} {...rest}>
        {path()}
      </svg>
    );
  };
}

type ReactNodeFactory = () => JSX.Element;

export const BoltIcon = makeIcon(() => <path d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" />);

export const SearchIcon = makeIcon(
  () => (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  { fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
);

export const SparkleIcon = makeIcon(() => (
  <>
    <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
  </>
));

export const CafeCupIcon = makeIcon(() => (
  <path d="M20 3H4v10a4 4 0 004 4h6a4 4 0 004-4v-3h2a3 3 0 000-6zm0 4h-2V5h2a1 1 0 010 2zM2 21h18v-2H2v2z" />
));

export const StarIcon = makeIcon(() => (
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
));

export const StarOutlineIcon = makeIcon(
  () => <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />,
  { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }
);

export const ArrowBackIcon = makeIcon(() => (
  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
));

export const EditIcon = makeIcon(() => (
  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
));

export const ShareIcon = makeIcon(() => (
  <path d="M18 8a3 3 0 10-2.8-4H15L8.9 9.6a3 3 0 100 4.8L15 20h.2A3 3 0 1018 16a3 3 0 00-2 .8L10.2 12 16 7.2A3 3 0 0018 8z" />
));

export const PinIcon = makeIcon(() => (
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
));

export const DirectionsIcon = makeIcon(
  () => (
    <>
      <path d="M12 21s7-7.75 7-12a7 7 0 10-14 0c0 4.25 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  { fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
);

export const HeartIcon = makeIcon(
  () => <path d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />,
  { fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
);

export const CloseIcon = makeIcon(() => (
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
));

export const ImageIcon = makeIcon(() => (
  <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" />
));

export const ChevronRightIcon = makeIcon(() => <path d="M9 5l7 7-7 7" />, {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2
});

export const PlusIcon = makeIcon(() => <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />);

export const CheckIcon = makeIcon(() => <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />);

export const DarkModeIcon = makeIcon(() => (
  <path d="M12 3a9 9 0 109 9c0-.34-.02-.68-.06-1a6 6 0 01-7.94-7.94c-.32-.04-.66-.06-1-.06z" />
));

export const SyncIcon = makeIcon(() => (
  <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14a6 6 0 006 6h13a5 5 0 00.35-9.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.09-5.09 1.41 1.42L10 17z" />
));

export const ExportIcon = makeIcon(() => <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />);

export const NavHomeIcon = makeIcon(() => <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />);

export const NavStatsIcon = makeIcon(() => <path d="M4 20h3V10H4v10zm6.5 0h3V4h-3v16zM17 20h3v-7h-3v7z" />);

export const NavProfileIcon = makeIcon(() => (
  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
));
