export interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

/** The Profile "Dark theme" toggle. */
export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <div
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      style={{
        width: 48,
        height: 28,
        borderRadius: 14,
        padding: 3,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: checked ? 'flex-end' : 'flex-start',
        background: checked ? 'var(--cj-primary)' : 'var(--cj-switch-off)',
        cursor: onChange ? 'pointer' : undefined,
        transition: 'background .2s, justify-content .2s'
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          background: checked ? 'var(--cj-bg)' : '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,.25)'
        }}
      />
    </div>
  );
}
