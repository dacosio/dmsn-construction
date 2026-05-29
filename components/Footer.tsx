import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <p className={styles.logo}>DMSN</p>
            <p className={styles.tagline}>Built to Last. Built Right.</p>
            <p className={styles.license}>License #CON-2024-00481 &nbsp;|&nbsp; Fully Insured</p>
          </div>

          <nav className={styles.col} aria-label="Company links">
            <p className={styles.colTitle}>Company</p>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Our Projects</Link>
            <Link href="/contact">Careers</Link>
          </nav>

          <nav className={styles.col} aria-label="Service links">
            <p className={styles.colTitle}>Services</p>
            <Link href="/services">Residential</Link>
            <Link href="/services">Commercial</Link>
            <Link href="/services">Industrial</Link>
            <Link href="/services">Renovation</Link>
          </nav>

          <div className={styles.col}>
            <p className={styles.colTitle}>Contact</p>
            <p>Cuayan, Angeles City, Pampanga</p>
            <p>abc_mrc@yahoo.com</p>
            <p>+63 999 360 9678</p>
            <p>Mon–Fri: 7am – 6pm</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.inner}>
          <p>&copy; {year} DMSN Trading and Construction. All rights reserved.</p>
          <p>
            Photos: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
            &nbsp;&mdash;&nbsp;
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
