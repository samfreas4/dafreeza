export default function MapPlaceholder() {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: '1rem' }}>
      <svg viewBox="0 0 400 220" role="img" aria-label="Service radius map placeholder">
        <rect x="0" y="0" width="400" height="220" fill="#e2e8f0" rx="14" />
        <circle cx="205" cy="114" r="74" fill="rgb(17 138 138 / 22%)" stroke="#118a8a" strokeWidth="3" />
        <circle cx="205" cy="114" r="8" fill="#0e6e6e" />
        <text x="160" y="118" fill="#0f172a" fontSize="14">Tallahassee Hub</text>
      </svg>
      <p className="muted">Approximate local service radius around Tallahassee, FL.</p>
    </div>
  );
}
