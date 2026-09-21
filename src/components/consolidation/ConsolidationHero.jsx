import { Link } from "react-router-dom";
import "./ConsolidationHero.css";

function ConsolidationHero() {
  return (
    <section className="consolidation-hero">
      <div className="consolidation-hero-container">

        <div className="consolidation-hero-content">

          <span className="consolidation-hero-eyebrow">
            CARGO CONSOLIDATION
          </span>

          <h1 className="consolidation-hero-title">
            Combine your purchases.
            <br />
            <span>Ship smarter.</span>
          </h1>

          <p className="consolidation-hero-description">
            Source products from multiple suppliers in China and
            consolidate your goods into one coordinated shipment
            for simpler cargo handling and shipping to Africa.
          </p>

          <div className="consolidation-hero-actions">

            <Link
              to="/signup"
              className="consolidation-hero-button consolidation-hero-button-primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="consolidation-hero-button consolidation-hero-button-secondary"
            >
              See How It Works
            </Link>

          </div>

        </div>

        <div className="consolidation-hero-visual">

          <div className="consolidation-hero-image-wrapper">

            <img
              src="/images/consolidation.png"
              alt="Cargo consolidation and shipping"
              className="consolidation-hero-image"
            />

          </div>

          <div className="consolidation-country-badge consolidation-china-badge">
            🇨🇳
          </div>

          <div className="consolidation-country-badge consolidation-africa-badge">
            🌍
          </div>

          <div className="consolidation-route">
            <span>CHINA</span>
            <span>→</span>
            <span>AFRICA</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ConsolidationHero;