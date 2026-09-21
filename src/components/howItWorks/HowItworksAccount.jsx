import React from "react";
import { Link } from "react-router-dom";
import "./HowItWorksAccount.css";

const HowItWorksAccount = () => {
  const accountFeatures = [
    {
      icon: "👤",
      title: "Manage Your Profile",
      description:
        "Keep your customer details, contact information, and delivery information organized in your account.",
    },
    {
      icon: "📦",
      title: "Manage Your Requests",
      description:
        "View the sourcing requests you have submitted and follow their progress as our team works on them.",
    },
    {
      icon: "🚢",
      title: "View Shipment Information",
      description:
        "Access relevant shipment and cargo information associated with your confirmed orders when available.",
    },
    {
      icon: "🔔",
      title: "Receive Updates",
      description:
        "Stay informed about important updates concerning your sourcing requests, procurement, shipping, and delivery.",
    },
  ];

  return (
    <section className="how-it-works-account">
      <div className="how-it-works-account__container">

        <div className="how-it-works-account__content">

          <span className="how-it-works-account__eyebrow">
            YOUR CHINA2AFRICA ACCOUNT
          </span>

          <h2>
            Create Your Account
            <span> and Stay Connected</span>
          </h2>

          <p>
            Before submitting a sourcing request, you need to create a
            China2Africa customer account. Your account gives you a central
            place to manage your customer information and stay connected
            throughout your sourcing and shipping journey.
          </p>

          <p>
            As your request progresses, relevant information and updates can
            be associated with your account so you can easily keep track of
            what is happening with your goods.
          </p>

          <div className="how-it-works-account__actions">

            <Link
              to="/register"
              className="how-it-works-account__primary"
            >
              Create Your Account
            </Link>

            <Link
              to="/login"
              className="how-it-works-account__secondary"
            >
              Already Have an Account?
            </Link>

          </div>

        </div>

        <div className="how-it-works-account__panel">

          <div className="how-it-works-account__panel-header">

            <div className="how-it-works-account__panel-icon">
              👤
            </div>

            <div>
              <span className="how-it-works-account__panel-label">
                CUSTOMER PORTAL
              </span>

              <h3>
                Your China2Africa Account
              </h3>
            </div>

          </div>

          <div className="how-it-works-account__divider"></div>

          <div className="how-it-works-account__features">

            {accountFeatures.map((feature, index) => (
              <div
                className="how-it-works-account__feature"
                key={index}
              >

                <div className="how-it-works-account__feature-icon">
                  {feature.icon}
                </div>

                <div className="how-it-works-account__feature-content">

                  <h4>{feature.title}</h4>

                  <p>{feature.description}</p>

                </div>

              </div>
            ))}

          </div>

          <div className="how-it-works-account__portal-note">

            <span>🔐</span>

            <p>
              Your customer information and account-related details are
              available through your private account after login.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksAccount;