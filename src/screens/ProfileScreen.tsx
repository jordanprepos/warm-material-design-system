import type { ReactNode } from 'react';
import type { ProfileStats } from '../types';
import { Card } from '../components/Card';
import { ChevronRightIcon, DarkModeIcon, ExportIcon, SyncIcon } from '../icons';
import { NavBar } from '../components/NavBar';
import { Switch } from '../components/Switch';

export interface ProfileScreenProps {
  profile: ProfileStats;
  darkTheme: boolean;
  onDarkThemeChange?: (value: boolean) => void;
  syncStatusLabel?: string;
  onExportJournal?: () => void;
  onNavigate?: (destination: 'journal' | 'places' | 'stats') => void;
}

function SettingsRow({
  icon,
  label,
  sublabel,
  trailing,
  onClick,
  divider = true
}: {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  trailing?: ReactNode;
  onClick?: () => void;
  divider?: boolean;
}) {
  return (
    <>
      <div
        onClick={onClick}
        style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, cursor: onClick ? 'pointer' : undefined }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--cj-chip)', color: 'var(--cj-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{label}</div>
            {sublabel && <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 1 }}>{sublabel}</div>}
          </div>
        </div>
        {trailing}
      </div>
      {divider && <div style={{ height: 1, background: 'var(--cj-line)', marginLeft: 70 }} />}
    </>
  );
}

/** Screen 9 — Profile. README §9. */
export function ProfileScreen({ profile, darkTheme, onDarkThemeChange, syncStatusLabel = 'Last backed up 2 min ago', onExportJournal, onNavigate }: ProfileScreenProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 20 }}>
        <div style={{ padding: '8px 20px 18px', fontSize: 26, fontWeight: 800, letterSpacing: '-.02em' }}>Profile</div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Card radius={22} padding={22} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 42,
                background: 'linear-gradient(140deg, #8a6449, #4e362a)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: '-.02em'
              }}
            >
              {profile.initials}
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, marginTop: 14, letterSpacing: '-.01em' }}>{profile.name}</div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--cj-muted)', marginTop: 3 }}>{profile.tagline}</div>
            <div style={{ display: 'flex', width: '100%', marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--cj-line)' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>{profile.visits}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cj-muted)', marginTop: 2 }}>visits</div>
              </div>
              <div style={{ width: 1, background: 'var(--cj-line)' }} />
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>{profile.cafes}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cj-muted)', marginTop: 2 }}>cafes</div>
              </div>
              <div style={{ width: 1, background: 'var(--cj-line)' }} />
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>{profile.avgRating}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cj-muted)', marginTop: 2 }}>avg rating</div>
              </div>
            </div>
          </Card>

          <Card radius={20} padding={0} style={{ overflow: 'hidden' }}>
            <SettingsRow
              icon={<DarkModeIcon size={19} />}
              label="Dark theme"
              trailing={<Switch checked={darkTheme} onChange={onDarkThemeChange} />}
            />
            <SettingsRow
              icon={<SyncIcon size={19} />}
              label="Sync"
              sublabel={syncStatusLabel}
              trailing={<div style={{ fontSize: 12, fontWeight: 800, color: 'var(--cj-success)' }}>On</div>}
            />
            <SettingsRow
              icon={<ExportIcon size={19} />}
              label="Export journal"
              trailing={<ChevronRightIcon size={18} style={{ color: 'var(--cj-muted)' }} />}
              onClick={onExportJournal}
              divider={false}
            />
          </Card>
        </div>
      </div>

      <NavBar active="profile" onNavigate={(d) => d !== 'profile' && onNavigate?.(d)} />
    </div>
  );
}
