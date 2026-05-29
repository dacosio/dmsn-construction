import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DMSN Trading and Construction, founded in 2013 by Civil Engineer Apollo B. Cosio, delivering quality aviation, industrial, and institutional construction across the Philippines.',
};

const team = [
  { name: 'Apollo B. Cosio', role: 'Director & Founder', image: '/images/team1.jpg', bio: 'A licensed Civil Engineer from Holy Angel University with 30+ years spanning Clark Air Base, the Middle East, and Iraq. Apollo founded DMSN Trading and Construction, bringing international construction standards to the Philippines.' },
  { name: 'Arch. Chalshey H. Cunanan', role: 'Senior Architect', image: '/images/team2.jpg', bio: 'Oversees architectural design and planning, translating client requirements into precise construction specifications for every project.' },
  { name: 'Cynthia Q. Capati', role: 'Materials & QC Engineer', image: '/images/team3.jpg', bio: 'Leads our 4-phase quality inspection program, from preparatory review through final inspection, ensuring all materials and workmanship meet specification.' },
];

const milestones = [
  { year: '2013', event: 'Founded DMSN Trading and Construction in Pampanga after serving as Construction Manager at Aircraft Support Industries' },
  { year: '2016', event: 'Completed first major industrial warehouse contracts at Angeles Industrial Park, Bacolor, Pampanga' },
  { year: '2020', event: 'Completed structural steel works for new Metrojet Hangar at Clark Freeport Zone' },
  { year: '2021', event: 'Completed SIA Engineering Philippines Hangar 2 Project at Clark Freeport Zone' },
  { year: '2022', event: 'Delivered New Line Maintenance Office and Warehouse at Clark International Airport Terminal 2' },
  { year: '2024', event: 'Delivered New Municipal Hall, Concepcion, Tarlac and NLEX tree trimming contract' },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="About header">
        <Image src="/images/about.jpg" alt="DMSN team on site" fill priority className={styles.headerImg} sizes="100vw" />
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <p className={styles.eyebrow}>About DMSN</p>
          <h1>Built on a Decade of Proven Delivery</h1>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`} aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <div className="section-heading">
                <h2 id="story-heading">Our Story</h2>
                <div className="bar" />
              </div>
              <p>Apollo Cosio, a licensed Civil Engineer from Holy Angel University, built his expertise over decades. His career spans structural work at Clark Air Base, pipeline engineering in Saudi Arabia and Bahrain, and quality assurance operations in Iraq and Afghanistan.</p>
              <p>Back in the Philippines, Apollo founded DMSN Trading and Construction, bringing international construction standards to hangars, warehouses, institutional buildings, and civil works across Pampanga and beyond.</p>
              <p>We don&apos;t chase volume. We build trust. Our clients, from Singapore Airlines to municipal governments, return because we deliver on every commitment.</p>
            </div>
            <div className={styles.milestones} aria-label="Company milestones">
              {milestones.map(({ year, event }) => (
                <div key={year} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{year}</span>
                  <span className={styles.milestoneEvent}>{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className="section-heading centered">
            <h2 id="values-heading">What We Stand For</h2>
            <div className="bar" />
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: '🛡️', title: 'Safety', desc: 'Stringent H&S compliance on every site. The welfare of all team members is paramount.' },
              { icon: '🔄', title: 'Consistency', desc: '4-phase inspection (Preparatory, Initial, Follow-Up, and Final) applied to every project without exception.' },
              { icon: '📐', title: 'Quality', desc: 'Random sampling, statistical methods, and non-compliance returns ensure every deliverable meets specification.' },
              { icon: '🤝', title: 'Integrity', desc: 'Fair and true in all dealings with employees, clients, vendors, and partners.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.valueCard}>
                <span className={styles.valueIcon} aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`} aria-labelledby="team-heading">
        <div className="container">
          <div className="section-heading centered">
            <h2 id="team-heading">Leadership Team</h2>
            <div className="bar" />
            <p>Experienced professionals committed to delivering quality work safely and on schedule.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map(({ name, role, image, bio }) => (
              <article key={name} className={styles.teamCard}>
                <div className={styles.teamImageWrap}>
                  <Image src={image} alt={`Portrait of ${name}`} fill className={styles.teamImg} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className={styles.teamBadge}>{role}</div>
                </div>
                <div className={styles.teamInfo}>
                  <h3>{name}</h3>
                  <p>{bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
