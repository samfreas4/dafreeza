import './ImageGrid.css';

export default function ImageGrid({ items, onOpen }) {
  return (
    <div className="image-grid">
      {items.map((img, i) => (
        <button key={img.src} className="img-btn" onClick={() => onOpen(i)}>
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
        </button>
      ))}
    </div>
  );
}
