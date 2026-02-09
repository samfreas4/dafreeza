import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const items = [
  { name: 'Rachel M.', text: 'Great communication and quick cleanup before guests arrived. Highly recommend.' },
  { name: 'Darren T.', text: 'Pressure washing made our driveway look brand new. Fair pricing and quality work.' },
  { name: 'Latoya S.', text: 'Reliable handyman help for small repairs. Showed up on time and finished same day.' }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const startX = useRef(0);

  useEffect(() => {
    if (pause) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [pause]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % items.length);
    if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <section className="section" aria-label="Customer testimonials">
      <h2>What Customers Say</h2>
      <div className="slider" tabIndex="0" onKeyDown={onKeyDown} onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          const diff = e.clientX - startX.current;
          if (Math.abs(diff) < 35) return;
          setIndex((i) => (diff < 0 ? (i + 1) % items.length : (i - 1 + items.length) % items.length));
        }}>
        <div className="track" style={{ transform: `translateX(-${index * 100}%)` }} aria-live="polite">
          {items.map((item) => (
            <figure key={item.name} className="slide">
              <blockquote>“{item.text}”</blockquote>
              <figcaption>— {item.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="controls">
          <button onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} aria-label="Previous testimonial">‹</button>
          <div className="dots">{items.map((_, i) => <button key={i} className={i === index ? 'active' : ''} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} />)}</div>
          <button onClick={() => setIndex((i) => (i + 1) % items.length)} aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
}
