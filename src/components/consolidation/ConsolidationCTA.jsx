import { Link } from "react-router-dom";
import "./ConsolidationCTA.css";

function ConsolidationCTA() {
  return (
    <section className="consolidation-cta">
      <div className="consolidation-cta-container">

        <div className="consolidation-cta-route">
          <span>CHINA 🇨🇳</span>
          <span>→</span>
          <span>AFRICA 🌍</span>
        </div>

        <span className="consolidation-cta-eyebrow">
          READY TO SOURCE?
        </span>

        <h2 className="consolidation-cta-title">
          Have products coming
          <br />
          from multiple suppliers?
        </h2>

        <p className="consolidation-cta-description">
          Tell us what you are sourcing and let China2Africa help
          coordinate the journey from your suppliers in China to
          your destination in Africa.
        </p>

        <Link
          to="/signup"
          className="consolidation-cta-button"
        >
          Start a Sourcing Request
          <span>→</span>
        </Link>

        <p className="consolidation-cta-note">
          Submit your request and we will review your sourcing
          requirements with you.
        </p>

      </div>
    </section>
  );
}

export default ConsolidationCTA;