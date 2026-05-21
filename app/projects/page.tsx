import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse the Ironclad Construction portfolio — airport terminals, highway corridors, warehouse complexes, residential communities, and commercial towers.',
};

const projects = [
  { src: '/images/project-airport.jpg', name: 'Terminal 4 Expansion', type: 'Airport', location: 'Metro International Airport', year: '2024', span: 'wide' },
  { src: '/images/project-road.jpg', name: 'Interstate 90 Widening', type: 'Highway', location: 'Northern Corridor, 142km', year: '2023' },
  { src: '/images/project-warehouse.jpg', name: 'Pacific Logistics Hub', type: 'Warehouse', location: 'Westport District', year: '2023' },
  { src: '/images/project-commercial.jpg', name: 'Harborview Tower', type: 'Commercial', location: 'Downtown Metro City', year: '2022', span: 'tall' },
  { src: '/images/project-residential.jpg', name: 'Oakridge Communities', type: 'Residential', location: 'Eastside, Metro City', year: '2022' },
  { src: '/images/project-bridge.jpg', name: 'Northspan Bridge', type: 'Highway', location: 'Northport Crossing', year: '2021' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="Projects header">
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>Our Portfolio</p>
          <h1>850+ Projects.<br />Every Sector.</h1>
          <p className={styles.subtitle}>Recent work spanning airports, highways, warehouses, commercial towers, and residential communities.</p>
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
