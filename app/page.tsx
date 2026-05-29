import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'DMSN | Built to Last',
  description:
    'DMSN Trading and Construction specialises in aircraft hangars, warehouses, institutional buildings, and civil infrastructure. PCAB-licensed contractor with 13+ years of proven delivery in the Philippines.',
};

const stats = [
  { value: '13+', label: 'Years in Business' },
  { value: '50+', label: 'Projects' },
  { value: '100%', label: 'PCAB Licensed' },
];

const specializations = [
  { icon: '✈', title: 'Aviation & Hangars', desc: 'Aircraft hangars, roofing, cladding, steel structures, and aviation support facilities.' },
  { icon: '🏭', title: 'Warehouses', desc: 'Industrial warehouses, logistics facilities, cistern tanks, and pump rooms.' },
  { icon: '🏛', title: 'Institutional', desc: 'Municipal halls, government buildings, and institutional structures.' },
  { icon: '🏠', title: 'Residential', desc: 'Private homes, housing developments, and community projects.' },
  { icon: '🔧', title: 'Civil & Infrastructure', desc: 'Water supply systems, access structures, comfort facilities, and site works.' },
];

const featuredProjects = [
  { src: '/images/project-airport.jpg', name: 'Metrojet Hangar', type: 'Hangar', location: 'Clark Freeport Zone, Pampanga' },
  { src: '/images/project-warehouse.jpg', name: 'AIPI Kaifeng Warehouse', type: 'Warehouse', location: 'Angeles Industrial Park, Bacolor' },
  { src: '/images/project-commercial.jpg', name: 'New Municipal Hall', type: 'Institutional', location: 'Concepcion, Tarlac' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'DMSN Trading and Construction',
  description: 'PCAB-licensed construction specialists: aircraft hangars, warehouses, institutional buildings, and civil infrastructure in the Philippines.',
  url: 'https://dmsn.com',
  telephone: '+63-999-360-9678',
  email: 'abc_mrc@yahoo.com',
  foundingDate: '2013',
  address: { '@type': 'PostalAddress', streetAddress: 'Block 20 Lot 25 Phase 3 Savannah Greenplains', addressLocality: 'Cuayan, Angeles City', addressRegion: 'Pampanga', postalCode: '2009', addressCountry: 'PH' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className={styles.hero} aria-label="Hero">
        <Image src="/images/hero.jpg" alt="Large-scale DMSN construction site with cranes" fill priority className={styles.heroImg} sizes="100vw" data-credit="Photo: Scott Blake / Unsplash" />
        <div className={styles.heroOverlay} />

        {/* Red diagonal badge */}
        <div className={styles.heroBadge} aria-hidden="true">
          <span>Est. 2013</span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Aviation • Industrial • Civil</p>
          <h1 className={styles.heroTitle}>We Build<br /><span>What Matters.</span></h1>
          <p className={styles.heroSub}>
            From aircraft hangars to industrial warehouses, DMSN delivers quality construction projects across aviation, industrial, and civil sectors throughout the Philippines.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/projects" className="btn btn-red">Our Projects</Link>
            <Link href="/contact" className="btn btn-outline-white">Get a Quote</Link>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className={styles.heroStats} aria-label="Key statistics">
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.heroStat}>
              <span className={styles.heroStatValue}>{value}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Specializations ── */}
      <section className={`section diagonal-top ${styles.specSection}`} aria-labelledby="spec-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="spec-heading">Our Specializations</h2>
            <div className="bar" />
            <p>Five sectors. One contractor. Uncompromising safety, consistency, and quality across every project we take on.</p>
          </div>
          <div className={styles.specGrid}>
            {specializations.map(({ icon, title, desc }) => (
              <div key={title} className={styles.specCard}>
                <div className={styles.specIconRow}>
                  <span className={styles.specIcon} aria-hidden="true">{icon}</span>
                  <div className={styles.specLine} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link href="/services" className={styles.specLink}>View Projects →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DMSN - dark diagonal band ── */}
      <section className={`diagonal-both ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.whyEyebrow}>Why DMSN</p>
              <h2 id="why-heading">Built Different.<br />Since 2013.</h2>
              <div className={styles.whyBar} />
              <p>We don't cut corners. Every project, from a hangar steel structure to a cistern tank, is managed end-to-end by our own licensed engineers, project managers, and crews.</p>
              <div className={styles.whyChecks}>
                {[
                  'PCAB-licensed general contractor',
                  '4-phase quality inspection system',
                  'Licensed civil & structural engineering',
                  'Aviation and industrial specialists',
                  'On-time delivery commitment',
                ].map((item) => (
                  <div key={item} className={styles.whyCheck}>
                    <span className={styles.checkMark} aria-hidden="true">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-red">Our Story</Link>
            </div>
            <div className={styles.whyImageWrap}>
              <Image src="/images/why-dmsn.jpg" alt="DMSN engineers reviewing plans on site" fill className={styles.whyImg} sizes="(max-width: 768px) 100vw, 50vw" />
              <div className={styles.whyImageBadge}>
                <span className={styles.badgeNum}>50+</span>
                <span className={styles.badgeLabel}>Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className={`section ${styles.projectsSection}`} aria-labelledby="projects-heading">
        <div className="container">
          <div className={styles.projectsHeader}>
            <div className="section-heading">
              <h2 id="projects-heading">Featured Projects</h2>
              <div className="bar" />
              <p>A snapshot of recent work across our core sectors.</p>
            </div>
            <Link href="/projects" className={`btn btn-outline-red ${styles.allProjectsBtn}`}>All Projects</Link>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map(({ src, name, type, location }) => (
              <div key={name} className={styles.projectCard}>
                <div className={styles.projectImg}>
                  <Image src={src} alt={name} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectType}>{type}</span>
                  <h3>{name}</h3>
                  <p>{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner} aria-label="Call to action">
        <div className={styles.ctaBannerInner}>
          <div>
            <h2>Ready to Break Ground?</h2>
            <p>Get a free, no-obligation estimate within 48 hours.</p>
          </div>
          <Link href="/contact" className="btn btn-red">Request a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
