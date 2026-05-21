import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ironclad Construction — 30 years of building excellence, our experienced leadership team, and the values that drive every project we deliver.',
};

const team = [
  { name: 'Marcus Webb', role: 'CEO & Founder', image: '/images/team1.jpg', bio: 'A third-generation builder with 35 years in the field, Marcus founded Ironclad with a single rule: never cut a corner.' },
  { name: 'Sandra Okoye', role: 'VP of Operations', image: '/images/team2.jpg', bio: 'Sandra oversees delivery across all active sites, ensuring every project stays on schedule and within budget.' },
  { name: 'David Chiang', role: 'Chief Engineer', image: '/images/team3.jpg', bio: 'A licensed structural engineer, David leads our technical team and signs off on every design before ground breaks.' },
];

const milestones = [
  { year: '1994', event: 'Ironclad founded in Metro City with a crew of 8' },
  { year: '2001', event: 'Completed first commercial tower project — Westfield Plaza' },
  { year: '2008', event: 'Expanded to industrial sector, first warehouse contract' },
  { year: '2015', event: 'ISO 9001 certification achieved; team reaches 100 members' },
  { year: '2020', event: 'Launched green building division, LEED-certified projects' },
  { year: '2024', event: '850+ projects completed; 30th anniversary celebrated' },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="About header">
        <Image src="/images/about.jpg" alt="Ironclad Construction team on site" fill priority className={styles.headerImg} sizes="100vw" />
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <p className={styles.eyebrow}>About Ironclad</p>
          <h1>30 Years of Building Excellence</h1>
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
              <p>Marcus Webb started Ironclad Construction in 1994 with a pickup truck, eight workers, and a conviction that the industry needed a contractor who put craftsmanship before shortcuts.</p>
              <p>Three decades later, Ironclad has completed over 850 projects across residential, commercial, and industrial sectors — never missing a material delivery deadline and never once walking away from a commitment.</p>
              <p>We don&apos;t chase volume. We build relationships. Most of our clients have worked with us on three or more projects.</p>
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
              { icon: '🛡️', title: 'Safety First', desc: 'Zero-compromise safety culture on every site, every day.' },
              { icon: '📐', title: 'Precision', desc: 'Every measurement, every material, every deadline held to standard.' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, transparent progress, no surprises.' },
              { icon: '🌱', title: 'Sustainability', desc: 'LEED-certified capabilities and green building practices across all projects.' },
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
            <p>Experienced leaders who have built their careers by building great things.</p>
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
