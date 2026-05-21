import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Ironclad Construction — Built to Last',
  description:
    'Ironclad Construction specialises in airports, residential, warehouses, commercial buildings, roads and highways — delivering complex infrastructure with 30 years of expertise.',
};

const stats = [
  { value: '30+', label: 'Years' },
  { value: '850+', label: 'Projects' },
  { value: '12', label: 'Countries' },
  { value: '98%', label: 'On Time' },
];

const specializations = [
  { icon: '✈', title: 'Airports', desc: 'Terminals, runways, taxiways, and full airport infrastructure.' },
  { icon: '🏠', title: 'Residential', desc: 'Single-family, multi-family, and large housing developments.' },
  { icon: '🏭', title: 'Warehouses', desc: 'Distribution centres, cold storage, and logistics facilities.' },
  { icon: '🏢', title: 'Commercial', desc: 'Office towers, retail, hotels, and mixed-use developments.' },
  { icon: '🛣', title: 'Roads & Highways', desc: 'Freeways, interchanges, bridges, and urban road networks.' },
];

const featuredProjects = [
  { src: '/images/project-airport.jpg', name: 'Terminal 4 Expansion', type: 'Airport', location: 'Metro Int\'l Airport' },
  { src: '/images/project-road.jpg', name: 'Interstate 90 Widening', type: 'Highway', location: 'Northern Corridor' },
  { src: '/images/project-warehouse.jpg', name: 'Pacific Logistics Hub', type: 'Warehouse', location: 'Westport District' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Ironclad Construction',
  description: 'Infrastructure and construction specialists — airports, roads, warehouses, residential, and commercial projects.',
  url: 'https://ironcladconstruction.com',
  telephone: '+1-800-555-0100',
  email: 'info@ironcladconstruction.com',
  foundingDate: '1994',
  address: { '@type': 'PostalAddress', streetAddress: '789 Steel Avenue', addressLocality: 'Metro City', addressCountry: 'US' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className={styles.hero} aria-label="Hero">
        <Image src="/images/hero.jpg" alt="Large-scale Ironclad construction site with cranes" fill priority className={styles.heroImg} sizes="100vw" />
        <div className={styles.heroOverlay} />

        {/* Red diagonal badge */}
        <div className={styles.heroBadge} aria-hidden="true">
          <span>Est. 1994</span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Infrastructure • Civil • Commercial</p>
          <h1 className={styles.heroTitle}>We Build<br /><span>What Matters.</span></h1>
          <p className={styles.heroSub}>
            From airport runways to interstate highways — Ironclad delivers large-scale infrastructure and construction projects that stand the test of time.
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
            <p>Five sectors. One contractor. Uncompromising delivery standards across every type of project we take on.</p>
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

      {/* ── Why Ironclad — dark diagonal band ── */}
      <section className={`diagonal-both ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.whyEyebrow}>Why Ironclad</p>
              <h2 id="why-heading">Built Different.<br />Since 1994.</h2>
              <div className={styles.whyBar} />
              <p>We don't subcontract the hard parts. Every project — from a runway extension to a 40-storey tower — is managed end-to-end by our own licensed engineers, project managers, and crews.</p>
              <div className={styles.whyChecks}>
                {[
                  'Self-performing general contractor',
                  'ISO 9001 quality management',
                  'In-house structural engineering',
                  'Zero subcontractor surprises',
                  'On-time delivery guarantee',
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
              <Image src="/images/about.jpg" alt="Ironclad construction crew at work" fill className={styles.whyImg} sizes="(max-width: 768px) 100vw, 50vw" />
              <div className={styles.whyImageBadge}>
                <span className={styles.badgeNum}>850+</span>
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
