import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p><strong>Service Area:</strong> Tallahassee, FL</p>
        <p><a href="tel:+18505550123">(850) 555-0123</a> · <a href="mailto:powellspropertyservices@example.com">powellspropertyservices@example.com</a></p>
        <small>© {new Date().getFullYear()} Powell’s All Around Property Services LLC. All rights reserved.</small>
      </div>
    </footer>
  );
}
