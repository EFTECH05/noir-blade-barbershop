import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialLinkStyle = {
    color: "#999",
    textDecoration: "none",
    fontSize: isMobile ? "13px" : "14px",
    transition: "color 0.2s ease",
  };

  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        marginTop: isMobile ? "50px" : "80px",
      }}
    >
      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section
        style={{
          padding: isMobile
            ? "55px 20px"
            : isTablet
              ? "65px 25px"
              : "80px 30px",
          textAlign: "center",
          background: "#181818",
        }}
      >
        <span
          style={{
            display: "block",
            marginBottom: "20px",
            color: "#b99b5f",
            fontSize: isMobile ? "10px" : "12px",
            letterSpacing: isMobile ? "2px" : "3px",
            fontWeight: "600",
          }}
        >
          YOUR NEXT LOOK STARTS HERE
        </span>

        <h2
          style={{
            margin: "0 0 20px",
            fontSize: isMobile ? "34px" : isTablet ? "40px" : "46px",
            lineHeight: "1.1",
            fontWeight: "700",
          }}
        >
          Look sharp.
          <br />
          <em style={{ fontWeight: "400" }}>Feel confident.</em>
        </h2>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto 30px",
            color: "#aaa",
            lineHeight: "1.7",
            fontSize: isMobile ? "14px" : "15px",
          }}
        >
          Ready for your next cut? Choose your service, pick your time, and let
          NOIR & BLADE take care of the rest.
        </p>

        {/* THIS TAKES THE CUSTOMER TO THE BOOKING PAGE */}
        <Link
          to="/booking"
          style={{
            display: "inline-block",
            padding: "15px 25px",
            background: "#fff",
            color: "#111",
            textDecoration: "none",
            fontWeight: "600",
            width: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? "280px" : "none",
            boxSizing: "border-box",
          }}
        >
          Book Your Appointment
        </Link>
      </section>

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile
            ? "50px 20px"
            : isTablet
              ? "60px 25px"
              : "70px 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr 1fr"
                : "2fr 1fr 1.5fr 1.5fr",
            gap: isMobile ? "35px" : isTablet ? "40px 30px" : "50px",
          }}
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div
            style={{
              minWidth: 0,
              gridColumn: isTablet && !isMobile ? "1 / -1" : "auto",
            }}
          >
            <Link
              to="/"
              style={{
                display: "inline-block",
                color: "#fff",
                textDecoration: "none",
                fontSize: isMobile ? "19px" : "22px",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              NOIR & BLADE
            </Link>

            <p
              style={{
                maxWidth: isMobile ? "100%" : "300px",
                color: "#999",
                lineHeight: "1.7",
                marginTop: "20px",
                fontSize: isMobile ? "13px" : "14px",
              }}
            >
              Modern grooming. Classic precision. A premium Cape Town barbershop
              built around craftsmanship, style and confidence.
            </p>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Explore
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link to="/" style={socialLinkStyle}>
                Home
              </Link>

              <Link to="/services" style={socialLinkStyle}>
                Services
              </Link>

              <Link to="/about" style={socialLinkStyle}>
                About
              </Link>

              <Link to="/contact" style={socialLinkStyle}>
                Contact
              </Link>

              <Link to="/booking" style={socialLinkStyle}>
                Book Now
              </Link>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Contact
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: "0 0 18px",
              }}
            >
              <strong style={{ color: "#ddd" }}>Phone</strong>
              <br />

              <a
                href="tel:+27215550198"
                style={{
                  color: "#999",
                  textDecoration: "none",
                }}
              >
                +27 21 555 0198
              </a>
            </p>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: "0 0 18px",
              }}
            >
              <strong style={{ color: "#ddd" }}>Email</strong>
              <br />

              <a
                href="mailto:hello@noirandblade.co.za"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  wordBreak: "break-word",
                }}
              >
                hello@noirandblade.co.za
              </a>
            </p>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: 0,
              }}
            >
              <strong style={{ color: "#ddd" }}>Location</strong>
              <br />
              Cape Town, South Africa
            </p>
          </div>

          {/* =================================================
              OPENING HOURS
          ================================================= */}

          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Opening Hours
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: "0 0 18px",
              }}
            >
              <strong style={{ color: "#ddd" }}>Monday – Friday</strong>
              <br />
              09:00 – 18:00
            </p>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: "0 0 18px",
              }}
            >
              <strong style={{ color: "#ddd" }}>Saturday</strong>
              <br />
              09:00 – 16:00
            </p>

            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: isMobile ? "13px" : "14px",
                margin: 0,
              }}
            >
              <strong style={{ color: "#ddd" }}>Sunday</strong>
              <br />
              Closed
            </p>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div
            style={{
              minWidth: 0,
              gridColumn: isTablet ? "1 / -1" : "auto",
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Follow Us
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <section
        style={{
          borderTop: "1px solid #292929",
          padding: isMobile ? "20px 18px" : "25px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "20px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 6px",
                color: "#777",
                fontSize: isMobile ? "12px" : "13px",
              }}
            >
              © {new Date().getFullYear()} NOIR & BLADE. All rights reserved.
            </p>

            <p
              style={{
                margin: 0,
                color: "#777",
                fontSize: isMobile ? "12px" : "13px",
              }}
            >
              Developed by{" "}
              <span
                style={{
                  color: "#b99b5f",
                  fontWeight: "600",
                }}
              >
                Franklin Ngangu
              </span>
            </p>
          </div>

          <Link
            to="/terms"
            style={{
              color: "#777",
              textDecoration: "none",
              fontSize: isMobile ? "12px" : "13px",
            }}
          >
            Terms & Conditions
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
