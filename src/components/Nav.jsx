import { useState } from 'react';
import { app } from '../content.js';

const links = [
  ['#features', 'Features'],
  ['#screens', 'Screens'],
  ['#guide', 'User guide'],
  ['#setup', 'Setup'],
  ['#faq', 'FAQ'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <img className="nav__logo" src="/logo.png" alt="" width="36" height="38" />
          {app.name}
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#download" className="btn btn--small" onClick={() => setOpen(false)}>
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
