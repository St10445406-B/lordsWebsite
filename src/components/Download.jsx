import { download, app } from '../content.js';

export default function Download() {
  return (
    <section className="section download" id="download">
      <div className="container download__inner">
        <span className="logo-badge"><img src="/logo.png" alt="Lords & Legends logo" width="390" height="410" /></span>
        <h2>Download {app.name}</h2>
        <p className="download__meta">
          Version {app.version} · {app.platform} · {app.minAndroid}
          {download.size && ` · ${download.size}`}
        </p>

        {download.available ? (
          <a className="btn btn--large" href={download.url} download={download.fileName}>
            Download APK
          </a>
        ) : (
          <>
            <button className="btn btn--large" disabled>
              APK coming soon
            </button>
            <p className="download__hint">The download will appear here once the release build is ready.</p>
          </>
        )}

        <a href="#setup" className="download__link">How do I install it? →</a>
      </div>
    </section>
  );
}
