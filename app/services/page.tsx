import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Ironclad Construction specialises in airport construction, residential developments, warehouses, commercial buildings, and roads & highways across North America.',
};

const services = [
  {
    title: 'Airports',
    image: '/images/service-airport.jpg',
    alt: 'Airport terminal and runway construction',
    description:
      'We have designed and built passenger terminals, cargo facilities, runways, taxiways, and full airside infrastructure. Our airport division understands the strict regulatory and safety environment of aviation construction.',
    features: ['Passenger & cargo terminals', 'Runway and taxiway construction', 'Airside & landside infrastructure', 'ATC towers & navigational facilities', 'FAA/ICAO compliance expertise'],
  },
  {
    title: 'Residential',
    image: '/images/service-residential.jpg',
    alt: 'Residential housing development under construction',
    description:
      'From single-family custom homes to high-density housing estates, our residential division delivers quality living spaces on time. We manage every phase from site preparation through final inspection.',
    features: ['Custom single-family homes', 'Multi-unit housing developments', 'High-rise residential', 'Master-planned communities', 'Affordable housing programs'],
  },
  {
    title: 'Warehouses & Logistics',
    image: '/images/service-warehouse.jpg',
    alt: 'Large warehouse and distribution centre',
    description:
      'Modern supply chains demand facilities built for speed, scale, and efficiency. We build warehouses, distribution centres, cold storage facilities, and fulfilment hubs to exact operational specifications.',
    features: ['Distribution & fulfilment centres', 'Cold storage & refrigerated facilities', 'Cross-dock facilities', 'Automated warehouse fit-outs', 'Heavy-duty floor systems'],
  },
  {
    title: 'Commercial',
    image: '/images/service-commercial.jpg',
    alt: 'Commercial office building construction',
    description:
      'Our commercial division builds the spaces where business thrives — from landmark office towers to regional shopping centres and five-star hotels. Every project is managed with minimal disruption and maximum quality.',
    features: ['Office towers & business parks', 'Retail & shopping centres', 'Hotels & hospitality', 'Mixed-use developments', 'Data centres'],
  },
  {
    title: 'Roads & Highways',
    image: '/images/service-roads.jpg',
    alt: 'Highway and road construction equipment',
    description:
      'Our civil division has built and rehabilitated thousands of kilometres of highways, freeways, arterial roads, and urban streets. We handle full design-build contracts, including drainage, lighting, and signage.',
    features: ['Freeways & interstate highways', 'Urban road networks', 'Bridge & overpass construction', 'Intersection & interchange design', 'Road rehabilitation & resurfacing'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="Services header">
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>What We Build</p>
          <h1>Five Sectors.<br />One Standard.</h1>
          <p className={styles.subtitle}>Ironclad operates across five construction sectors — each with dedicated engineering teams, specialised equipment, and proven delivery systems.</p>
        </div>
        <div className={styles.headerSlant} aria-hidden="true" />
      </section>

      <section className={`section ${styles.servicesList}`} aria-label="Services">
        <div className="container">
          {services.map(({ title, image, alt, description, features }, index) => (
            <article
              key={title}
              className={[styles.service, index % 2 !== 0 ? styles.reverse : ''].filter(Boolean).join(' ')}
              aria-labelledby={`svc-${index}`}
            >
              <div className={styles.serviceImage}>
                <Image src={image} alt={alt} fill className={styles.serviceImg} sizes="(max-width: 768px) 100vw, 50vw" />
                <div className={styles.serviceImgOverlay} aria-hidden="true" />
              </div>
              <div className={styles.serviceContent}>
                <span className={styles.serviceNum}>0{index + 1}</span>
                <h2 id={`svc-${index}`}>{title}</h2>
                <div className={styles.bar} />
                <p className={styles.serviceDesc}>{description}</p>
                <ul className={styles.features}>
                  {features.map((f) => (
                    <li key={f}><span className={styles.dot} aria-hidden="true" />{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-red">Get a Quote</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={`section diagonal-top ${styles.process}`} aria-labelledby="process-heading">
        <div className="container">
          <div className="section-heading centered">
            <h2 id="process-heading">How We Deliver</h2>
            <div className="bar" />
            <p>A disciplined six-phase delivery model applied to every project, regardless of size.</p>
          </div>
          <div className={styles.steps}>
            {[
              { n: '01', title: 'Consultation', desc: 'We meet to understand scope, constraints, and objectives.' },
              { n: '02', title: 'Design & Planning', desc: 'Engineering, permits, scheduling, and risk assessment.' },
              { n: '03', title: 'Procurement', desc: 'Materials, equipment, and specialist subcontractors secured.' },
              { n: '04', title: 'Construction', desc: 'Self-performing crews under daily site management.' },
              { n: '05', title: 'Quality Control', desc: 'Continuous inspection against specification at every milestone.' },
              { n: '06', title: 'Handover', desc: 'Final walk-through, certification, and client sign-off.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className={styles.step}>
                <span className={styles.stepNum}>{n}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
