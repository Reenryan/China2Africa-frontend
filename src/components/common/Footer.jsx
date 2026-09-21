import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-china">China</span>
            <span className="logo-two">2</span>
            <span className="logo-africa">Africa</span>
          </Link>

          <p>
            Connecting African businesses with sourcing,
            procurement, and shipping solutions from China.
          </p>

          <div className="footer-route">
            <span>CHINA 🇨🇳</span>
            <span>→</span>
            <span>AFRICA 🌍</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/services/product-sourcing">
            Product Sourcing
          </Link>

          <Link to="/services/business-procurement">
            Business Procurement
          </Link>

          <Link to="/services/consolidation">
            Cargo Consolidation
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
        </div>
        {/* Resoures */  }

       < div className="footer-column">
          <h3>Resources</h3>
          <Link to="/resources/faqs">
            FAQs
          </Link>

          <Link to="/resources/trade-academy">
            Trade Academy
          </Link>

          <Link to="/resources/testimonials">
            Testimonials
          </Link>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <p>
            Have a sourcing or shipping question?
          </p>

          <Link to="/contact" className="footer-contact-link">
            Contact our team →
          </Link>

            <div className="footer-socials">
            <a
                href="https://wa.me/254722806734"
                aria-label="WhatsApp"
                className="footer-social"
                openInNewTab="true"
            >
                <FaWhatsapp />
            </a>

            <a
                href="https://www.facebook.com/China2AfricaShipping"
                aria-label="Facebook"
                className="footer-social"
                openInNewTab="true"

            >
                <FaFacebookF />
            </a>

            <a
                href="https://www.instagram.com/China2AfricaShipping/"
                aria-label="Instagram"
                className="footer-social"
                openInNewTab="true"
            >
                <FaInstagram />
            </a>

            <a
                href="https://www.tiktok.com/@china2africashipping"
                aria-label="TikTok"
                className="footer-social"
                openInNewTab="true"
            >
                <FaTiktok />
            </a>
            <a
                href="https://x.com/China2AfricaShipping"
                aria-label="Twitter"
                className="footer-social"
                openInNewTab="true"
            >
                <FaTwitter />
            </a>
            <a
                href="https://www.youtube.com/@China2AfricaShipping"
                aria-label="YouTube"
                className="footer-social"
                openInNewTab="true"
            >
                <FaYoutube />
            </a>

            <a
                href="https://www.linkedin.com/company/china2africashipping"
                aria-label="LinkedIn"
                className="footer-social"
                openInNewTab="true"
            >
                <FaLinkedinIn />
            </a>

            </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} China2Africa.
            All rights reserved.
          </p>

          <div className="footer-legal">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;