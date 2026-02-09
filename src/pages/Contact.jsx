import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="section page-title">
      <h1>Contact</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <ContactCard />
        <ContactForm />
      </div>
    </section>
  );
}
