import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse the DMSN portfolio: airport terminals, highway corridors, warehouse complexes, residential communities, and commercial towers.',
};

const projects = [
  { src: '/images/project-airport.jpg', name: 'Metrojet Hangar', type: 'Hangar', location: 'Clark Freeport Zone, Pampanga', year: '2020', span: 'wide' },
  { src: '/images/project-warehouse.jpg', name: 'AIPI Kaifeng Warehouse', type: 'Warehouse', location: 'Angeles Industrial Park, Bacolor', year: '2017' },
  { src: '/images/project-commercial.jpg', name: 'New Municipal Hall', type: 'Institutional', location: 'Concepcion, Tarlac', year: '2024', span: 'tall' },
  { src: '/images/project-road.jpg', name: 'SIA Engineering Hangar 2', type: 'Hangar', location: 'Clark Freeport Zone, Pampanga', year: '2021' },
  { src: '/images/project-residential.jpg', name: 'D&A Warehouse', type: 'Warehouse', location: 'Angeles Industrial Park, Bacolor', year: '2016' },
  { src: '/images/project-bridge.jpg', name: 'NLEX Tree Trimming', type: 'Civil', location: 'North Luzon Expressway & SCTEX', year: '2024' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="Projects header">
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>Our Portfolio</p>
          <h1>50+ Projects.<br />Every Sector.</h1>
          <p className={styles.subtitle}>Completed work spanning hangars, warehouses, institutional buildings, aviation facilities, and civil infrastructure across Pampanga and beyond.</p>
        </div>
        <div className={styles.headerSlant} aria-hidden="true" />
      </section>

      <section className={`section ${styles.portfolio}`} aria-label="Project portfolio">
        <div className="container">
          <div className={styles.grid}>
            {projects.map(({ src, name, type, location, year, span }) => (
              <article
                key={name}
                className={[styles.card, span === 'wide' ? styles.wide : '', span === 'tall' ? styles.tall : ''].filter(Boolean).join(' ')}
                aria-label={name}
              >
                <div className={styles.imageWrap}>
                  <Image src={src} alt={name} fill className={styles.image} sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className={styles.overlay}>
                    <span className={styles.type}>{type}</span>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.meta}>{location} &mdash; {year}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner} aria-label="Start your project">
        <div className={styles.ctaInner}>
          <div>
            <h2>Have a Project in Mind?</h2>
            <p>Our estimating team responds within 24 hours.</p>
          </div>
          <a href="/contact" className="btn btn-red">Get a Free Quote</a>
        </div>
      </section>
    </>
  );
}
