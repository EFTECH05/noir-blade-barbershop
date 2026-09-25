import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Scissors,
  UserRound,
} from "lucide-react";

import { loadServices } from "../../controllers/serviceController";
import { loadBarbers } from "../../controllers/barberController";
import { submitBooking } from "../../controllers/bookingController";

import {
  openGoogleCalendar,
  downloadAppleCalendar,
} from "../../utils/calendar";

import "./Booking.css";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

function Booking() {
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);

  const [selectedService, setSelectedService] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");

  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [successBooking, setSuccessBooking] = useState(null);

  useEffect(() => {
    async function loadBookingData() {
      try {
        setLoading(true);

        const [serviceData, barberData] = await Promise.all([
          loadServices(),
          loadBarbers(),
        ]);

        setServices(serviceData);
        setBarbers(barberData);
      } catch (error) {
        console.error("Failed to load booking data:", error);

        setErrorMessage(
          "We couldn't load the booking options. Please refresh the page and try again.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadBookingData();
  }, []);

  const selectedServiceData = useMemo(() => {
    return services.find(
      (service) => String(service.id) === String(selectedService),
    );
  }, [services, selectedService]);

  const selectedBarberData = useMemo(() => {
    return barbers.find(
      (barber) => String(barber.id) === String(selectedBarber),
    );
  }, [barbers, selectedBarber]);

  const minimumDate = new Date().toISOString().split("T")[0];

  function handleDateChange(event) {
    setBookingDate(event.target.value);
    setBookingTime("");
    setErrorMessage("");
  }

  function handleServiceChange(serviceId) {
    setSelectedService(String(serviceId));
    setBookingTime("");
    setErrorMessage("");
  }

  function handleBarberChange(barberId) {
    setSelectedBarber(String(barberId));
    setBookingTime("");
    setErrorMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");

    if (
      !selectedService ||
      !selectedBarber ||
      !bookingDate ||
      !bookingTime ||
      !customerName.trim() ||
      !customerEmail.trim() ||
      !customerPhone.trim()
    ) {
      setErrorMessage("Please complete all required fields.");

      return;
    }

    if (bookingDate < minimumDate) {
      setErrorMessage("Please select a valid future date.");

      return;
    }

    try {
      setSubmitting(true);

      const booking = await submitBooking({
        serviceId: Number(selectedService),
        barberId: Number(selectedBarber),
        bookingDate,
        bookingTime,
        customerName: customerName.trim(),
        customerEmail: customerEmail.trim(),
        customerPhone: customerPhone.trim(),
      });

      setSuccessBooking({
        ...booking,

        serviceName: selectedServiceData?.name || "Selected service",

        servicePrice: selectedServiceData?.price || 0,

        durationMinutes: selectedServiceData?.durationMinutes || 30,

        barberName: selectedBarberData?.name || "Selected barber",

        customerName: customerName.trim(),

        customerEmail: customerEmail.trim(),

        customerPhone: customerPhone.trim(),
      });

      setBookingTime("");

      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
    } catch (error) {
      console.error("Booking failed:", error);

      setErrorMessage(
        error.message || "We couldn't complete your booking. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function closeSuccessMessage() {
    setSuccessBooking(null);
  }

  function handleGoogleCalendar() {
    if (!successBooking) {
      return;
    }

    openGoogleCalendar(successBooking);
  }

  function handleAppleCalendar() {
    if (!successBooking) {
      return;
    }

    downloadAppleCalendar(successBooking);
  }

  if (loading) {
    return (
      <section className="booking-page">
        <div className="booking-loading">
          <div className="booking-spinner"></div>

          <p>Loading booking options...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-content">
          <span className="booking-eyebrow">NOIR & BLADE</span>

          <h1>Book Your Appointment</h1>

          <p>
            Choose your service, barber, date and time. We'll take care of the
            rest.
          </p>
        </div>
      </div>

      <div className="booking-container">
        <div className="booking-heading">
          <span>RESERVE YOUR CHAIR</span>

          <h2>
            Your next look
            <br />
            starts here.
          </h2>

          <p>
            Select your preferred service and barber, then choose a convenient
            appointment time.
          </p>
        </div>

        {errorMessage && (
          <div className="booking-error" role="alert">
            {errorMessage}
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* SERVICE */}

          <div className="booking-step">
            <div className="booking-step-number">01</div>

            <div className="booking-step-content">
              <div className="booking-step-title">
                <Scissors size={20} />

                <h3>Choose your service</h3>
              </div>

              <div className="booking-service-grid">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    className={`booking-service-card ${
                      String(selectedService) === String(service.id)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleServiceChange(service.id)}
                  >
                    <div>
                      <h4>{service.name}</h4>

                      <p>{service.description}</p>
                    </div>

                    <div className="booking-service-meta">
                      <strong>R{service.price}</strong>

                      <span>
                        <Clock3 size={14} />
                        {service.durationMinutes} min
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* BARBER */}

          <div className="booking-step">
            <div className="booking-step-number">02</div>

            <div className="booking-step-content">
              <div className="booking-step-title">
                <UserRound size={20} />

                <h3>Choose your barber</h3>
              </div>

              <div className="booking-barber-grid">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    type="button"
                    className={`booking-barber-card ${
                      String(selectedBarber) === String(barber.id)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleBarberChange(barber.id)}
                  >
                    <div className="booking-barber-avatar">
                      {barber.name.charAt(0)}
                    </div>

                    <div>
                      <h4>{barber.name}</h4>

                      <p>{barber.bio}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DATE AND TIME */}

          <div className="booking-step">
            <div className="booking-step-number">03</div>

            <div className="booking-step-content">
              <div className="booking-step-title">
                <CalendarDays size={20} />

                <h3>Choose date & time</h3>
              </div>

              <div className="booking-date-time">
                <div className="booking-field">
                  <label htmlFor="bookingDate">Appointment date</label>

                  <input
                    id="bookingDate"
                    type="date"
                    value={bookingDate}
                    min={minimumDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="bookingTime">Available time</label>

                  <select
                    id="bookingTime"
                    value={bookingTime}
                    onChange={(event) => setBookingTime(event.target.value)}
                    disabled={!bookingDate}
                    required
                  >
                    <option value="">
                      {bookingDate ? "Select a time" : "Choose a date first"}
                    </option>

                    {TIME_SLOTS.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="booking-hours">
                <Clock3 size={16} />

                <span>
                  Opening hours: Monday–Friday 09:00–18:00 · Saturday
                  09:00–16:00
                </span>
              </div>
            </div>
          </div>

          {/* CUSTOMER DETAILS */}

          <div className="booking-step">
            <div className="booking-step-number">04</div>

            <div className="booking-step-content">
              <div className="booking-step-title">
                <UserRound size={20} />

                <h3>Your details</h3>
              </div>

              <div className="booking-customer-grid">
                <div className="booking-field">
                  <label htmlFor="customerName">Full name</label>

                  <input
                    id="customerName"
                    type="text"
                    placeholder="Your full name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="customerEmail">Email address</label>

                  <input
                    id="customerEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="booking-field booking-field-full">
                  <label htmlFor="customerPhone">Phone number</label>

                  <input
                    id="customerPhone"
                    type="tel"
                    placeholder="+27 00 000 0000"
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY */}

          {selectedServiceData && selectedBarberData && (
            <div className="booking-summary">
              <div>
                <span>Your appointment</span>

                <h3>{selectedServiceData.name}</h3>

                <p>
                  with {selectedBarberData.name}
                  {bookingDate ? ` · ${bookingDate}` : ""}
                  {bookingTime ? ` · ${bookingTime}` : ""}
                </p>
              </div>

              <strong>R{selectedServiceData.price}</strong>
            </div>
          )}

          <button
            type="submit"
            className="booking-submit"
            disabled={submitting}
          >
            {submitting ? "Confirming Appointment..." : "Confirm Appointment"}
          </button>

          <p className="booking-terms">
            By booking an appointment, you agree to our{" "}
            <Link to="/terms">Terms & Conditions</Link>.
          </p>
        </form>
      </div>

      {/* SUCCESS MODAL */}

      {successBooking && (
        <div className="booking-modal-overlay" onClick={closeSuccessMessage}>
          <div
            className="booking-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="booking-success-icon">
              <CheckCircle2 size={38} />
            </div>

            <span className="booking-eyebrow">APPOINTMENT CONFIRMED</span>

            <h2>You're booked.</h2>

            <p>Your appointment has been successfully saved.</p>

            <div className="booking-confirmation">
              <div>
                <span>Service</span>

                <strong>{successBooking.serviceName}</strong>
              </div>

              <div>
                <span>Barber</span>

                <strong>{successBooking.barberName}</strong>
              </div>

              <div>
                <span>Date</span>

                <strong>{successBooking.bookingDate}</strong>
              </div>

              <div>
                <span>Time</span>

                <strong>{successBooking.bookingTime}</strong>
              </div>

              <div>
                <span>Duration</span>

                <strong>{successBooking.durationMinutes} min</strong>
              </div>

              <div>
                <span>Total</span>

                <strong>R{successBooking.servicePrice}</strong>
              </div>
            </div>

            {/* CALENDAR */}

            <div className="booking-calendar-section">
              <div className="booking-calendar-heading">
                <CalendarDays size={20} />

                <div>
                  <h3>Add to your calendar</h3>

                  <p>Save your appointment so you don't miss it.</p>
                </div>
              </div>

              <div className="booking-calendar-buttons">
                <button
                  type="button"
                  className="booking-calendar-button"
                  onClick={handleGoogleCalendar}
                >
                  <CalendarDays size={18} />
                  Google Calendar
                </button>

                <button
                  type="button"
                  className="booking-calendar-button booking-calendar-button-secondary"
                  onClick={handleAppleCalendar}
                >
                  <CalendarDays size={18} />
                  Apple Calendar
                </button>
              </div>
            </div>

            <div className="booking-modal-actions">
              <button
                type="button"
                onClick={closeSuccessMessage}
                className="booking-modal-close"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Booking;
