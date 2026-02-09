import Button from './Button';

export default function Hero() {
  return (
    <section className="section page-title">
      <div className="hero">
        <p className="muted">Tallahassee, Florida</p>
        <h1>Trusted Property Care, Repairs & Cleanup Done Right.</h1>
        <p className="muted">From pressure washing to handyman fixes, Powell’s All Around keeps your home and property clean, safe, and ready.</p>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <Button as="a" href="tel:+18505550123">Call Now</Button>
          <Button as="a" href="/contact" variant="outline">Request a Quote</Button>
        </div>
      </div>
    </section>
  );
}
