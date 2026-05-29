'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={[styles.header, scrolled || !isHome ? styles.solid : ''].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="DMSN home">
          <span className={styles.logoIcon}>⬛</span>
          <span>DMSN<span className={styles.logoAccent}></span></span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[styles.link, pathname === href ? styles.active : ''].filter(Boolean).join(' ')}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className={styles.ctaBtn}>Get a Quote</Link>
        </nav>

        <button
          className={[styles.burger, menuOpen ? styles.burgerActive : ''].filter(Boolean).join(' ')}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Always in DOM - CSS handles the transition */}
      <nav
        className={[styles.mobileNav, menuOpen ? styles.mobileNavOpen : ''].filter(Boolean).join(' ')}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={[styles.mobileLink, pathname === href ? styles.mobileActive : ''].filter(Boolean).join(' ')}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={styles.mobileCta}
          tabIndex={menuOpen ? 0 : -1}
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
