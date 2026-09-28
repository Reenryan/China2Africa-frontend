import { Link } from "react-router-dom";
import "./TestimonialsCTA.css";

const TestimonialsCTA = () => {
  return (
    <section className="testimonials-cta">
      <div className="testimonials-cta__container">
        <div className="testimonials-cta__content">
          <span>READY TO GET STARTED?</span>

          <h2>
            Let's Help You
            <strong> Source From China</strong>
          </h2>

          <p>
            Tell us what you are looking for and our team can help
            coordinate the sourcing and procurement process.
          </p>
        </div>

        <div className="testimonials-cta__actions">
          <Link
            to="/register"
            className="testimonials-cta__primary"
          >
            Start a Sourcing Request
            <span>→</span>
          </Link>

          <Link
            to="/how-it-works"
            className="testimonials-cta__secondary"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;