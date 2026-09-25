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
              <Link
                to="/"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                Home
              </Link>

              <Link
                to="/services"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                Services
              </Link>

              <Link
                to="/about"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                About
              </Link>

              <Link
                to="/contact"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                Contact
              </Link>

              <Link
                to="/booking"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
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
              +27 21 555 0198
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
              hello@noirandblade.co.za
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
          <p
            style={{
              margin: 0,
              color: "#777",
              fontSize: isMobile ? "12px" : "13px",
            }}
          >
            © {new Date().getFullYear()} NOIR & BLADE. All rights reserved.
          </p>

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
