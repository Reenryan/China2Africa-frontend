import { Link } from "react-router-dom";
import "./AirFreightHero.css";

const AirFreightHero = () => {
  return (
    <section className="air-freight-hero">
      <div className="air-freight-hero__container">

        <div className="air-freight-hero__content">

          <span className="air-freight-hero__eyebrow">
            AIR FREIGHT FROM CHINA TO AFRICA
          </span>

          <h1>
            Move Your Cargo
            <span> By Air With Confidence</span>
          </h1>

          <p>
            Ship your goods from China to Africa through coordinated air
            freight solutions for businesses, importers, and customers who
            need an alternative to sea freight.
          </p>

          <div className="air-freight-hero__actions">
            <Link
              to="/contact"
              className="air-freight-hero__primary"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AirFreightHero;