
/**
 * @purpose Contact page — form for reaching John Angelo Cabalfin directly.
 */

import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div className="desktop">

      {/* ── Header ── */}
      <Header />

      {/* ── Contact Form Section ── */}
      <section className="contact-page-section">
        <div className="contact-page-card">
          <div className="contact-page-header">
            <h1 className="contact-page-title">Let&rsquo;s Work Together</h1>
            <hr className="divider-line" />
            <p className="contact-page-subtitle">
              Have a project in mind or just want to connect? Send me a message.
            </p>
          </div>

          <form className="contact-form" action="mailto:gelcabalfin@gmail.com" method="GET">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="What is this about?"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="body"
                className="form-textarea"
                placeholder="Tell me about your project or idea..."
                rows={6}
                required
              />
            </div>
            <button type="submit" className="btn-primary form-submit">
              Send Message
            </button>
          </form>
        </div>

        {/* ── Direct contact details ── */}
        <div className="contact-details-row">
          <div className="contact-detail-item">
            <span className="contact-detail-label">Location</span>
            <span className="contact-detail">Iloilo, Philippines</span>
          </div>
          <div className="contact-detail-item">
            <span className="contact-detail-label">Email</span>
            <a href="mailto:gelcabalfin@gmail.com" className="contact-detail">
              gelcabalfin@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="contact-section" style={{ paddingTop: "32px" }}>
        <p className="contact-copyright">&copy; John Angelo Cabalfin 2026</p>
      </footer>

    </div>
  );
}