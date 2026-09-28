import { Link } from "react-router-dom";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">

        <div className="about-hero__content">

          <span className="about-hero__eyebrow">
            CHINA2AFRICA · ABOUT US
          </span>

          <h1>
            Connecting African Businesses
            <span>With Opportunities in China</span>
          </h1>

          <p>
            China2Africa helps African businesses source products from China,
            coordinate suppliers, organize procurement, consolidate cargo,
            and move goods towards their destination.
          </p>

          <div className="about-hero__actions">

            <Link
              to="/register"
              className="about-hero__primary"
            >
              Get Started
              <span>→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="about-hero__secondary"
            >
              How It Works
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;