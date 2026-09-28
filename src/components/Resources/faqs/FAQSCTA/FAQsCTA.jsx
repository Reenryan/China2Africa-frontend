import { Link } from "react-router-dom";

import "./FAQsCTA.css";

const FAQsCTA = () => {
  return (
    <section className="faqs-cta">
      <div className="faqs-cta__container">
        <div>
          <span className="faqs-cta__eyebrow">
            STILL HAVE QUESTIONS?
          </span>

          <h2>
            Let's Talk About Your
            <span> Sourcing Requirements</span>
          </h2>

          <p>
            If you cannot find the information you need, contact
            China2Africa and our team can help clarify your
            requirements.
          </p>
        </div>

        <Link
          to="/contact"
          className="faqs-cta__button"
        >
          Contact China2Africa
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default FAQsCTA;