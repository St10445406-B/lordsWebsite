import { faqs } from '../content.js';

export default function Faq() {
  return (
    <section className="section section--alt" id="faq">
      <div className="container container--narrow">
        <p className="eyebrow">Help</p>
        <h2>Questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
