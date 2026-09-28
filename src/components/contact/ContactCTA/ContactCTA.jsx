import { Link } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta__container">

        <div className="contact-cta__content">

          <span>LOOKING TO SOURCE PRODUCTS?</span>

          <h2>
            Start Your
            <strong> Sourcing Request</strong>
          </h2>

          <p>
            If you already know what you want to source, you can submit
            your product requirements directly through our sourcing request
            form.
          </p>

        </div>

        <Link
          to="/source-request"
          className="contact-cta__button"
        >
          Start a Sourcing Request
          <span>→</span>
        </Link>

      </div>
    </section>
  );
};

export default ContactCTA;