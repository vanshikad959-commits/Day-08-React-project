import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import SectionHeader from './SectionHeader.jsx';
import ContactInfoCard from './ContactInfoCard.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.subject) errors.subject = 'Please choose a subject.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact({ info }) {
  // STATE FEATURE #4 – Controlled Contact Form
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [submittedName, setSubmittedName] = useState('');

  // One change handler for every input, using the input's name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear an error as soon as the user starts fixing that field
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    // Simulated API call – replace with fetch() when a backend exists
    setTimeout(() => {
      setSubmittedName(formData.name.trim().split(' ')[0]);
      setStatus('success');
      setFormData(initialForm);
    }, 1200);
  };

  const resetForm = () => setStatus('idle');

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Tell us about your project and we'll reply within one business day."
        />

        <div className="contact__grid">
          <aside className="contact__info">
            {info.map((item) => (
              <ContactInfoCard key={item.id} {...item} />
            ))}
            <div className="contact__hours">
              <p className="contact-info-card__label">Working hours</p>
              <p>Mon – Fri, 10:00 AM – 7:00 PM IST</p>
            </div>
          </aside>

          <div className="card contact__form-wrap">
            {status === 'success' ? (
              <div className="form-success" role="status">
                <FiCheckCircle className="form-success__icon" />
                <h3>Thanks, {submittedName}!</h3>
                <p>Your message has been received. Our team will get back to you shortly.</p>
                <button type="button" className="btn btn--ghost" onClick={resetForm}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className="form__group">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      className={errors.name ? 'input--error' : ''}
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                  </div>

                  <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      className={errors.email ? 'input--error' : ''}
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    className={errors.subject ? 'input--error' : ''}
                  >
                    <option value="">Select a topic</option>
                    <option value="website">New website</option>
                    <option value="migration">Static site → React migration</option>
                    <option value="mobile">Mobile app</option>
                    <option value="other">Something else</option>
                  </select>
                  {errors.subject && <span className="form__error">{errors.subject}</span>}
                </div>

                <div className="form__group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    maxLength={500}
                    placeholder="Tell us a little about your project…"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    className={errors.message ? 'input--error' : ''}
                  />
                  <div className="form__meta">
                    {errors.message ? (
                      <span className="form__error">{errors.message}</span>
                    ) : (
                      <span />
                    )}
                    <span className="form__count">{formData.message.length} / 500</span>
                  </div>
                </div>

                <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
