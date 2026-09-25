import { Link } from "react-router-dom";
import { ArrowRight, Check, Scissors, Sparkles, UserRound } from "lucide-react";

const serviceCategories = [
  {
    id: "hair",
    eyebrow: "01 — Hair",
    title: "Precision Cuts",
    description:
      "Sharp, personalised cuts designed around your face shape, style and everyday look.",
    services: [
      {
        name: "Classic Cut",
        description: "A clean, timeless haircut finished with precision.",
        price: "R180",
        duration: "45 min",
      },
      {
        name: "Fade & Style",
        description: "A detailed fade with styling and a polished finish.",
        price: "R220",
        duration: "60 min",
        featured: true,
      },
      {
        name: "Skin Fade",
        description: "Ultra-clean skin fade with seamless blending.",
        price: "R240",
        duration: "60 min",
      },
      {
        name: "Kids Cut",
        description: "A comfortable, stylish cut for younger clients.",
        price: "R150",
        duration: "35 min",
      },
    ],
  },
  {
    id: "grooming",
    eyebrow: "02 — Grooming",
    title: "Beard & Grooming",
    description:
      "Refined grooming services to keep every detail looking intentional.",
    services: [
      {
        name: "Beard Trim",
        description: "Shape, trim and define your beard with precision.",
        price: "R150",
        duration: "30 min",
      },
      {
        name: "Beard Sculpt",
        description: "Detailed beard shaping with hot towel finishing.",
        price: "R190",
        duration: "40 min",
        featured: true,
      },
      {
        name: "Hot Towel Shave",
        description: "Traditional close shave with a relaxing hot towel.",
        price: "R180",
        duration: "35 min",
      },
      {
        name: "Head Shave",
        description: "Smooth, clean head shave with premium finishing.",
        price: "R170",
        duration: "30 min",
      },
    ],
  },
  {
    id: "signature",
    eyebrow: "03 — Signature",
    title: "The NOIR Experience",
    description:
      "Our complete grooming experience for clients who want the full treatment.",
    services: [
      {
        name: "The Gentleman",
        description: "Haircut, beard trim, hot towel and premium styling.",
        price: "R350",
        duration: "90 min",
      },
      {
        name: "The Executive",
        description:
          "Precision haircut, beard sculpt, hot towel and facial finish.",
        price: "R420",
        duration: "100 min",
        featured: true,
      },
      {
        name: "The Complete",
        description:
          "Full grooming experience with haircut, shave and beard treatment.",
        price: "R480",
        duration: "120 min",
      },
    ],
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* PAGE HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            <p className="section-eyebrow">Our Services</p>

            <h1>
              Crafted with
              <span> Precision.</span>
            </h1>

            <p className="services-hero-description">
              From timeless cuts to complete grooming experiences, every service
              at NOIR & BLADE is designed around precision, comfort and your
              personal style.
            </p>

            <div className="services-hero-meta">
              <span>
                <Scissors size={16} />
                Precision grooming
              </span>

              <span>•</span>

              <span>Professional barbers</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section services-intro">
        <div className="section-container">
          <div className="services-intro-grid">
            <div>
              <p className="section-eyebrow">The NOIR Standard</p>

              <h2>
                Your look deserves
                <span> attention.</span>
              </h2>
            </div>

            <div className="services-intro-copy">
              <p>
                We believe a great haircut is more than simply taking length
                off. It is about understanding your style, respecting the
                details and leaving you feeling confident.
              </p>

              <p>
                Every appointment is performed with professional tools, quality
                products and a focus on precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="services-list-section">
        <div className="section-container">
          {serviceCategories.map((category) => (
            <div className="service-category" key={category.id}>
              <div className="service-category-header">
                <div>
                  <p className="section-eyebrow">{category.eyebrow}</p>

                  <h2>{category.title}</h2>
                </div>

                <p>{category.description}</p>
              </div>

              <div className="services-grid">
                {category.services.map((service) => (
                  <article
                    className={`service-card ${
                      service.featured ? "service-card-featured" : ""
                    }`}
                    key={service.name}
                  >
                    {service.featured && (
                      <div className="service-card-badge">
                        <Sparkles size={13} />
                        Most Popular
                      </div>
                    )}

                    <div className="service-card-top">
                      <div className="service-card-icon">
                        <Scissors size={21} />
                      </div>

                      <span className="service-duration">
                        {service.duration}
                      </span>
                    </div>

                    <div className="service-card-content">
                      <h3>{service.name}</h3>

                      <p>{service.description}</p>
                    </div>

                    <div className="service-card-bottom">
                      <div>
                        <span>From</span>
                        <strong>{service.price}</strong>
                      </div>

                      <Link to="/booking" className="service-book-link">
                        Book
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section included-section">
        <div className="section-container">
          <div className="included-grid">
            <div className="included-content">
              <p className="section-eyebrow">Every Appointment</p>

              <h2>
                More than a<span> haircut.</span>
              </h2>

              <p>
                Whether you're coming in for a quick trim or the full NOIR
                experience, we focus on making every appointment comfortable and
                worthwhile.
              </p>

              <Link to="/booking" className="btn btn-primary">
                Book Your Appointment
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="included-list">
              <div className="included-item">
                <div className="included-icon">
                  <Check size={18} />
                </div>

                <div>
                  <h3>Professional Consultation</h3>
                  <p>We discuss your preferred style before we begin.</p>
                </div>
              </div>

              <div className="included-item">
                <div className="included-icon">
                  <Check size={18} />
                </div>

                <div>
                  <h3>Precision Finish</h3>
                  <p>
                    Attention to detail from the first cut to the final styling.
                  </p>
                </div>
              </div>

              <div className="included-item">
                <div className="included-icon">
                  <Check size={18} />
                </div>

                <div>
                  <h3>Premium Products</h3>
                  <p>Quality grooming products selected for a clean finish.</p>
                </div>
              </div>

              <div className="included-item">
                <div className="included-icon">
                  <Check size={18} />
                </div>

                <div>
                  <h3>Personalised Service</h3>
                  <p>Your appointment is tailored to your individual needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="services-final-cta">
        <div className="services-final-cta-content">
          <UserRound size={30} />

          <p className="section-eyebrow">Ready when you are</p>

          <h2>
            Find your
            <span> signature style.</span>
          </h2>

          <p>
            Choose your service, select your barber and reserve your appointment
            in just a few clicks.
          </p>

          <Link to="/booking" className="btn btn-primary">
            Book Now
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
