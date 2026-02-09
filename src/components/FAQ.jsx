import { useState } from 'react';
import './FAQ.css';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div className="faq-item" key={item.q}>
            <button aria-expanded={open} className="faq-btn" onClick={() => setOpenIndex(open ? -1 : i)}>
              {item.q}<span>{open ? '−' : '+'}</span>
            </button>
            {open && <p>{item.a}</p>}
          </div>
        );
      })}
    </section>
  );
}
