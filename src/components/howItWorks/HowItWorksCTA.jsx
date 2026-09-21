import { Link } from "react-router-dom";
import "./HowItWorksCTA.css";

const HowItWorksCTA = () => {
  return (
    <section className="how-it-works-cta">
      <div className="how-it-works-cta__container">

        <div className="how-it-works-cta__content">

          <span className="how-it-works-cta__eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            Start Your Journey
            <span> With China2Africa</span>
          </h2>

          <p>
            Create your account, submit your sourcing request, and let our
            team help coordinate the journey from product sourcing and
            procurement to shipping, arrival, and final delivery.
          </p>

          <div className="how-it-works-cta__actions">

            <Link
              to="/register"
              className="how-it-works-cta__primary"
            >
              Create Your Account
            </Link>

            <Link
              to="/contact"
              className="how-it-works-cta__secondary"
            >
              Contact Our Team
            </Link>

          </div>

          <p className="how-it-works-cta__note">
            An account is required before submitting a sourcing request.
          </p>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksCTA;