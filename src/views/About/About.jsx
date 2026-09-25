import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  Clock3,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

import salonImage from "../../assets/salon.png";
import salonImageTwo from "../../assets/salon1.png";
import salonImageThree from "../../assets/salon3.png";

import "./About.css";

function About() {
  const values = [
    {
      number: "01",
      icon: Scissors,
      title: "Precision",
      text: "Every detail matters. From the first cut to the final finish, we focus on clean lines and exceptional detail.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Experience",
      text: "A premium grooming experience designed to make you slow down, relax, and enjoy your time in the chair.",
    },
    {
      number: "03",
      icon: Award,
      title: "Quality",
      text: "Professional tools, premium products, and timeless techniques come together for consistently sharp results.",
    },
    {
      number: "04",
      icon: Star,
      title: "Confidence",
      text: "The goal is simple. You leave the chair looking sharper, feeling confident, and ready for whatever comes next.",
    },
  ];

  const experienceItems = [
    "Personalised consultation before every service",
    "Premium professional grooming products",
    "Attention to detail from start to finish",
    "Clean, comfortable and modern environment",
  ];

  return (
    <div className="nb-about">
      {/* HERO */}
      <section className="nb-about-hero">
        <img
          src={salonImageThree}
          alt="NOIR & BLADE barbershop"
          className="nb-about-hero-image"
        />

        <div className="nb-about-hero-overlay"></div>

        <div className="nb-about-hero-content">
          <div className="nb-about-hero-label">
            <span>EST. 2018</span>
            <i></i>
            <span>CAPE TOWN</span>
          </div>

          <h1>
            More than
            <br />
            <em>a haircut.</em>
          </h1>

          <p>
            A modern barbershop built around precision, personality and the art
            of great grooming.
          </p>

          <a href="#nb-about-story" className="nb-about-scroll">
            <span>Discover our story</span>
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="nb-about-hero-number">01</div>
      </section>

      {/* INTRO */}
      <section className="nb-about-intro">
        <div className="nb-about-intro-inner">
          <div className="nb-about-intro-label">
            THE NOIR & BLADE PHILOSOPHY
          </div>

          <h2>
            Traditional barbering.
            <br />
            <em>Modern attitude.</em>
          </h2>

          <p>
            NOIR & BLADE is a modern Cape Town barbershop built around
            craftsmanship, individuality, and the belief that every client
            deserves to leave feeling their best.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="nb-about-story" id="nb-about-story">
        <div className="nb-about-story-grid">
          <div className="nb-about-story-images">
            <div className="nb-about-story-main">
              <img src={salonImage} alt="NOIR & BLADE interior" />
            </div>

            <div className="nb-about-story-small">
              <img src={salonImageTwo} alt="NOIR & BLADE grooming area" />
            </div>

            <div className="nb-about-established">
              <span>ESTABLISHED</span>
              <strong>2018</strong>
            </div>
          </div>

          <div className="nb-about-story-text">
            <div className="nb-about-section-label">OUR STORY</div>

            <h2>
              Built on tradition.
              <br />
              <em>Designed for today.</em>
            </h2>

            <div className="nb-about-gold-line"></div>

            <p className="nb-about-lead">
              NOIR & BLADE started with a simple idea: create a barbershop where
              traditional barbering meets modern grooming.
            </p>

            <p>
              What began as a passion for exceptional haircuts has grown into a
              space where craftsmanship, style and genuine hospitality come
              together.
            </p>

            <p>
              We believe a barber visit should be more than another appointment.
              It should be a moment to slow down, take care of yourself, and
              leave feeling like the best version of yourself.
            </p>

            <Link to="/booking" className="nb-about-button">
              Book Your Appointment
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="nb-about-values">
        <div className="nb-about-values-heading">
          <div>
            <div className="nb-about-section-label">WHAT WE STAND FOR</div>

            <h2>
              The standard
              <br />
              <em>we live by.</em>
            </h2>
          </div>

          <p>
            Four principles guide every cut, every conversation and every
            experience at NOIR & BLADE.
          </p>
        </div>

        <div className="nb-about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="nb-about-value" key={value.number}>
                <div className="nb-about-value-number">{value.number}</div>

                <div className="nb-about-value-icon">
                  <Icon size={22} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

                <div className="nb-about-value-arrow">
                  <ArrowRight size={16} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="nb-about-experience">
        <div className="nb-about-experience-image">
          <img src={salonImageThree} alt="NOIR & BLADE premium experience" />

          <div className="nb-about-experience-overlay"></div>

          <div className="nb-about-experience-caption">
            <span>THE EXPERIENCE</span>
            <strong>Slow down. Get sharp.</strong>
          </div>
        </div>

        <div className="nb-about-experience-content">
          <div className="nb-about-section-label">THE EXPERIENCE</div>

          <h2>
            Step in.
            <br />
            Slow down.
            <br />
            <em>Leave sharper.</em>
          </h2>

          <p className="nb-about-experience-intro">
            Your time in the chair should feel different. Relaxed, personal and
            focused entirely on you.
          </p>

          <div className="nb-about-experience-list">
            {experienceItems.map((item) => (
              <div className="nb-about-experience-item" key={item}>
                <span>
                  <Check size={14} />
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="nb-about-info">
            <div>
              <Clock3 size={20} />

              <section>
                <strong>Opening Hours</strong>
                <small>Mon – Fri · 09:00 – 18:00</small>
              </section>
            </div>

            <div>
              <Scissors size={20} />

              <section>
                <strong>Our Approach</strong>
                <small>Classic cuts · Modern styles</small>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nb-about-cta">
        <div className="nb-about-cta-glow"></div>

        <div className="nb-about-cta-content">
          <div className="nb-about-section-label">
            YOUR NEXT LOOK STARTS HERE
          </div>

          <h2>
            Make your next cut
            <br />
            <em>count.</em>
          </h2>

          <p>
            Choose your service, select your preferred time, and let us take
            care of the rest.
          </p>

          <Link to="/booking" className="nb-about-cta-button">
            Book Your Appointment
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="nb-about-cta-brand">NOIR & BLADE</div>
      </section>
    </div>
  );
}

export default About;
