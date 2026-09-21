import { Link } from "react-router-dom";
import "./LocalDeliveryCTA.css";

const LocalDeliveryCTA = () => {
  return (
    <section className="local-delivery-cta">
      <div className="local-delivery-cta__container">

        <div className="local-delivery-cta__content">

          <span className="local-delivery-cta__eyebrow">
            READY TO RECEIVE YOUR CARGO?
          </span>

          <h2>
            Tell Us Where You Want
            <span> Your Cargo Delivered</span>
          </h2>

          <p>
            Share your delivery destination or let us know if you would
            prefer to collect your cargo from an available China2Africa
            pickup location. Our team will help coordinate the next steps
            for your shipment.
          </p>

          <div className="local-delivery-cta__actions">

            <Link
              to="/contact"
              className="local-delivery-cta__primary"
            >
              Contact Our Team
            </Link>

            <Link
              to="/how-it-works"
              className="local-delivery-cta__secondary"
            >
              See How It Works
            </Link>

          </div>

          <p className="local-delivery-cta__note">
            Have your delivery destination and relevant cargo details
            available when contacting us.
          </p>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryCTA;