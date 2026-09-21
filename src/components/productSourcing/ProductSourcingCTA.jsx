import { Link } from "react-router-dom";
import "./ProductSourcingCTA.css";

function ProductSourcingCTA() {
  return (
    <section className="product-sourcing-cta">
      <div className="product-sourcing-cta-container">

        <div className="product-sourcing-cta-content">

          <span className="product-sourcing-cta-eyebrow">
            READY TO SOURCE?
          </span>

          <h2 className="product-sourcing-cta-title">
            Tell us what you need.
            <br />
            <span>We’ll help you source it.</span>
          </h2>

          <p className="product-sourcing-cta-description">
            Whether you already know exactly what you want or you
            are still exploring product options, send us your
            requirements and let China2Africa help coordinate the
            sourcing process from China to Africa.
          </p>

          <div className="product-sourcing-cta-actions">

            <Link
              to="/signup"
              className="product-sourcing-cta-button product-sourcing-cta-button-primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="product-sourcing-cta-button product-sourcing-cta-button-secondary"
            >
              Contact Us
            </Link>

          </div>

          <div className="product-sourcing-cta-trust">

            <div className="product-sourcing-cta-trust-item">
              <span className="product-sourcing-cta-check">
                ✓
              </span>

              <span>
                Supplier coordination
              </span>
            </div>

            <div className="product-sourcing-cta-divider"></div>

            <div className="product-sourcing-cta-trust-item">
              <span className="product-sourcing-cta-check">
                ✓
              </span>

              <span>
                Product sourcing support
              </span>
            </div>

            <div className="product-sourcing-cta-divider"></div>

            <div className="product-sourcing-cta-trust-item">
              <span className="product-sourcing-cta-check">
                ✓
              </span>

              <span>
                Shipment coordination
              </span>
            </div>

          </div>

        </div>

        <div className="product-sourcing-cta-visual">

          <div className="product-sourcing-cta-circle product-sourcing-cta-circle-large"></div>

          <div className="product-sourcing-cta-circle product-sourcing-cta-circle-medium"></div>

          <div className="product-sourcing-cta-card">

            <div className="product-sourcing-cta-card-icon">
              🇨🇳
            </div>

            <div className="product-sourcing-cta-card-content">
              <span>
                YOUR REQUIREMENTS
              </span>

              <strong>
                → China
              </strong>
            </div>

          </div>

          <div className="product-sourcing-cta-route-line"></div>

          <div className="product-sourcing-cta-card product-sourcing-cta-card-africa">

            <div className="product-sourcing-cta-card-icon">
              🌍
            </div>

            <div className="product-sourcing-cta-card-content">
              <span>
                YOUR DESTINATION
              </span>

              <strong>
                Africa
              </strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductSourcingCTA;
