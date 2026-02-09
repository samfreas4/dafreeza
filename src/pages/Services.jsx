import Card from '../components/Card';
import FAQ from '../components/FAQ';
import Icon from '../components/Icon';

const services = [
  ['Property maintenance', 'Scheduled maintenance plans for homes and rentals.', 'toolbox'],
  ['Repairs', 'Doors, drywall touchups, fixtures, and more.', 'wrench'],
  ['Cleanup', 'Property cleanup and debris removal.', 'broom'],
  ['Pressure washing', 'Refresh surfaces with safe, effective washing.', 'washer'],
  ['Lawn / yard help', 'Trim, edge, and tidy your outdoor spaces.', 'leaf'],
  ['General handyman', 'Practical solutions for your to-do list.', 'hammer']
];

const faqs = [
  { q: 'Do you offer free estimates?', a: 'Yes, we provide clear estimates before work begins.' },
  { q: 'What service areas do you cover?', a: 'Primary service area is Tallahassee and nearby neighborhoods.' },
  { q: 'Can I bundle services?', a: 'Absolutely. We can bundle recurring maintenance with one-time projects.' }
];

export default function Services() {
  return (
    <section className="section page-title">
      <h1>Services</h1>
      <div className="grid cards-grid">
        {services.map(([title, text, icon]) => <Card key={title} title={title} icon={<Icon name={icon} />}>{text}</Card>)}
      </div>
      <FAQ items={faqs} />
    </section>
  );
}
