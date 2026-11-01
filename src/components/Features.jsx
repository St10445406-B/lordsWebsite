import { pillars, features } from '../content.js';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <p className="eyebrow">What it does</p>
        <h2>One app for the whole crew</h2>

        <div className="pillars">
          {pillars.map((p) => (
            <article key={p.title} className="card card--pillar">
              <span className="card__icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
