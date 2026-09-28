import { Link } from "react-router-dom";
import "./TradeAcademyCTA.css";

const TradeAcademyCTA = () => {
  return (
    <section className="trade-academy-cta">
      <div className="trade-academy-cta__container">

        <div className="trade-academy-cta__content">

          <span className="trade-academy-cta__eyebrow">
            READY TO PUT YOUR KNOWLEDGE INTO ACTION?
          </span>

          <h2>
            Learn About Importing.
            <span> Then Start Your Journey.</span>
          </h2>

          <p>
            Explore our Trade Academy resources to better understand
            sourcing, procurement, shipping, and importing. When you're
            ready, create your account and tell us what you want to source
            from China.
          </p>

          <div className="trade-academy-cta__actions">

            <Link
              to="/register"
              className="trade-academy-cta__primary"
            >
              Create Your Account
            </Link>

            <Link
              to="/contact"
              className="trade-academy-cta__secondary"
            >
              Contact Our Team
            </Link>

          </div>

          <p className="trade-academy-cta__note">
            An account is required before submitting a sourcing request.
          </p>

        </div>

        <div className="trade-academy-cta__journey">

          <div className="trade-academy-cta__journey-header">

            <span>
              FROM LEARNING
            </span>

            <span>
              TO SOURCING
            </span>

          </div>

          <div className="trade-academy-cta__steps">

            <div className="trade-academy-cta__step">

              <div className="trade-academy-cta__step-icon">
                📚
              </div>

              <div>
                <span>01</span>
                <strong>Learn</strong>
                <p>
                  Understand the importing process.
                </p>
              </div>

            </div>

            <div className="trade-academy-cta__connector">
              →
            </div>

            <div className="trade-academy-cta__step">

              <div className="trade-academy-cta__step-icon">
                🔎
              </div>

              <div>
                <span>02</span>
                <strong>Explore</strong>
                <p>
                  Understand what you want to source.
                </p>
              </div>

            </div>

            <div className="trade-academy-cta__connector">
              →
            </div>

            <div className="trade-academy-cta__step">

              <div className="trade-academy-cta__step-icon">
                📦
              </div>

              <div>
                <span>03</span>
                <strong>Source</strong>
                <p>
                  Create an account and submit your request.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyCTA;