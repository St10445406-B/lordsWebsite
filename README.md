# Lords & Legends — Landing Page

React + Vite landing page for the Lords & Legends Android app: features, user guide, APK setup guide, download and FAQ.

## Run it

```bash
npm install
npm run dev        # opens on http://localhost:5173
npm run build      # production build in /dist
```

## Edit the content

All text is in `src/content.js`. Content is based on the project handover files of 28 Oct and 1 Nov 2026.

## Add the APK download

1. Build a release APK in Android Studio (Build → Generate Signed App Bundle / APK → APK).
2. Copy it to `public/downloads/lords-and-legends-crew.apk`.
3. In `src/content.js`, set `download.available` to `true` (and fill in `size`).

The "APK coming soon" button becomes a working "Download APK" button.

## Screenshots and logo

- Logo: `public/logo.png` (favicon: `public/favicon.png`)
- App screenshots: `public/screenshots/*.webp` (taken from the App Demo slide deck)
- To add or swap a screenshot, drop a new `.webp`/`.png` in `public/screenshots/` and list it in the `screenshots` array in `src/content.js`. User guide steps pick their screenshot with `shot: '<file name>'`.
