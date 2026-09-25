import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./views/Home/Home";
import Services from "./views/Services/Services";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Booking from "./views/Booking/Booking";
import Admin from "./views/Admin/Admin";
import Terms from "./views/Terms/Terms";

function PublicLayout() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* ADMIN AREA
            Completely separate from the public website.
            No Navbar.
            No Footer.
        */}
        <Route path="/admin" element={<Admin />} />

        {/* PUBLIC WEBSITE */}
        <Route path="*" element={<PublicLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
