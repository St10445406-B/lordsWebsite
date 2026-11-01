// ---------------------------------------------------------------
//  All the text on the site lives here, so you can edit it
//  without touching the components.
//  Source: project handover files of 28 Oct and 1 Nov 2026.
// ---------------------------------------------------------------

export const app = {
  name: 'Lords & Legends Crew',
  shortName: 'L&L Crew',
  tagline: 'Learn the job. Run the shift. Get paid fairly.',
  summary:
    'Rosters, messages and pay used to be spread across paper, WhatsApp and spreadsheets. Lords & Legends Crew puts the whole restaurant team in one Android app, with one trusted record.',
  platform: 'Android',
  version: '1.0',
  minAndroid: 'Android 7.0 or newer',
};

// ---- APK download ---------------------------------------------
// When the signed release APK is ready:
//   1. Copy it to  public/downloads/lords-and-legends-crew.apk
//   2. Set  available: true  below (and fill in size)
export const download = {
  available: false,
  url: '/downloads/lords-and-legends-crew.apk',
  fileName: 'lords-and-legends-crew.apk',
  size: '', // e.g. '24 MB'
};

// The three jobs the app does
export const pillars = [
  {
    icon: '📖',
    title: 'Learn the job',
    text: 'The Academy has training videos and reading modules that unlock in order, so new staff learn at their own pace.',
  },
  {
    icon: '⏱',
    title: 'Run the shift',
    text: 'Clock in, check today’s bookings, read the manager’s notes and request leave, all from your phone.',
  },
  {
    icon: '💰',
    title: 'Get paid fairly',
    text: 'Hourly rates with full history, weekly earnings worked out from approved hours, and contracts signed on the phone.',
  },
];

export const features = [
  { title: 'Overview', text: 'A greeting, today’s bookings, the manager’s notes and shortcut tiles for your work.' },
  { title: 'Bookings', text: 'See bookings for the next 30 days. Managers add, edit and delete them, and new ones appear live.' },
  { title: 'The bell', text: 'A red dot shows how many new bookings you haven’t seen yet.' },
  { title: 'Manager’s notes', text: 'Short notes from management on the Overview screen, like “Stock take on Friday”.' },
  { title: 'Clock-in', text: 'Clock in and out from Time & Attendance. A manager approves it, and you see “On shift” straight away.' },
  { title: 'Leave', text: 'Request leave in line with the BCEA. Managers approve or decline with a note.' },
  { title: 'Earnings', text: 'Approved hours minus breaks, times your hourly rate, saved once per week.' },
  { title: 'Contracts', text: 'Read your contract and sign it with your finger. The signature is stamped onto the PDF.' },
  { title: 'Academy', text: 'Training videos and reading modules, with your progress saved.' },
];

// ---- User guide (per role) ------------------------------------
export const userGuide = {
  Employee: {
    intro: 'For waiters, bar staff and everyone on the floor.',
    defaultShot: 'overview',
    steps: [
      { title: 'Check the Overview', shot: 'overview', text: 'The Overview tab shows your greeting, today’s bookings, the manager’s notes and tiles for everything you use.' },
      { title: 'Clock in for your shift', shot: 'time-attendance', text: 'Open Time & Attendance and tap Clock in. It goes to a manager as pending. Once they approve it, the screen changes to “On shift” on its own. Clock out the same way at the end.' },
      { title: 'See bookings', shot: 'bookings', text: 'Open the Bookings tab to see what’s coming up. Tap the bell on the Overview to see new bookings. The red dot shows how many you haven’t read.' },
      { title: 'Do your training', shot: 'academy', text: 'Open the Academy tab. Watch the videos and work through the reading modules. Each one unlocks after the one before it.' },
      { title: 'Request leave', shot: 'leave-request', text: 'Open Leave, choose your dates and send the request. You’ll see when a manager approves or declines it.' },
      { title: 'Sign your contract', text: 'Open My contracts, read the document and sign with your finger.' },
      { title: 'Check your earnings', text: 'Open Earnings to see each saved week: the hours counted, your rate and the total.' },
    ],
  },
  Manager: {
    intro: 'Managers can do everything an employee can, plus run the team.',
    defaultShot: 'clock-approvals',
    steps: [
      { title: 'Add a staff member', shot: 'add-staff', text: 'Open Add staff and fill in their details. The app shows a temporary password once. Give it to them; they must change it the first time they sign in.' },
      { title: 'Approve clock-ins', shot: 'clock-approvals', text: 'Open Clock approvals. Approve or reject each clock-in, and correct the time if needed.' },
      { title: 'Manage bookings', shot: 'bookings', text: 'In Bookings, tap + to add one (title, date, start time, guests from 1 to 500, notes). Tap a booking to edit or delete it. Everyone sees new bookings live.' },
      { title: 'Post a note', shot: 'overview', text: 'On the Overview, tap + Add note. Tap a note to edit it, or use the bin to delete it.' },
      { title: 'Set hourly rates', shot: 'hourly-rates', text: 'Open Rates, search for the staff member and enter the new rate in whole rands. It starts next Monday by default, and the old rate stays in the history.' },
      { title: 'Save the week’s pay', shot: 'earnings', text: 'Open Earnings, pick the last finished week and tap “Save this week for everyone”. Anyone with pending clock-ins or no rate is listed as needing attention.' },
      { title: 'Contracts, leave and warnings', shot: 'contract-signatures', text: 'Upload and send contracts and see who has signed. Approve or decline leave with a note. Record warnings with your signature.' },
    ],
  },
  Supervisor: {
    intro: 'The owner role. Supervisors can do everything a manager can, plus:',
    defaultShot: 'staff-files',
    steps: [
      { title: 'Open Staff files', shot: 'staff-files', text: 'See each staff member’s full file, including ID and tax numbers, onboarding documents and signed contracts. Only supervisors can see these.' },
      { title: 'Add managers and supervisors', shot: 'add-staff', text: 'Managers can only add employees. Supervisors can also add managers and other supervisors.' },
      { title: 'Remove a leaver', shot: 'staff-file', text: 'When someone leaves, mark them inactive. They are blocked at sign-in and the next time the app opens.' },
    ],
  },
};

// ---- Screenshots gallery ---------------------------------------
// Files live in public/screenshots/<file>.webp
export const screenshots = [
  { file: 'overview', caption: 'Overview', group: 'Everyone' },
  { file: 'bookings', caption: 'Bookings', group: 'Everyone' },
  { file: 'time-attendance', caption: 'Time & Attendance', group: 'Everyone' },
  { file: 'academy', caption: 'Academy videos', group: 'Everyone' },
  { file: 'modules', caption: 'Reading modules', group: 'Everyone' },
  { file: 'leave', caption: 'Leave', group: 'Everyone' },
  { file: 'leave-request', caption: 'New leave request', group: 'Everyone' },
  { file: 'sign-in', caption: 'Sign in', group: 'Everyone' },
  { file: 'clock-approvals', caption: 'Clock approvals', group: 'Managers' },
  { file: 'earnings', caption: 'Weekly pay', group: 'Managers' },
  { file: 'hourly-rates', caption: 'Hourly rates', group: 'Managers' },
  { file: 'contracts', caption: 'Contracts', group: 'Managers' },
  { file: 'contract-signatures', caption: 'Who has signed', group: 'Managers' },
  { file: 'warning', caption: 'Warning record', group: 'Managers' },
  { file: 'add-staff', caption: 'Add staff', group: 'Managers' },
  { file: 'staff-files', caption: 'Staff files', group: 'Supervisors' },
  { file: 'staff-file', caption: 'A staff file', group: 'Supervisors' },
];

// ---- Setup guide ----------------------------------------------
export const requirements = [
  'An Android phone running Android 7.0 or newer',
  'An internet connection (the app works online only)',
  'A staff account. Your manager creates it and gives you a temporary password.',
];

export const setupGroups = [
  {
    heading: 'Install the app',
    steps: [
      { title: 'Download the APK', text: 'Use the download button on this page from your Android phone. If you downloaded it on a computer, copy the file to your phone.' },
      { title: 'Allow installs from this source', text: 'The app isn’t on the Play Store yet, so Android asks first. Tap Settings and turn on “Allow from this source” for your browser or file manager.', note: 'The path varies by phone. Usually: Settings → Apps → Special app access → Install unknown apps.' },
      { title: 'Install', text: 'Open the file and tap Install. If Play Protect says the app is unrecognised, tap “More details” → “Install anyway”.' },
    ],
  },
  {
    heading: 'Your first sign-in',
    shot: 'sign-in',
    steps: [
      { title: 'Sign in with your temporary password', text: 'Use your email and the temporary password your manager gave you.' },
      { title: 'Choose your own password', text: 'You must set a new password straight away: at least 8 characters, with a letter and a number. You can’t reuse the temporary password.' },
      { title: 'Accept the policies', text: 'Read the restaurant’s policies (behaviour, appearance, time keeping and shortages) and accept them.' },
      { title: 'Fill in your onboarding details', text: 'Add your details and upload your documents, such as your ID copy and proof of bank account. Screenshots are blocked on this screen to protect your information.' },
      { title: 'You’re in', text: 'You land on the Overview. The app keeps you signed in until Monday 00:00, the start of the next pay week. Then you sign in again.' },
    ],
  },
];

export const faqs = [
  { q: 'I lost my temporary password.', a: 'Ask your manager. Temporary passwords are only shown once, so they will need to set you up with a new one.' },
  { q: 'Why do I have to sign in again every Monday?', a: 'For security, sign-ins last until Monday 00:00, the start of the pay week. After that, the app asks for your password again.' },
  { q: 'My clock-in still says pending.', a: 'A manager has to approve it. Once they do, your screen updates by itself.' },
  { q: 'Why is a week missing from my earnings?', a: 'A week is only saved once all its clock-ins are approved and you have an hourly rate. Ask your manager if a week looks wrong.' },
  { q: '“App not installed” or “different signature”', a: 'An older copy was installed from a different computer. Uninstall the old app first, then install the new APK.' },
  { q: 'Is there an iPhone version?', a: 'No. Lords & Legends Crew is Android only.' },
  { q: 'Can I use the app offline?', a: 'No. It needs an internet connection to load and save your data.' },
  { q: 'Switching between two accounts on one phone', a: 'Close the app fully and reopen it before signing in as someone else.' },
];

export const team = {
  label: 'INSY7315 Work Integrated Learning · Group 2 · The Independent Institute of Education',
  members: ['AJ (Andries) Hennings', 'Hayden Naicker', 'Kendal Lourens', 'Bradley Appenah'],
};
