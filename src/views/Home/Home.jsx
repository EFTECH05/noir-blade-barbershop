import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scissors,
  ShieldCheck,
  Sparkles,
  Clock3,
} from "lucide-react";

import salonImage from "../../assets/salon.png";
import salonImageTwo from "../../assets/salon1.png";

function Home() {
  return (
    <div className="home">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.92) 0%,
            rgba(8, 8, 8, 0.72) 45%,
            rgba(8, 8, 8, 0.35) 100%
          ), url(${salonImage})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-eyebrow">CAPE TOWN'S MODERN BARBERSHOP</p>

            <h1>
              Your Style.
              <br />
              <span>Our Precision.</span>
            </h1>

            <p className="hero-description">
              Premium cuts, sharp grooming and an experience designed around
              you.
            </p>

            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-primary">
                Book an Appointment
                <ArrowRight size={18} />
              </Link>

              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hero-meta">
              <span>
                <span className="gold-dot"></span>
                Open today
              </span>

              <span>Mon – Fri 09:00 – 19:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="section intro-section">
        <div className="section-container intro-grid">
          <div className="section-heading">
            <p className="section-eyebrow">THE NOIR & BLADE EXPERIENCE</p>

            <h2>
              More than a haircut.
              <br />
              <span>It's your signature.</span>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              At NOIR & BLADE, we believe grooming is about more than looking
              good. It's about confidence, precision and taking a moment for
              yourself.
            </p>

            <p>
              Our barbers combine classic techniques with modern styling to
              create a look that feels completely yours.
            </p>

            <Link to="/about" className="text-link">
              Discover our story
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
          ===================================================== */}

      <section className="features-section">
        <div className="section-container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Scissors size={25} />
              </div>

              <h3>Precision Cuts</h3>

              <p>
                Clean fades, classic cuts and modern styles tailored to your
                look.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={25} />
              </div>

              <h3>Premium Grooming</h3>

              <p>
                From beard shaping to hot towel treatments, every detail
                matters.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={25} />
              </div>

              <h3>Expert Barbers</h3>

              <p>
                Skilled professionals who understand style, detail and personal
                expression.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock3 size={25} />
              </div>

              <h3>Easy Booking</h3>

              <p>
                Choose your service, barber and time in just a few simple steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SALON EXPERIENCE
          ===================================================== */}

      <section className="section salon-section">
        <div className="section-container salon-grid">
          <div className="salon-images">
            <div className="salon-image-large">
              <img src={salonImage} alt="NOIR & BLADE barber shop interior" />
            </div>

            <div className="salon-image-small">
              <img src={salonImageTwo} alt="NOIR & BLADE grooming experience" />
            </div>
          </div>

          <div className="salon-content">
            <p className="section-eyebrow">THE SPACE</p>

            <h2>
              Step in.
              <br />
              <span>Slow down.</span>
              <br />
              Leave sharper.
            </h2>

            <p>
              A refined space where traditional barbering meets contemporary
              design. Sit back, relax and let our team take care of the details.
            </p>

            <div className="salon-stat">
              <strong>01</strong>
              <div>
                <h4>Personalised Service</h4>
                <p>
                  Every appointment starts with understanding exactly what you
                  want.
                </p>
              </div>
            </div>

            <div className="salon-stat">
              <strong>02</strong>
              <div>
                <h4>Attention to Detail</h4>
                <p>
                  From the first clip to the final finish, precision comes
                  first.
                </p>
              </div>
            </div>

            <Link to="/booking" className="text-link">
              Book your experience
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES PREVIEW
          ===================================================== */}

      <section className="section services-preview">
        <div className="section-container">
          <div className="section-header-centered">
            <p className="section-eyebrow">OUR SERVICES</p>

            <h2>
              Crafted for your
              <br />
              <span>signature style.</span>
            </h2>

            <p>
              Simple, refined grooming services designed for everyday confidence
              and special occasions.
            </p>
          </div>

          <div className="service-preview-grid">
            <div className="service-preview-card">
              <span>01</span>

              <h3>Classic Cut</h3>

              <p>
                A timeless haircut finished with precision and attention to
                detail.
              </p>

              <strong>From R180</strong>
            </div>

            <div className="service-preview-card featured">
              <span>02</span>

              <h3>Fade & Style</h3>

              <p>
                A modern fade tailored to your face shape, style and
                personality.
              </p>

              <strong>From R220</strong>
            </div>

            <div className="service-preview-card">
              <span>03</span>

              <h3>Beard Grooming</h3>

              <p>
                Professional beard shaping, detailing and finishing for a clean
                look.
              </p>

              <strong>From R150</strong>
            </div>
          </div>

          <div className="center-button">
            <Link to="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="final-cta">
        <div className="final-cta-content">
          <p className="section-eyebrow">READY WHEN YOU ARE</p>

          <h2>
            Look sharp.
            <br />
            <span>Feel confident.</span>
          </h2>

          <p>Your next great look is only an appointment away.</p>

          <Link to="/booking" className="btn btn-primary">
            Book Your Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
