import { Link } from "react-router-dom";
import "./TradeAcademyHero.css";

const TradeAcademyHero = () => {
  return (
    <section className="trade-academy-hero">
      <div className="trade-academy-hero__container">

        <div className="trade-academy-hero__content">

          <span className="trade-academy-hero__eyebrow">
            CHINA2AFRICA TRADE ACADEMY
          </span>

          <h1>
            Learn. Understand.
            <span> Import With Confidence.</span>
          </h1>

          <p>
            Practical guides and resources to help African businesses and
            importers understand product sourcing, supplier coordination,
            procurement, shipping, and importing from China.
          </p>

          <div className="trade-academy-hero__actions">

            <a
              href="#trade-academy-categories"
              className="trade-academy-hero__primary"
            >
              Explore the Academy
            </a>

            <Link
              to="/contact"
              className="trade-academy-hero__secondary"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

        <div className="trade-academy-hero__panel">

          <div className="trade-academy-hero__panel-header">

            <div className="trade-academy-hero__panel-icon">
              📚
            </div>

            <div>
              <span>
                LEARNING HUB
              </span>

              <h2>
                Trade Academy
              </h2>
            </div>

          </div>

          <div className="trade-academy-hero__divider"></div>

          <div className="trade-academy-hero__topics">

            <div className="trade-academy-hero__topic">
              <span>📦</span>
              <div>
                <strong>Product Sourcing</strong>
                <small>
                  Understand what to consider when sourcing products.
                </small>
              </div>
            </div>

            <div className="trade-academy-hero__topic">
              <span>🏭</span>
              <div>
                <strong>Supplier Coordination</strong>
                <small>
                  Learn about working with suppliers in China.
                </small>
              </div>
            </div>

            <div className="trade-academy-hero__topic">
              <span>🚢</span>
              <div>
                <strong>Shipping & Logistics</strong>
                <small>
                  Understand sea freight, air freight, and consolidation.
                </small>
              </div>
            </div>

            <div className="trade-academy-hero__topic">
              <span>🌍</span>
              <div>
                <strong>Importing to Africa</strong>
                <small>
                  Explore practical information for African importers.
                </small>
              </div>
            </div>

          </div>

          <div className="trade-academy-hero__route">

            <span>🇨🇳</span>

            <div className="trade-academy-hero__route-line">
              <span>LEARN → SOURCE → SHIP</span>
            </div>

            <span>🌍</span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyHero;