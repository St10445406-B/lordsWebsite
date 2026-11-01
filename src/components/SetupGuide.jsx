import { setupGroups, requirements } from '../content.js';
import PhoneMock from './PhoneMock.jsx';

export default function SetupGuide() {
  return (
    <section className="section section--alt" id="setup">
      <div className="container">
        <p className="eyebrow">Setup guide</p>
        <h2>Getting set up</h2>

        <div className="requirements">
          <h3>You’ll need</h3>
          <ul>
            {requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="setup__groups">
          {setupGroups.map((group, g) => (
            <div key={group.heading} className={group.shot ? 'setup__group setup__group--shot' : 'setup__group'}>
              <div>
              <h3 className="setup__heading">
                <span>Part {g + 1}</span> {group.heading}
              </h3>
              <ol className="timeline">
                {group.steps.map((s, i) => (
                  <li key={s.title}>
                    <span className="timeline__num">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    {s.note && <p className="note">{s.note}</p>}
                  </li>
                ))}
              </ol>
              </div>
              {group.shot && (
                <div className="setup__phone">
                  <PhoneMock shot={group.shot} alt={`Screenshot: ${group.heading}`} small />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
