import './Card.css';

export default function Card({ title, icon, children }) {
  return (
    <article className="card">
      {icon}
      <h3>{title}</h3>
      <p className="muted">{children}</p>
    </article>
  );
}
