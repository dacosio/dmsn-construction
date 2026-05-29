import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'DMSN specialises in aircraft hangars, industrial warehouses, institutional buildings, residential construction, and civil infrastructure across Pampanga and the Philippines.',
};

const services = [
  {
    title: 'Aviation & Hangars',
    image: '/images/service-airport.jpg',
    alt: 'Aircraft hangar steel structure under construction',
    description:
      'DMSN has constructed and retrofitted aircraft hangars and aviation support facilities across Clark Freeport Zone. Projects include full structural steel works, roofing, cladding, gutters, purlins, and interior finishes for clients including Metrojet and SIA Engineering Philippines.',
    features: ['Structural steel hangar construction', 'Roofing and wall cladding', 'Purlins, girts, and support frames', 'Gutter installation and leak elimination', 'Interior finishes and partitions'],
  },
  {
    title: 'Warehouses & Industrial',
    image: '/images/service-warehouse.jpg',
    alt: 'Large industrial warehouse under construction',
    description:
      'We build industrial warehouses and logistics facilities to exact specifications, including full civil and structural works. Completed projects include multiple warehouses at Angeles Industrial Park in Bacolor, Pampanga, with cistern tanks, pump rooms, and water supply systems.',
    features: ['Industrial warehouse construction', 'Cistern tank and pump room construction', 'Water supply system installation', 'Foundation and structural works', 'Site preparation and civil works'],
  },
  {
    title: 'Institutional Buildings',
    image: '/images/service-commercial.jpg',
    alt: 'Multi-storey institutional building under construction',
    description:
      'Our team delivers government and institutional structures from the ground up. Completed projects include the 2-storey New Municipal Hall of Concepcion, Tarlac, and airport terminal comfort facilities at Clark International Airport.',
    features: ['Municipal halls and government buildings', 'Structural steel from ground up', 'Elevator frames and steel supports', 'Comfort rooms and auxiliary facilities', 'Tree trimming and site preparation'],
  },
  {
    title: 'Residential',
    image: '/images/service-residential.jpg',
    alt: 'Residential house under construction',
    description:
      'From private homes in Pampanga to housing developments, our residential division delivers quality living spaces. We manage every phase from site preparation through final handover.',
    features: ['Custom private homes', 'Housing development projects', 'Site preparation and earthworks', 'Structural and civil works', 'End-to-end project management'],
  },
  {
    title: 'Civil & Infrastructure',
    image: '/images/service-roads.jpg',
    alt: 'Civil infrastructure and site works',
    description:
      'Our civil works capability covers water supply systems, access structures, access stairs, and site infrastructure. We have delivered water supply installations in Barangay Mancatian, Porac, and tree trimming along the NLEX and SCTEX corridors.',
    features: ['Water supply system construction', 'Access stair fabrication & installation', 'Tree height reduction and trimming', 'Slope protection and boulder supply', 'Site infrastructure works'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="Services header">
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>What We Build</p>
          <h1>Five Sectors.<br />One Standard.</h1>
          <p className={styles.subtitle}>DMSN operates across five construction sectors (aviation, industrial, institutional, residential, and civil), each with dedicated engineering teams and proven delivery systems.</p>
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
