import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's Talk.
            <span> Let's Get You Sharp.</span>
          </h1>

          <p>
            Have a question, need help choosing a service, or ready to book your
            next appointment? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="section-eyebrow">CONTACT NOIR & BLADE</span>

            <h2>
              We're here when
              <span> you need us.</span>
            </h2>

            <p>
              Reach out to us directly or send us a message using the form
              below.
            </p>
          </div>

          <div className="contact-info-grid">
            <article className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={23} />
              </div>

              <div>
                <span>VISIT US</span>
                <h3>Our Location</h3>
                <p>Cape Town, South Africa</p>
                <p className="contact-info-muted">
                  Exact address available when booking.
                </p>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={23} />
              </div>

              <div>
                <span>CALL US</span>
                <h3>+27 21 555 0198</h3>
                <p>Speak directly with our team.</p>
                <a href="tel:+27215550198">
                  Call the barbershop
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={23} />
              </div>

              <div>
                <span>EMAIL US</span>
                <h3>hello@noirandblade.co.za</h3>
                <p>Questions, feedback or general enquiries.</p>
                <a href="mailto:hello@noirandblade.co.za">
                  Send an email
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">
                <Clock3 size={23} />
              </div>

              <div>
                <span>OPENING HOURS</span>
                <h3>When we're here</h3>

                <div className="contact-hours">
                  <div>
                    <span>Mon – Fri</span>
                    <strong>09:00 – 18:00</strong>
                  </div>

                  <div>
                    <span>Saturday</span>
                    <strong>09:00 – 16:00</strong>
                  </div>

                  <div>
                    <span>Sunday</span>
                    <strong>Closed</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MESSAGE + LOCATION */}
      <section className="contact-main section">
        <div className="container contact-main-grid">
          {/* FORM */}
          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span className="section-eyebrow">SEND A MESSAGE</span>

              <h2>
                How can we
                <span> help?</span>
              </h2>

              <p>
                Fill in the form and our team will get back to you as soon as
                possible.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name</label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number</label>

                <input id="contact-phone" type="tel" placeholder="+27 ..." />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <select id="contact-subject" defaultValue="" required>
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="booking">Booking enquiry</option>
                  <option value="services">Services</option>
                  <option value="general">General enquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>

                <textarea
                  id="contact-message"
                  rows="6"
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-button">
                Send Message
                <Send size={17} />
              </button>
            </form>
          </div>

          {/* LOCATION */}
          <div className="contact-location">
            <div className="contact-location-card">
              <div className="contact-location-header">
                <span className="section-eyebrow">FIND US</span>

                <h2>
                  Visit the
                  <span> barbershop.</span>
                </h2>

                <p>Come in, take a seat, and let us take care of the rest.</p>
              </div>

              <div className="contact-map">
                <div className="contact-map-content">
                  <MapPin size={32} />

                  <strong>NOIR & BLADE</strong>

                  <span>Cape Town, South Africa</span>
                </div>
              </div>

              <div className="contact-location-details">
                <div>
                  <MapPin size={18} />

                  <span>
                    Cape Town
                    <small>South Africa</small>
                  </span>
                </div>

                <div>
                  <Clock3 size={18} />

                  <span>
                    Mon – Sat
                    <small>09:00 – 18:00</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="contact-final-cta">
        <div className="container">
          <span className="section-eyebrow">READY FOR YOUR NEXT LOOK?</span>

          <h2>
            Skip the message.
            <span> Book your cut.</span>
          </h2>

          <p>
            Choose your service, barber, date and time in just a few clicks.
          </p>

          <Link to="/booking" className="contact-book-button">
            Book an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;
