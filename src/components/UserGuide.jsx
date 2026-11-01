import { useState } from 'react';
import { userGuide } from '../content.js';
import PhoneMock from './PhoneMock.jsx';

export default function UserGuide() {
  const roles = Object.keys(userGuide);
  const [role, setRole] = useState(roles[0]);
  const [active, setActive] = useState(0);
  const guide = userGuide[role];
  const shot = guide.steps[active]?.shot || guide.defaultShot;

  function pickRole(r) {
    setRole(r);
    setActive(0);
  }

  return (
    <section className="section" id="guide">
      <div className="container">
        <p className="eyebrow">User guide</p>
        <h2>How to use the app</h2>
        <p className="lead">Pick your role, then tap a step to see that screen.</p>

        <div className="tabs" role="tablist">
          {roles.map((r) => (
            <button
              key={r}
              role="tab"
              aria-selected={role === r}
              className={`tab ${role === r ? 'is-active' : ''}`}
              onClick={() => pickRole(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <p className="guide__intro">{guide.intro}</p>

        <div className="guide__grid">
          <ol className="steps" role="tabpanel">
            {guide.steps.map((s, i) => (
              <li key={s.title}>
                <button
                  className={`step ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="step__num">{i + 1}</span>
                  <span>
                    <span className="step__title">{s.title}</span>
                    <span className="step__text">{s.text}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="guide__phone">
            <PhoneMock shot={shot} alt={`Screenshot: ${guide.steps[active]?.title}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
