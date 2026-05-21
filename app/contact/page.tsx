import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ironclad Construction. Request a free quote, ask about our services, or speak with a project manager. We respond within 1 business day.',
};

const offices = [
  { city: 'Metro City HQ', address: '789 Steel Avenue, Metro City, MC 10001', phone: '+1 (800) 555-0100' },
  { city: 'Northport Office', address: '45 Harbor Blvd, Northport, MC 20045', phone: '+1 (800) 555-0101' },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.pageHeader} aria-label="Contact header">
        <div className={styles.pageHeaderContent}>
          <p className={styles.eyebrow}>Get in Touch</p>
          <h1>Start Your Project Today</h1>
          <p className={styles.subtitle}>Free quotes, fast responses. Let&apos;s talk about what we can build together.</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`} aria-label="Contact">
        <div className="container">
          <div className={styles.grid}>
            <aside className={styles.infoPanel}>
              <h2>Contact Details</h2>
              <div className={styles.infoBar} />

              {offices.map(({ city, address, phone }) => (
                <div key={city} className={styles.office}>
                  <p className={styles.officeCity}>{city}</p>
                  <p>{address}</p>
                  <p>{phone}</p>
                </div>
              ))}

              <div className={styles.officeExtra}>
                <p className={styles.officeCity}>Email</p>
                <p>info@ironcladconstruction.com</p>
              </div>

              <div className={styles.officeExtra}>
                <p className={styles.officeCity}>Office Hours</p>
                <p>Monday – Friday: 7:00am – 6:00pm</p>
                <p>Saturday: 8:00am – 1:00pm</p>
              </div>

              <div className={styles.mapPlaceholder} aria-label="Map placeholder">
                <span>Map Placeholder</span>
              </div>
            </aside>

            <div className={styles.formPanel}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
