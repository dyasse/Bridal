import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pearl Cloud Clutch Masterclass | dyasse shop',
  description:
    'Luxury DIY Patterns for makers who demand structural integrity. Learn the Right-Angle Weave system to craft a no-sagging Pearl Cloud Clutch.',
  keywords: [
    'Luxury DIY Patterns',
    'Pearl Cloud Clutch Masterclass',
    'Right-Angle Weave',
    'No-Sagging Clutch Pattern',
    'dyasse shop',
  ],
  openGraph: {
    title: 'Pearl Cloud Clutch Masterclass | dyasse shop',
    description:
      '12 hours of craftsmanship distilled into a conversion-focused masterclass PDF. Build a luxury clutch with no-sagging architecture.',
    type: 'website',
    url: 'https://dyasse.shop',
    siteName: 'dyasse shop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearl Cloud Clutch Masterclass | dyasse shop',
    description:
      'Master structural integrity with a luxury DIY pattern built for a true no-floppy finish.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-champagne-charcoal antialiased">{children}</body>
    </html>
  );
}
