import { Link } from "react-router-dom";
import "./TestimonialsHero.css";

const TestimonialsHero = () => {
  return (
    <section className="testimonials-hero">
      <div className="testimonials-hero__container">
        <div className="testimonials-hero__content">
          <span className="testimonials-hero__eyebrow">
            CHINA2AFRICA · TESTIMONIALS
          </span>

          <h1>
            Trusted by Businesses
            <span> Growing Across Africa</span>
          </h1>

          <p>
            Discover what customers have to say about their experience
            sourcing products, coordinating procurement, shipping cargo,
            and growing their businesses with China2Africa.
          </p>

          <div className="testimonials-hero__actions">
            <Link
              to="/register"
              className="testimonials-hero__primary"
            >
              Get Started
              <span>→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="testimonials-hero__secondary"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;