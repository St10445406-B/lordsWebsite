import { app } from '../content.js';
import PhoneMock from './PhoneMock.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <img className="hero__logo" src="/logo.png" alt="Lords & Legends logo" width="390" height="410" />
          <h1 className="hero__title">{app.name}</h1>
          <p className="hero__tagline">{app.tagline}</p>
          <p className="hero__summary">{app.summary}</p>
          <div className="hero__actions">
            <a href="#download" className="btn">Get the app</a>
            <a href="#guide" className="btn btn--ghost">Read the guide</a>
          </div>
        </div>
        <PhoneMock shot="overview" alt="The Overview screen of the app" />
      </div>
    </section>
  );
}
