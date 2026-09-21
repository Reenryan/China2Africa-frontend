import { Link } from "react-router-dom";
import "./SeaFreightCTA.css";

const SeaFreightCTA = () => {
  return (
    <section className="sea-freight-cta">
      <div className="sea-freight-cta__container">

        <div className="sea-freight-cta__content">

          <span className="sea-freight-cta__eyebrow">
            READY TO MOVE YOUR CARGO?
          </span>

          <h2>
            Let's Plan Your
            <span> Sea Freight Journey</span>
          </h2>

          <p>
            Have goods you want to ship from China to Africa? Share your cargo
            requirements with our team and let's discuss the appropriate next
            steps for your shipment.
          </p>

          <div className="sea-freight-cta__actions">
            <Link
              to="/contact"
              className="sea-freight-cta__primary"
            >
              Contact Our Team
            </Link>

            <Link
              to="/how-it-works"
              className="sea-freight-cta__secondary"
            >
              See How It Works
            </Link>
          </div>

          <p className="sea-freight-cta__note">
            Tell us about your cargo, destination, and shipping requirements
            when contacting us.
          </p>

        </div>

      </div>
    </section>
  );
};

export default SeaFreightCTA;