'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success} role="alert">
        <span className={styles.successIcon} aria-hidden="true">✔</span>
        <h2>Quote Request Received</h2>
        <p>Thank you! A project manager will contact you within 1 business day to discuss your project.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <h2>Request a Free Quote</h2>
      <div className={styles.formBar} />

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
            className={[styles.input, errors.name ? styles.inputError : ''].filter(Boolean).join(' ')}
            placeholder="John Smith" autoComplete="name" aria-required="true" />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
            className={[styles.input, errors.email ? styles.inputError : ''].filter(Boolean).join(' ')}
            placeholder="you@company.com" autoComplete="email" aria-required="true" />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            className={styles.input} placeholder="+1 (000) 000-0000" autoComplete="tel" />
        </div>
        <div className={styles.field}>
          <label htmlFor="service" className={styles.label}>Service Type</label>
          <select id="service" name="service" value={form.service} onChange={handleChange} className={styles.input}>
            <option value="">Select a service…</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="renovation">Renovation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Project Details *</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
          className={[styles.input, styles.textarea, errors.message ? styles.inputError : ''].filter(Boolean).join(' ')}
          placeholder="Describe your project, location, and estimated timeline…" aria-required="true" />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={`btn btn-red ${styles.submit}`}>Submit Quote Request</button>
    </form>
  );
}
