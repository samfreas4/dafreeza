import Hero from '../components/Hero';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Testimonials from '../components/Testimonials';

const teasers = [
  ['Property Maintenance', 'Recurring upkeep that protects curb appeal and value.', 'toolbox'],
  ['Repairs', 'Quick fixes and quality handyman workmanship.', 'hammer'],
  ['Cleanup', 'Move-out, storm, and routine cleanup services.', 'broom'],
  ['Pressure Washing', 'Patios, driveways, siding, and more.', 'washer']
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <h2>Core Services</h2>
        <div className="grid cards-grid">
          {teasers.map(([title, text, icon]) => <Card key={title} title={title} icon={<Icon name={icon} />}>{text}</Card>)}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
