import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ironcladconstruction.com'),
  title: {
    default: 'Ironclad Construction — Built to Last',
    template: '%s | Ironclad Construction',
  },
  description:
    'Ironclad Construction delivers residential, commercial, and industrial building projects with 30 years of expertise, on time and on budget.',
  keywords: ['construction company', 'general contractor', 'residential construction', 'commercial construction', 'Ironclad Construction'],
  authors: [{ name: 'Ironclad Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ironcladconstruction.com',
    siteName: 'Ironclad Construction',
    title: 'Ironclad Construction — Built to Last',
    description: 'Delivering residential, commercial, and industrial building projects with 30 years of expertise.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Ironclad Construction project site' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ironclad Construction — Built to Last',
    description: 'Delivering quality construction projects for 30 years.',
    images: ['/images/hero.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
