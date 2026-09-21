import { Link } from "react-router-dom";
import "./SeaFreightHero.css";

const SeaFreightHero = () => {
  return (
    <section className="sea-freight-hero">
      <div className="sea-freight-hero__container">

        <div className="sea-freight-hero__content">

          <span className="sea-freight-hero__eyebrow">
            SEA FREIGHT FROM CHINA TO AFRICA
          </span>

          <h1>
            Move Your Cargo Across
            <span> Oceans With Confidence</span>
          </h1>

          <p>
            Ship your goods from China to Africa through coordinated sea
            freight solutions designed for businesses, wholesalers, and
            importers moving commercial cargo.
          </p>

          <div className="sea-freight-hero__actions">
            <Link
              to="/contact"
              className="sea-freight-hero__primary"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SeaFreightHero;