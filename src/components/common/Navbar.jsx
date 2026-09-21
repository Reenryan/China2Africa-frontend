import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  };

  const toggleServices = (event) => {
    event.preventDefault();

    setServicesOpen((previous) => !previous);
    setResourcesOpen(false);
  };

  const toggleResources = (event) => {
    event.preventDefault();

    setResourcesOpen((previous) => !previous);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar__container">

        {/* =========================
            LOGO
        ========================== */}

        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          China<span>2</span>Africa
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav className="navbar__desktop">

          <Link
            to="/"
            className="navbar__link"
          >
            Home
          </Link>


          {/* SERVICES */}

          <div className="navbar__dropdown">

            <div className="navbar__dropdown-trigger">

              <Link
                to="/services/product-sourcing"
                className="navbar__link navbar__dropdown-link"
              >
                Services
              </Link>

              <button
                type="button"
                className="navbar__dropdown-arrow"
                aria-label="Open Services menu"
              >
                ▼
              </button>

            </div>

            <div className="navbar__dropdown-menu">

              <Link to="/services/product-sourcing">
                Product Sourcing
              </Link>

              <Link to="/services/consolidation">
                Consolidation
              </Link>

              <Link to="/services/sea-freight">
                Sea Freight
              </Link>

              <Link to="/services/air-freight">
                Air Freight
              </Link>

              <Link to="/services/local-delivery">
                Local Delivery
              </Link>

              <Link to="/services/business-procurement">
                Business Procurement
              </Link>

            </div>

          </div>


          {/* RESOURCES */}

          <div className="navbar__dropdown">

            <div className="navbar__dropdown-trigger">

              <Link
                to="/resources/trade-academy"
                className="navbar__link navbar__dropdown-link"
              >
                Resources
              </Link>

              <button
                type="button"
                className="navbar__dropdown-arrow"
                aria-label="Open Resources menu"
              >
                ▼
              </button>

            </div>

            <div className="navbar__dropdown-menu">

              <Link to="/resources/trade-academy">
                Trade Academy
              </Link>

              <Link to="/resources/faqs">
                FAQs
              </Link>

              <Link to="/resources/testimonials">
                Testimonials
              </Link>

            </div>

          </div>


          {/* OTHER LINKS */}

          <Link
            to="/about-us"
            className="navbar__link"
          >
            About Us
          </Link>

          <Link
            to="/how-it-works"
            className="navbar__link"
          >
            How It Works
          </Link>

          <Link
            to="/contact"
            className="navbar__link"
          >
            Contact Us
          </Link>


          {/* AUTH ACTIONS */}

          <Link
            to="/login"
            className="navbar__login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="navbar__get-started"
          >
            Get Started
          </Link>

        </nav>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          className="navbar__mobile-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* =========================
          MOBILE / TABLET MENU
      ========================== */}

      <div
        className={`navbar__mobile-menu ${
          menuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >

        <nav className="navbar__mobile-navigation">


          {/* HOME */}

          <Link
            to="/"
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* SERVICES */}

          <div className="navbar__mobile-group">

            <div className="navbar__mobile-parent">

              <Link
                to="/services/product-sourcing"
                className="navbar__mobile-link"
                onClick={closeMenu}
              >
                Services
              </Link>

              <button
                type="button"
                className="navbar__mobile-expand"
                onClick={toggleServices}
                aria-label="Expand Services"
                aria-expanded={servicesOpen}
              >
                {servicesOpen ? "▲" : "▼"}
              </button>

            </div>


            {servicesOpen && (

              <div className="navbar__mobile-submenu">

                <Link
                  to="/services/product-sourcing"
                  onClick={closeMenu}
                >
                  Product Sourcing
                </Link>

                <Link
                  to="/services/consolidation"
                  onClick={closeMenu}
                >
                  Consolidation
                </Link>

                <Link
                  to="/services/sea-freight"
                  onClick={closeMenu}
                >
                  Sea Freight
                </Link>

                <Link
                  to="/services/air-freight"
                  onClick={closeMenu}
                >
                  Air Freight
                </Link>

                <Link
                  to="/services/local-delivery"
                  onClick={closeMenu}
                >
                  Local Delivery
                </Link>

                <Link
                  to="/services/business-procurement"
                  onClick={closeMenu}
                >
                  Business Procurement
                </Link>

              </div>

            )}

          </div>


          {/* RESOURCES */}

          <div className="navbar__mobile-group">

            <div className="navbar__mobile-parent">

              <Link
                to="/resources/trade-academy"
                className="navbar__mobile-link"
                onClick={closeMenu}
              >
                Resources
              </Link>

              <button
                type="button"
                className="navbar__mobile-expand"
                onClick={toggleResources}
                aria-label="Expand Resources"
                aria-expanded={resourcesOpen}
              >
                {resourcesOpen ? "▲" : "▼"}
              </button>

            </div>


            {resourcesOpen && (

              <div className="navbar__mobile-submenu">

                <Link
                  to="/resources/trade-academy"
                  onClick={closeMenu}
                >
                  Trade Academy
                </Link>

                <Link
                  to="/resources/faqs"
                  onClick={closeMenu}
                >
                  FAQs
                </Link>

                <Link
                  to="/resources/kenya-import-updates"
                  onClick={closeMenu}
                >
                  Kenya Import Updates
                </Link>

                <Link
                  to="/resources/testimonials"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>

              </div>

            )}

          </div>


          {/* OTHER LINKS */}

          <Link
            to="/about-us"
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            to="/how-it-works"
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            How It Works
          </Link>

          <Link
            to="/contact"
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            Contact Us
          </Link>


          {/* AUTH LINKS */}

          <div className="navbar__mobile-auth">

            <Link
              to="/login"
              className="navbar__mobile-login"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="navbar__mobile-get-started"
              onClick={closeMenu}
            >
              Get Started
            </Link>

          </div>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;