import '../components/Button.css';
import { useMemo, useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Lightbox from '../components/Lightbox';

const images = [
  { src: 'https://picsum.photos/id/1060/900/650', alt: 'Cleanup project in front yard', cat: 'Cleanup' },
  { src: 'https://picsum.photos/id/1040/900/650', alt: 'Fence repair in progress', cat: 'Repairs' },
  { src: 'https://picsum.photos/id/102/900/650', alt: 'Yard refresh and edging', cat: 'Yard Work' },
  { src: 'https://picsum.photos/id/1039/900/650', alt: 'Pressure washed driveway', cat: 'Cleanup' },
  { src: 'https://picsum.photos/id/1074/900/650', alt: 'Porch repair detail', cat: 'Repairs' },
  { src: 'https://picsum.photos/id/1011/900/650', alt: 'Trimmed hedges and lawn cleanup', cat: 'Yard Work' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const filtered = useMemo(() => (filter === 'All' ? images : images.filter((img) => img.cat === filter)), [filter]);

  return (
    <section className="section page-title">
      <h1>Gallery</h1>
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {['All', 'Cleanup', 'Repairs', 'Yard Work'].map((cat) => (
          <button key={cat} className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <ImageGrid items={filtered} onOpen={(i) => { setOpen(true); setIndex(i); }} />
      <Lightbox open={open} images={filtered} index={index} onClose={() => setOpen(false)} onNext={() => setIndex((i) => (i + 1) % filtered.length)} onPrev={() => setIndex((i) => (i - 1 + filtered.length) % filtered.length)} />
    </section>
  );
}
