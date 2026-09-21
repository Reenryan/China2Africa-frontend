import { Link } from "react-router-dom";
import "./BusinessProcurementCTA.css";

const BusinessProcurementCTA = () => {
  return (
    <section className="business-procurement-cta">
      <div className="business-procurement-cta__container">

        <div className="business-procurement-cta__content">

          <span className="business-procurement-cta__eyebrow">
            READY TO SOURCE?
          </span>

          <h2>
            Have a Product in Mind?
            <span> Let Us Help You Source It.</span>
          </h2>

          <p>
            Tell us what you are looking for, including your product
            specifications, quantity, and any reference images. Our team
            will review your request and contact you to discuss the next
            steps.
          </p>

          <div className="business-procurement-cta__actions">

            <Link
              to="/business-procurement/request"
              className="business-procurement-cta__primary"
            >
              Submit a Procurement Request
            </Link>

            <Link
              to="/contact"
              className="business-procurement-cta__secondary"
            >
              Contact Our Team
            </Link>

          </div>

          <p className="business-procurement-cta__note">
            No payment is required when submitting your initial request.
          </p>

        </div>

      </div>
    </section>
  );
};

export default BusinessProcurementCTA;