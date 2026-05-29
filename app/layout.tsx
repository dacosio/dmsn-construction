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
  metadataBase: new URL('https://dmsn.com'),
  title: {
    default: 'DMSN | Built to Last',
    template: '%s | DMSN',
  },
  description:
    'DMSN Trading and Construction delivers aircraft hangars, warehouses, institutional buildings, and civil infrastructure across the Philippines. PCAB-licensed with 30+ years of engineering expertise.',
  keywords: ['construction company', 'general contractor', 'aircraft hangars', 'warehouses', 'institutional buildings', 'DMSN', 'Pampanga', 'Philippines'],
  authors: [{ name: 'DMSN Trading and Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dmsn.com',
    siteName: 'DMSN',
    title: 'DMSN | Built to Last',
    description: 'PCAB-licensed construction specialists delivering hangars, warehouses, and institutional projects across the Philippines.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'DMSN project site' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMSN | Built to Last',
    description: 'PCAB-licensed construction specialists: hangars, warehouses, and institutional buildings in the Philippines.',
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
