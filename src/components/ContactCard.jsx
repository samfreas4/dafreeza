import Icon from './Icon';
import './ContactCard.css';

export default function ContactCard() {
  return (
    <aside className="contact-card">
      <h2>Powell’s All Around Property Services LLC</h2>
      <p><Icon name="phone" /> <a href="tel:+18505550123">(850) 555-0123</a></p>
      <p><Icon name="mail" /> <a href="mailto:powellspropertyservices@example.com">powellspropertyservices@example.com</a></p>
      <p><Icon name="map-pin" /> Tallahassee, FL</p>
      <p><Icon name="clock" /> Mon–Sat 8am–6pm</p>
    </aside>
  );
}
