import { Link } from "react-router-dom";
import "./AirFreightCTA.css";

const AirFreightCTA = () => {
  return (
    <section className="air-freight-cta">
      <div className="air-freight-cta__container">

        <div className="air-freight-cta__content">

          <span className="air-freight-cta__eyebrow">
            READY TO SHIP BY AIR?
          </span>

          <h2>
            Tell Us About Your
            <span> Cargo Requirements</span>
          </h2>

          <p>
            Share your cargo details with our team and let us help coordinate
            the appropriate air freight arrangements from China toward your
            destination.
          </p>

          <div className="air-freight-cta__actions">

            <Link
              to="/contact"
              className="air-freight-cta__primary"
            >
              Contact Our Team
            </Link>

            <Link
              to="/how-it-works"
              className="air-freight-cta__secondary"
            >
              See How It Works
            </Link>

          </div>

          <p className="air-freight-cta__note">
            Share your product, quantity, weight, supplier location, and
            destination details where available.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AirFreightCTA;