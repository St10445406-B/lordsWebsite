import { useState } from 'react';
import { screenshots } from '../content.js';
import PhoneMock from './PhoneMock.jsx';

const groups = ['Everyone', 'Managers', 'Supervisors'];

export default function Screens() {
  const [group, setGroup] = useState(groups[0]);
  const shown = screenshots.filter((s) => s.group === group);

  return (
    <section className="section section--alt" id="screens">
      <div className="container">
        <p className="eyebrow">Take a look</p>
        <h2>Inside the app</h2>
        <p className="lead">Real screens from the app. Managers and supervisors see extra tools.</p>

        <div className="tabs" role="tablist">
          {groups.map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={group === g}
              className={`tab ${group === g ? 'is-active' : ''}`}
              onClick={() => setGroup(g)}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="screens">
          {shown.map((s) => (
            <figure key={s.file} className="screens__item">
              <PhoneMock shot={s.file} alt={`Screenshot: ${s.caption}`} small />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
