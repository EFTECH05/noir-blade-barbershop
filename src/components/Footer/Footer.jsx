import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        marginTop: "80px",
      }}
    >
      {/* TOP CTA */}
      <section
        style={{
          padding: "80px 30px",
          textAlign: "center",
          background: "#181818",
        }}
      >
        <span
          style={{
            display: "block",
            marginBottom: "20px",
            color: "#b99b5f",
            fontSize: "12px",
            letterSpacing: "3px",
          }}
        >
          YOUR NEXT LOOK STARTS HERE
        </span>

        <h2
          style={{
            margin: "0 0 20px",
            fontSize: "46px",
          }}
        >
          Look sharp.
          <br />
          <em>Feel confident.</em>
        </h2>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto 30px",
            color: "#aaa",
            lineHeight: "1.7",
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
          }}
        ></Link>
      </section>

      {/* FOOTER CONTENT */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr",
            gap: "50px",
          }}
        >
          {/* BRAND */}
          <div>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              NOIR & BLADE
            </Link>

            <p
              style={{
                maxWidth: "300px",
                color: "#999",
                lineHeight: "1.7",
                marginTop: "20px",
              }}
            >
              Modern grooming. Classic precision. A premium Cape Town barbershop
              built around craftsmanship, style and confidence.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3>Explore</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link to="/" style={linkStyle}>
                Home
              </Link>

              <Link to="/services" style={linkStyle}>
                Services
              </Link>

              <Link to="/about" style={linkStyle}>
                About
              </Link>

              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>

              <Link to="/booking" style={linkStyle}>
                Book Now
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3>Contact</h3>

            <p style={textStyle}>
              <strong>Phone</strong>
              <br />
              +27 21 555 0198
            </p>

            <p style={textStyle}>
              <strong>Email</strong>
              <br />
              hello@noirandblade.co.za
            </p>

            <p style={textStyle}>
              <strong>Location</strong>
              <br />
              Cape Town, South Africa
            </p>
          </div>

          {/* HOURS */}
          <div>
            <h3>Opening Hours</h3>

            <p style={textStyle}>
              <strong>Monday – Friday</strong>
              <br />
              09:00 – 18:00
            </p>

            <p style={textStyle}>
              <strong>Saturday</strong>
              <br />
              09:00 – 16:00
            </p>

            <p style={textStyle}>
              <strong>Sunday</strong>
              <br />
              Closed
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section
        style={{
          borderTop: "1px solid #292929",
          padding: "25px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#777",
              fontSize: "13px",
            }}
          >
            © {new Date().getFullYear()} NOIR & BLADE. All rights reserved.
          </p>

          <Link
            to="/terms"
            style={{
              color: "#777",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            Terms & Conditions
          </Link>
        </div>
      </section>
    </footer>
  );
}

const linkStyle = {
  color: "#999",
  textDecoration: "none",
};

const textStyle = {
  color: "#999",
  lineHeight: "1.6",
};

export default Footer;
