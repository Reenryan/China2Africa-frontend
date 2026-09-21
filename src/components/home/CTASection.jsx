import { Link } from "react-router-dom";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-content">
          <span className="cta-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2 className="cta-title">
            Have a product in mind?
            <br />
            <span>Let's source it.</span>
          </h2>

          <p className="cta-description">
            Tell us what you are looking for and let our team help
            you explore sourcing and shipping options from China
            to Africa.
          </p>

          <div className="cta-actions">
            <Link
              to="/signup"
              className="cta-primary-button"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/services/product-sourcing"
              className="cta-secondary-button"
            >
              Explore Our Services
            </Link>
          </div>

          <p className="cta-reassurance">
            From sourcing to shipping, we help coordinate the journey.
          </p>
        </div>

        <div className="cta-decoration">
          <div className="cta-route">
            <span className="cta-route-point">🇨🇳</span>

            <div className="cta-route-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="cta-route-point">🌍</span>
          </div>

          <div className="cta-route-labels">
            <span>China</span>
            <span>Africa</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTASection;