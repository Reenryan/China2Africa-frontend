import React from "react";
import { Link } from "react-router-dom";
import "./HowItWorksHero.css";

const HowItWorksHero = () => {
  return (
    <section className="how-it-works-hero">
      <div className="how-it-works-hero__container">

        <div className="how-it-works-hero__content">

          <span className="how-it-works-hero__eyebrow">
            HOW CHINA2AFRICA WORKS
          </span>

          <h1>
            From Your Product Idea
            <span> to Your Door</span>
          </h1>

          <p>
            Create your account, tell us what you want to source, and let
            China2Africa coordinate the journey from supplier communication
            and procurement to shipping, arrival, and final delivery.
          </p>

          <div className="how-it-works-hero__actions">

            <Link
              to="/register"
              className="how-it-works-hero__primary"
            >
              Create Your Account
            </Link>

            <Link
              to="/contact"
              className="how-it-works-hero__secondary"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

        <div className="how-it-works-hero__journey">

          <div className="how-it-works-hero__journey-header">
            <span>YOUR JOURNEY</span>
            <span>CHINA → AFRICA</span>
          </div>

          <div className="how-it-works-hero__steps">

            <div className="how-it-works-hero__step">

              <span className="how-it-works-hero__step-number">
                01
              </span>

              <span className="how-it-works-hero__step-icon">
                👤
              </span>

              <span className="how-it-works-hero__step-label">
                Create Account
              </span>

            </div>

            <div className="how-it-works-hero__connector"></div>

            <div className="how-it-works-hero__step">

              <span className="how-it-works-hero__step-number">
                02
              </span>

              <span className="how-it-works-hero__step-icon">
                📦
              </span>

              <span className="how-it-works-hero__step-label">
                Submit Request
              </span>

            </div>

            <div className="how-it-works-hero__connector"></div>

            <div className="how-it-works-hero__step">

              <span className="how-it-works-hero__step-number">
                03
              </span>

              <span className="how-it-works-hero__step-icon">
                🤝
              </span>

              <span className="how-it-works-hero__step-label">
                Confirm Details
              </span>

            </div>

            <div className="how-it-works-hero__connector"></div>

            <div className="how-it-works-hero__step">

              <span className="how-it-works-hero__step-number">
                04
              </span>

              <span className="how-it-works-hero__step-icon">
                🚢
              </span>

              <span className="how-it-works-hero__step-label">
                Ship & Deliver
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksHero;