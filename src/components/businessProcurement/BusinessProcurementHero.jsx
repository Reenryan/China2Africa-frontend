import { Link } from "react-router-dom";
import "./BusinessProcurementHero.css";

function BusinessProcurementHero() {
  return (
    <section className="business-procurement-hero">
      <div className="business-procurement-hero-container">

        {/* LEFT SIDE */}
        <div className="business-procurement-hero-content">

          <span className="business-procurement-hero-eyebrow">
            BUSINESS PROCUREMENT
          </span>

          <h1 className="business-procurement-hero-title">
            Procurement support
            <br />
            <span>built around your business needs.</span>
          </h1>

          <p className="business-procurement-hero-description">
            From sourcing products and coordinating suppliers to
            organizing purchasing requirements, China2Africa helps
            businesses coordinate the procurement process from China
            to Africa.
          </p>

          <div className="business-procurement-hero-actions">

            <Link
              to="/signup"
              className="business-procurement-hero-button business-procurement-hero-button-primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="business-procurement-hero-button business-procurement-hero-button-secondary"
            >
              See How It Works
            </Link>

          </div>

          <div className="business-procurement-hero-trust">

            <div className="business-procurement-trust-item">
              <span className="business-procurement-trust-icon">
                🤝
              </span>

              <span>
                Supplier
                <br />
                Coordination
              </span>
            </div>

            <div className="business-procurement-trust-divider"></div>

            <div className="business-procurement-trust-item">
              <span className="business-procurement-trust-icon">
                📋
              </span>

              <span>
                Business
                <br />
                Requirements
              </span>
            </div>

            <div className="business-procurement-trust-divider"></div>

            <div className="business-procurement-trust-item">
              <span className="business-procurement-trust-icon">
                📦
              </span>

              <span>
                Procurement
                <br />
                Coordination
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="business-procurement-hero-visual">

          <div className="business-procurement-route-card business-procurement-business-card">

            <div className="business-procurement-route-icon">
              🏢
            </div>

            <div className="business-procurement-route-content">
              <span>YOUR BUSINESS</span>
              <strong>Requirements</strong>
            </div>

          </div>

          <div className="business-procurement-route-line"></div>

          <div className="business-procurement-route-card business-procurement-procurement-card">

            <div className="business-procurement-route-icon">
              📋
            </div>

            <div className="business-procurement-route-content">
              <span>CHINA2AFRICA</span>
              <strong>Procurement</strong>
            </div>

          </div>

          <div className="business-procurement-route-line"></div>

          <div className="business-procurement-route-card business-procurement-china-card">

            <div className="business-procurement-route-icon">
              🇨🇳
            </div>

            <div className="business-procurement-route-content">
              <span>SUPPLIERS</span>
              <strong>China</strong>
            </div>

          </div>

          <div className="business-procurement-route-line"></div>

          <div className="business-procurement-route-card business-procurement-africa-card">

            <div className="business-procurement-route-icon">
              🌍
            </div>

            <div className="business-procurement-route-content">
              <span>DESTINATION</span>
              <strong>Africa</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BusinessProcurementHero;