import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/gallery', 'Gallery'],
  ['/about', 'About'],
  ['/contact', 'Contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo-placeholder.svg" alt="" aria-hidden="true" />
          <strong>Powell’s All Around</strong>
        </NavLink>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((v) => !v)}>Menu</button>
        <nav id="site-nav" className={open ? 'open' : ''}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
