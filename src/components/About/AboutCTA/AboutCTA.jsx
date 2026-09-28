import { Link } from "react-router-dom";
import "./AboutCTA.css";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="about-cta__container">

        <div className="about-cta__content">
          <span>READY TO GET STARTED?</span>

          <h2>
            Let's Build Your
            <strong> Sourcing Journey</strong>
          </h2>

          <p>
            Whether you are looking for a specific product, working with
            multiple suppliers, or exploring opportunities in China, our
            team can help coordinate the next steps.
          </p>
        </div>

        <div className="about-cta__actions">
          <Link
            to="/register"
            className="about-cta__primary"
          >
            Start a Sourcing Request
            <span>→</span>
          </Link>

          <Link
            to="/how-it-works"
            className="about-cta__secondary"
          >
            Learn How It Works
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;