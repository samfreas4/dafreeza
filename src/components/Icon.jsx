const icons = {
  wrench: 'M19 4l-4 4m-8 8l-6 6m9-15l8 8-4 4-8-8 4-4z',
  hammer: 'M3 7h7l3 3-2 2-3-3v10h-2v-12z M13 4l7 7-2 2-7-7 2-2z',
  washer: 'M4 4h16v16H4z M8 8h8v8H8z',
  leaf: 'M5 19c10-1 14-8 14-14-6 0-13 4-14 14z M9 15l6-6',
  broom: 'M6 3l6 6m-2 2l5 5-5 5-5-5 5-5z M12 9l7-7',
  toolbox: 'M3 8h18v11H3z M8 8V6h8v2',
  phone: 'M6 2h4l2 5-2 2c1 2 3 4 5 5l2-2 5 2v4c0 1-1 2-2 2C10 20 4 14 4 4c0-1 1-2 2-2z',
  mail: 'M3 6h18v12H3z M3 8l9 6 9-6',
  clock: 'M12 6v6l4 2 M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z',
  'map-pin': 'M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={icons[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
