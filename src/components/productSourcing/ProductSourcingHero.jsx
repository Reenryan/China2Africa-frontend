import { Link } from "react-router-dom";
import "./ProductSourcingHero.css";

function ProductSourcingHero() {
  return (
    <section className="product-sourcing-hero">
      <div className="product-sourcing-hero-container">

        <div className="product-sourcing-hero-content">

          <span className="product-sourcing-hero-eyebrow">
            PRODUCT SOURCING
          </span>

          <h1 className="product-sourcing-hero-title">
            Find the right products.
            <br />
            <span>Source with confidence.</span>
          </h1>

          <p className="product-sourcing-hero-description">
            Tell us what you need and we help you source products
            from suppliers in China, coordinate the process, and
            prepare your goods for shipment to Africa.
          </p>

          <div className="product-sourcing-hero-actions">

            <Link
              to="/signup"
              className="product-sourcing-hero-button product-sourcing-hero-button-primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="product-sourcing-hero-button product-sourcing-hero-button-secondary"
            >
              See How It Works
            </Link>

          </div>

          <div className="product-sourcing-hero-trust">

            <div className="product-sourcing-trust-item">
              <span className="product-sourcing-trust-icon">🔎</span>
              <span>
                Supplier
                <br />
                Coordination
              </span>
            </div>

            <div className="product-sourcing-trust-divider"></div>

            <div className="product-sourcing-trust-item">
              <span className="product-sourcing-trust-icon">📦</span>
              <span>
                Product
                <br />
                Sourcing
              </span>
            </div>

            <div className="product-sourcing-trust-divider"></div>

            <div className="product-sourcing-trust-item">
              <span className="product-sourcing-trust-icon">✓</span>
              <span>
                Sourcing
                <br />
                Support
              </span>
            </div>

          </div>

        </div>

        <div className="product-sourcing-hero-visual">

          <div className="product-sourcing-hero-image-wrapper">

            <img
              src="/images/productSourcing.png"
              alt="Products being sourced and prepared for shipment from China"
              className="product-sourcing-hero-image"
            />

          </div>

          <div className="product-sourcing-country-badge product-sourcing-china-badge">
            🇨🇳
          </div>

          <div className="product-sourcing-country-badge product-sourcing-africa-badge">
            🌍
          </div>

          <div className="product-sourcing-route">
            <span>CHINA</span>
            <span>→</span>
            <span>AFRICA</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductSourcingHero;