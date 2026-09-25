import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Phone,
  Scissors,
  Search,
  Settings,
  UserRound,
  Users,
  X,
} from "lucide-react";

import { loginAdmin } from "../../controllers/adminController";

import "./Admin.css";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [bookings, setBookings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const data = await loginAdmin(username, password);

      setBookings(data || []);
      setLoggedIn(true);
    } catch (error) {
      setErrorMessage(error.message || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setBookings([]);
    setSearch("");
    setActiveSection("dashboard");
    setSidebarOpen(false);
    setErrorMessage("");
  }

  function handleNavigation(section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }

  const filteredBookings = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return bookings;
    }

    return bookings.filter((booking) => {
      return (
        booking.customer_name?.toLowerCase().includes(searchValue) ||
        booking.customer_email?.toLowerCase().includes(searchValue) ||
        booking.customer_phone?.toLowerCase().includes(searchValue) ||
        booking.booking_date?.toLowerCase().includes(searchValue) ||
        booking.booking_time?.toLowerCase().includes(searchValue) ||
        booking.service_name?.toLowerCase().includes(searchValue) ||
        booking.barber_name?.toLowerCase().includes(searchValue)
      );
    });
  }, [bookings, search]);

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "confirmed",
  );

  const todayString = new Date().toISOString().split("T")[0];

  const todayBookings = bookings.filter(
    (booking) => booking.booking_date === todayString,
  );

  const upcomingBookings = [...filteredBookings]
    .sort((a, b) => {
      const first = `${a.booking_date || ""} ${a.booking_time || ""}`;
      const second = `${b.booking_date || ""} ${b.booking_time || ""}`;

      return first.localeCompare(second);
    })
    .filter((booking) => {
      return booking.booking_date >= todayString;
    });

  const displayedBookings =
    activeSection === "appointments" ? filteredBookings : upcomingBookings;

  function formatDate(dateString) {
    if (!dateString) {
      return "—";
    }

    const date = new Date(`${dateString}T00:00:00`);

    return new Intl.DateTimeFormat("en-ZA", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  function getInitials(name) {
    if (!name) {
      return "?";
    }

    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function getStatusClass(status) {
    if (status === "confirmed") {
      return "status-confirmed";
    }

    if (status === "cancelled") {
      return "status-cancelled";
    }

    return "status-default";
  }

  if (!loggedIn) {
    return (
      <div className="admin-app">
        <main className="admin-login-page">
          <div className="admin-login-background">
            <div className="admin-glow admin-glow-one"></div>
            <div className="admin-glow admin-glow-two"></div>
          </div>

          <div className="admin-login-card">
            <div className="admin-login-brand">
              <div className="admin-brand-mark">
                <Scissors size={22} strokeWidth={1.8} />
              </div>

              <div>
                <strong>NOIR & BLADE</strong>
                <span>ADMIN PORTAL</span>
              </div>
            </div>

            <div className="admin-login-content">
              <span className="admin-eyebrow">PRIVATE ACCESS</span>

              <h1>Welcome back.</h1>

              <p>
                Sign in to manage appointments and keep your barbershop running
                smoothly.
              </p>
            </div>

            {errorMessage && (
              <div className="admin-error" role="alert">
                {errorMessage}
              </div>
            )}

            <form className="admin-login-form" onSubmit={handleLogin}>
              <div className="admin-field">
                <label htmlFor="adminUsername">Username</label>

                <input
                  id="adminUsername"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Enter username"
                  autoComplete="username"
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="adminPassword">Password</label>

                <input
                  id="adminPassword"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                className="admin-login-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="admin-button-spinner"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    Access Dashboard
                    <span className="admin-login-arrow">→</span>
                  </>
                )}
              </button>
            </form>

            <div className="admin-login-footer">
              <span>NOIR & BLADE</span>
              <span>Secure Admin Area</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-app">
      {sidebarOpen && (
        <button
          type="button"
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`admin-sidebar ${sidebarOpen ? "admin-sidebar-open" : ""}`}
      >
        <div className="admin-sidebar-top">
          <div className="admin-sidebar-brand">
            <div className="admin-brand-mark">
              <Scissors size={20} strokeWidth={1.8} />
            </div>

            <div>
              <strong>NOIR & BLADE</strong>
              <span>ADMIN PANEL</span>
            </div>
          </div>

          <button
            type="button"
            className="admin-sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="admin-sidebar-label">MAIN MENU</div>

        <nav className="admin-sidebar-nav">
          <button
            type="button"
            className={
              activeSection === "dashboard"
                ? "admin-nav-item active"
                : "admin-nav-item"
            }
            onClick={() => handleNavigation("dashboard")}
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </button>

          <button
            type="button"
            className={
              activeSection === "appointments"
                ? "admin-nav-item active"
                : "admin-nav-item"
            }
            onClick={() => handleNavigation("appointments")}
          >
            <CalendarDays size={17} />
            <span>Appointments</span>

            {bookings.length > 0 && (
              <span className="admin-nav-count">{bookings.length}</span>
            )}
          </button>

          <button
            type="button"
            className="admin-nav-item"
            onClick={() => handleNavigation("customers")}
          >
            <Users size={17} />
            <span>Customers</span>
          </button>

          <button
            type="button"
            className="admin-nav-item"
            onClick={() => handleNavigation("services")}
          >
            <Scissors size={17} />
            <span>Services</span>
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-label">SYSTEM</div>

          <button
            type="button"
            className="admin-nav-item"
            onClick={() => handleNavigation("settings")}
          >
            <Settings size={17} />
            <span>Settings</span>
          </button>

          <div className="admin-sidebar-user">
            <div className="admin-sidebar-avatar">A</div>

            <div className="admin-sidebar-user-info">
              <strong>Administrator</strong>
              <span>NOIR & BLADE</span>
            </div>
          </div>

          <button
            type="button"
            className="admin-logout-button"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <div className="admin-header-left">
            <button
              type="button"
              className="admin-mobile-menu"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={21} />
            </button>

            <div>
              <span className="admin-header-label">
                {activeSection === "appointments" ? "APPOINTMENTS" : "OVERVIEW"}
              </span>

              <h2>
                {activeSection === "appointments"
                  ? "Appointments"
                  : "Dashboard"}
              </h2>
            </div>
          </div>

          <div className="admin-header-right">
            <div className="admin-online">
              <span></span>
              Live
            </div>

            <div className="admin-header-profile">
              <div className="admin-header-avatar">A</div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <main className="admin-content">
          {activeSection === "dashboard" && (
            <>
              <section className="admin-welcome">
                <div>
                  <span className="admin-eyebrow">NOIR & BLADE</span>

                  <h1>
                    Good morning, <span>Admin.</span>
                  </h1>

                  <p>Here's what's happening with your appointments today.</p>
                </div>

                <div className="admin-date-box">
                  <CalendarDays size={17} />

                  <div>
                    <span>Today</span>

                    <strong>
                      {new Intl.DateTimeFormat("en-ZA", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                      }).format(new Date())}
                    </strong>
                  </div>
                </div>
              </section>

              <section className="admin-stat-grid">
                <article className="admin-stat-card-new">
                  <div className="admin-stat-top">
                    <div className="admin-stat-icon-new">
                      <CalendarDays size={18} />
                    </div>

                    <span className="admin-stat-period">All time</span>
                  </div>

                  <div className="admin-stat-number">{bookings.length}</div>

                  <div className="admin-stat-label">Total bookings</div>
                </article>

                <article className="admin-stat-card-new">
                  <div className="admin-stat-top">
                    <div className="admin-stat-icon-new">
                      <Clock3 size={18} />
                    </div>

                    <span className="admin-stat-period">Today</span>
                  </div>

                  <div className="admin-stat-number">
                    {todayBookings.length}
                  </div>

                  <div className="admin-stat-label">Today's appointments</div>
                </article>

                <article className="admin-stat-card-new">
                  <div className="admin-stat-top">
                    <div className="admin-stat-icon-new">
                      <CheckCircle2 size={18} />
                    </div>

                    <span className="admin-stat-period">Active</span>
                  </div>

                  <div className="admin-stat-number">
                    {confirmedBookings.length}
                  </div>

                  <div className="admin-stat-label">Confirmed bookings</div>
                </article>

                <article className="admin-stat-card-new">
                  <div className="admin-stat-top">
                    <div className="admin-stat-icon-new">
                      <Users size={18} />
                    </div>

                    <span className="admin-stat-period">Customers</span>
                  </div>

                  <div className="admin-stat-number">
                    {
                      new Set(bookings.map((booking) => booking.customer_email))
                        .size
                    }
                  </div>

                  <div className="admin-stat-label">Unique customers</div>
                </article>
              </section>
            </>
          )}

          {activeSection === "customers" && (
            <section className="admin-page-intro">
              <span className="admin-eyebrow">CUSTOMER MANAGEMENT</span>

              <h1>Customers</h1>

              <p>Customer information from your appointment bookings.</p>
            </section>
          )}

          {activeSection === "services" && (
            <section className="admin-page-intro">
              <span className="admin-eyebrow">SERVICE MANAGEMENT</span>

              <h1>Services</h1>

              <p>Services currently available through the booking system.</p>
            </section>
          )}

          {activeSection === "settings" && (
            <section className="admin-page-intro">
              <span className="admin-eyebrow">SYSTEM SETTINGS</span>

              <h1>Settings</h1>

              <p>Administration settings can be managed here.</p>
            </section>
          )}

          <section className="admin-appointments-panel">
            <div className="admin-panel-heading">
              <div>
                <span className="admin-eyebrow">
                  {activeSection === "appointments"
                    ? "BOOKING MANAGEMENT"
                    : "SCHEDULE"}
                </span>

                <h2>
                  {activeSection === "appointments"
                    ? "All Appointments"
                    : "Upcoming Appointments"}
                </h2>

                <p>
                  {displayedBookings.length} appointment
                  {displayedBookings.length === 1 ? "" : "s"} displayed
                </p>
              </div>

              <div className="admin-search-box">
                <Search size={16} />

                <input
                  type="search"
                  placeholder="Search appointments..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>

            {displayedBookings.length === 0 ? (
              <div className="admin-empty-state">
                <div className="admin-empty-icon">
                  <CalendarDays size={25} />
                </div>

                <h3>
                  {search ? "No matching appointments" : "No appointments yet"}
                </h3>

                <p>
                  {search
                    ? "Try searching with another customer, service, or date."
                    : "New customer bookings will appear here."}
                </p>
              </div>
            ) : (
              <div className="admin-appointment-list">
                {displayedBookings.map((booking) => (
                  <article className="admin-appointment-card" key={booking.id}>
                    <div className="admin-appointment-main">
                      <div className="admin-customer-profile">
                        <div className="admin-customer-avatar-new">
                          {getInitials(booking.customer_name)}
                        </div>

                        <div>
                          <h3>{booking.customer_name || "Unknown customer"}</h3>

                          <span>Customer</span>
                        </div>
                      </div>

                      <div className="admin-service-detail">
                        <div className="admin-detail-icon">
                          <Scissors size={15} />
                        </div>

                        <div>
                          <span>Service</span>

                          <strong>
                            {booking.service_name ||
                              `Service #${booking.service_id}`}
                          </strong>
                        </div>
                      </div>

                      <div className="admin-service-detail">
                        <div className="admin-detail-icon">
                          <UserRound size={15} />
                        </div>

                        <div>
                          <span>Barber</span>

                          <strong>
                            {booking.barber_name ||
                              `Barber #${booking.barber_id}`}
                          </strong>
                        </div>
                      </div>

                      <div className="admin-date-detail">
                        <div>
                          <CalendarDays size={14} />

                          <strong>{formatDate(booking.booking_date)}</strong>
                        </div>

                        <div>
                          <Clock3 size={14} />

                          <span>{booking.booking_time}</span>
                        </div>
                      </div>

                      <div>
                        <span
                          className={`admin-status-badge ${getStatusClass(
                            booking.status,
                          )}`}
                        >
                          <span></span>
                          {booking.status || "confirmed"}
                        </span>
                      </div>
                    </div>

                    <div className="admin-appointment-contact">
                      <div>
                        <Mail size={14} />
                        <span>{booking.customer_email || "No email"}</span>
                      </div>

                      <div>
                        <Phone size={14} />
                        <span>{booking.customer_phone || "No phone"}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Admin;
