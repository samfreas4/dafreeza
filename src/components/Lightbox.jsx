import { useEffect, useRef } from 'react';
import './Lightbox.css';

export default function Lightbox({ open, images, index, onClose, onNext, onPrev }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Tab') {
        const focusables = ref.current?.querySelectorAll('button');
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    ref.current?.querySelector('button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;
  const img = images[index];
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox" onClick={(e) => e.stopPropagation()} ref={ref}>
        <button onClick={onClose} aria-label="Close lightbox">×</button>
        <img src={img.src} alt={img.alt} />
        <p>{img.alt}</p>
        <div className="lightbox-controls">
          <button onClick={onPrev} aria-label="Previous image">Prev</button>
          <button onClick={onNext} aria-label="Next image">Next</button>
        </div>
      </div>
    </div>
  );
}
