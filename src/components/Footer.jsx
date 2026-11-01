import { app, team } from '../content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="logo-badge logo-badge--small"><img src="/logo.png" alt="" width="390" height="410" /></span>
        <p className="footer__brand">{app.name}</p>
        <p>{team.label}</p>
        {team.members.length > 0 && <p>Built by {team.members.join(', ')}</p>}
        <p className="footer__small">© {new Date().getFullYear()} {app.name}</p>
      </div>
    </footer>
  );
}
