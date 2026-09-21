import React from "react";
import { Link } from "react-router-dom";
import "./HowItWorksDelivery.css";

const HowItWorksDelivery = () => {
  const deliverySteps = [
    {
      number: "01",
      icon: "📍",
      title: "Confirm Your Destination",
      description:
        "Your delivery destination or preferred pickup option is confirmed based on the shipment and available arrangements.",
    },
    {
      number: "02",
      icon: "📦",
      title: "Cargo Arrives",
      description:
        "Once your cargo reaches the relevant destination, our team coordinates the next steps toward local delivery or collection.",
    },
    {
      number: "03",
      icon: "🚚",
      title: "Local Delivery Coordination",
      description:
        "We coordinate the appropriate local movement of your cargo based on the destination, shipment requirements, and available delivery arrangements.",
    },
    {
      number: "04",
      icon: "🏠",
      title: "Door Delivery or Pickup",
      description:
        "Your cargo can be delivered toward the provided destination or collected from an available China2Africa pickup or collection point.",
    },
    {
      number: "05",
      icon: "🤝",
      title: "Receive Your Cargo",
      description:
        "The final stage is completed when your cargo reaches your delivery destination or is collected from the agreed pickup location.",
    },
  ];

  const deliveryOptions = [
    {
      icon: "🏠",
      title: "Door Delivery",
      description:
        "Provide the destination where you want your cargo delivered. Our team helps coordinate the local delivery arrangements for your shipment.",
      points: [
        "Provide your preferred destination",
        "Suitable for homes and businesses",
        "Delivery coordinated around your shipment",
      ],
    },
    {
      icon: "🏪",
      title: "Pickup & Collection",
      description:
        "Where a China2Africa collection point is available, you may be able to collect your cargo from a convenient location instead of requesting door delivery.",
      points: [
        "Choose an available collection point",
        "Collect your cargo directly",
        "Availability depends on the local network",
      ],
    },
  ];

  return (
    <section className="how-it-works-delivery">
      <div className="how-it-works-delivery__container">

        {/* Header */}
        <div className="how-it-works-delivery__header">

          <span className="how-it-works-delivery__eyebrow">
            FINAL STAGE · DELIVERY & COLLECTION
          </span>

          <h2>
            From Cargo Arrival
            <span> to Receiving Your Goods</span>
          </h2>

          <p>
            Once your cargo reaches the relevant destination, China2Africa
            helps coordinate the final stage of the journey. Depending on the
            available arrangements, your cargo can be delivered to your
            destination or collected from an available pickup point.
          </p>

        </div>

        {/* Delivery Journey */}
        <div className="how-it-works-delivery__journey">

          {deliverySteps.map((step, index) => (
            <React.Fragment key={index}>

              <div className="how-it-works-delivery__step">

                <div className="how-it-works-delivery__step-top">

                  <span className="how-it-works-delivery__number">
                    {step.number}
                  </span>

                  <span className="how-it-works-delivery__icon">
                    {step.icon}
                  </span>

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

              {index < deliverySteps.length - 1 && (
                <div className="how-it-works-delivery__connector">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        {/* Delivery Options */}
        <div className="how-it-works-delivery__options">

          <div className="how-it-works-delivery__options-header">

            <span>
              HOW YOU CAN RECEIVE YOUR CARGO
            </span>

            <h3>
              Choose the Arrangement
              <span> That Works for You</span>
            </h3>

            <p>
              The available delivery arrangement depends on your destination,
              cargo requirements, and the China2Africa delivery or collection
              network available at the time.
            </p>

          </div>

          <div className="how-it-works-delivery__options-grid">

            {deliveryOptions.map((option, index) => (
              <div
                className="how-it-works-delivery__option-card"
                key={index}
              >

                <div className="how-it-works-delivery__option-header">

                  <div className="how-it-works-delivery__option-icon">
                    {option.icon}
                  </div>

                  <div>
                    <span>
                      OPTION {index + 1}
                    </span>

                    <h4>
                      {option.title}
                    </h4>
                  </div>

                </div>

                <p className="how-it-works-delivery__option-description">
                  {option.description}
                </p>

                <ul>
                  {option.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <span>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>

        {/* Delivery Journey Preview */}
        <div className="how-it-works-delivery__route">

          <div className="how-it-works-delivery__route-content">

            <span className="how-it-works-delivery__route-eyebrow">
              YOUR FINAL JOURNEY
            </span>

            <h3>
              From Arrival Point
              <span> to You</span>
            </h3>

            <p>
              Once your cargo arrives, the remaining journey depends on the
              delivery option and destination confirmed for your shipment.
              China2Africa coordinates the relevant next steps with you.
            </p>

          </div>

          <div className="how-it-works-delivery__route-visual">

            <div className="how-it-works-delivery__route-point">

              <span className="how-it-works-delivery__route-icon">
                🌍
              </span>

              <div>
                <small>ARRIVAL</small>
                <strong>Cargo Arrives</strong>
              </div>

            </div>

            <div className="how-it-works-delivery__route-line">
              <span>→</span>
            </div>

            <div className="how-it-works-delivery__route-point">

              <span className="how-it-works-delivery__route-icon">
                🚚
              </span>

              <div>
                <small>LOCAL MOVEMENT</small>
                <strong>Delivery / Collection</strong>
              </div>

            </div>

            <div className="how-it-works-delivery__route-line">
              <span>→</span>
            </div>

            <div className="how-it-works-delivery__route-point">

              <span className="how-it-works-delivery__route-icon">
                🏠
              </span>

              <div>
                <small>FINAL DESTINATION</small>
                <strong>You Receive Your Cargo</strong>
              </div>

            </div>

          </div>

        </div>

        {/* Important Notice */}
        <div className="how-it-works-delivery__notice">

          <span className="how-it-works-delivery__notice-icon">
            📌
          </span>

          <div>

            <span className="how-it-works-delivery__notice-label">
              DELIVERY INFORMATION
            </span>

            <h3>
              Delivery arrangements depend on your destination and shipment
            </h3>

            <p>
              Door delivery, pickup locations, delivery availability, and
              local arrangements may vary depending on the destination, cargo,
              and China2Africa's available delivery network. Our team
              communicates the relevant arrangements for your shipment.
            </p>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="how-it-works-delivery__bottom">

          <div className="how-it-works-delivery__bottom-icon">
            📦
          </div>

          <div className="how-it-works-delivery__bottom-content">

            <span>
              READY FOR THE NEXT STEP?
            </span>

            <h3>
              Tell Us Where You Want Your Cargo Delivered
            </h3>

            <p>
              Provide your destination when submitting your sourcing request
              or when discussing your shipment with our team.
            </p>

          </div>

          <Link
            to="/contact"
            className="how-it-works-delivery__bottom-button"
          >
            Contact Our Team
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksDelivery;