import MapPlaceholder from '../components/MapPlaceholder';

export default function About() {
  const points = ['Licensed and insured', 'Reliable scheduling', 'Quality workmanship', 'Transparent pricing', 'Local Tallahassee experts'];
  return (
    <section className="section page-title">
      <h1>About Us</h1>
      <p className="muted">Powell’s All Around Property Services LLC is a local team dedicated to practical, high-quality property support for homeowners and rental managers across Tallahassee.</p>
      <h2>Why Choose Us</h2>
      <ul>
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h2>Service Radius</h2>
      <MapPlaceholder />
    </section>
  );
}
