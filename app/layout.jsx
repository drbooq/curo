import '../src/styles.css';

export const metadata = { title: 'Curo House — Care that comes home', description: 'Discover doctors, medicines, lab tests and nearby care with Curo House.', icons: { icon: '/curo-house-favicon-hq.svg', shortcut: '/curo-house-favicon-hq.svg', apple: '/curo-house-favicon.png' } };

export const viewport = { themeColor: '#351071' };

export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
