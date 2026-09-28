import { Link } from "react-router-dom";

import "./FAQSHero.css";

const FAQsHero = () => {
  return (
    <section className="faqs-hero">
      <div className="faqs-hero__container">
        <div className="faqs-hero__content">
          <span className="faqs-hero__eyebrow">
            CHINA2AFRICA · FAQs
          </span>

          <h1>
            Frequently Asked
            <span> Questions</span>
          </h1>

          <p>
            Find answers to common questions about sourcing products,
            suppliers, procurement, shipping, importing, and delivery.
          </p>

          <div className="faqs-hero__actions">
            <Link
              to="/services/product-sourcing"   // CONVERT THIS TO LOGIN OR SIGNUP PAGE LATER
              className="faqs-hero__primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="faqs-hero__secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsHero;