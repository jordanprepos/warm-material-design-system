/** Decorative device clock/signal row — cosmetic only, not part of the design system proper. */
export function StatusBar() {
  return (
    <div
      style={{
        height: 48,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'var(--cj-font)'
      }}
    >
      <span>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, opacity: 0.9 }}>
        <div style={{ width: 16, height: 10, borderRadius: 2, background: 'currentColor' }} />
        <div style={{ width: 13, height: 10, borderRadius: 2, background: 'currentColor' }} />
        <div style={{ width: 22, height: 11, borderRadius: 3, border: '1.5px solid currentColor' }} />
      </div>
    </div>
  );
}
