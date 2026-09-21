import "./HowItWorksShipping.css";

const HowItWorksShipping = () => {
  const shippingSteps = [
    {
      number: "01",
      icon: "🛒",
      title: "Procurement Begins",
      description:
        "Once the relevant product and sourcing details have been confirmed, the procurement stage can proceed according to the agreed arrangements.",
    },
    {
      number: "02",
      icon: "💳",
      title: "Payment & Shipping Details",
      description:
        "The relevant payment information and shipping arrangements are communicated and confirmed with you before the shipment proceeds.",
    },
    {
      number: "03",
      icon: "📦",
      title: "Cargo Preparation",
      description:
        "Goods are coordinated for collection, preparation, and consolidation where applicable, based on the shipment requirements.",
    },
    {
      number: "04",
      icon: "🚢",
      title: "Shipping",
      description:
        "Your cargo is arranged for the appropriate shipping method, such as sea freight or air freight, depending on the agreed arrangements.",
    },
    {
      number: "05",
      icon: "🌍",
      title: "Arrival",
      description:
        "Once the cargo reaches the relevant destination, China2Africa coordinates the next steps toward local delivery or collection.",
    },
  ];

  const shippingOptions = [
    {
      icon: "🚢",
      title: "Sea Freight",
      description:
        "A shipping option for commercial and larger cargo moving from China toward selected African destinations.",
      points: [
        "Suitable for larger cargo",
        "Cargo consolidation where applicable",
        "Arrival and local delivery coordination",
      ],
    },
    {
      icon: "✈️",
      title: "Air Freight",
      description:
        "An alternative for customers whose cargo requirements are better suited to air transportation.",
      points: [
        "Alternative to sea freight",
        "Suitable for selected cargo",
        "Arrival and local delivery coordination",
      ],
    },
  ];

  const customerUpdates = [
    {
      icon: "📦",
      title: "Cargo Information",
      description:
        "Relevant information about your goods and shipment can be associated with your customer account.",
    },
    {
      icon: "🚚",
      title: "Shipping Status",
      description:
        "Where status information is available, relevant updates can be communicated as your shipment progresses.",
    },
    {
      icon: "📍",
      title: "Arrival Information",
      description:
        "You can receive relevant information about cargo arrival and the next steps toward delivery or collection.",
    },
  ];

  return (
    <section className="how-it-works-shipping">
      <div className="how-it-works-shipping__container">

        <div className="how-it-works-shipping__header">

          <span className="how-it-works-shipping__eyebrow">
            STEP 05 · PROCUREMENT & SHIPPING
          </span>

          <h2>
            From Confirmed Procurement
            <span> to Cargo Arrival</span>
          </h2>

          <p>
            Once the relevant sourcing and procurement details have been
            confirmed, we coordinate the payment and shipping arrangements,
            prepare the cargo, and organize its movement toward the
            destination.
          </p>

        </div>

        <div className="how-it-works-shipping__timeline">

          {shippingSteps.map((step, index) => (
            <div
              className="how-it-works-shipping__timeline-item"
              key={index}
            >

              <div className="how-it-works-shipping__timeline-marker">
                <span>{step.number}</span>
              </div>

              {index < shippingSteps.length - 1 && (
                <div className="how-it-works-shipping__timeline-line"></div>
              )}

              <div className="how-it-works-shipping__timeline-card">

                <div className="how-it-works-shipping__timeline-icon">
                  {step.icon}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="how-it-works-shipping__methods">

          <div className="how-it-works-shipping__methods-header">

            <span>
              SHIPPING OPTIONS
            </span>

            <h3>
              Choose the Shipping Arrangement
              <span> That Fits Your Cargo</span>
            </h3>

            <p>
              The appropriate shipping method depends on the cargo, destination,
              requirements, and arrangements confirmed during the sourcing and
              procurement process.
            </p>

          </div>

          <div className="how-it-works-shipping__methods-grid">

            {shippingOptions.map((option, index) => (
              <div
                className="how-it-works-shipping__method-card"
                key={index}
              >

                <div className="how-it-works-shipping__method-header">

                  <div className="how-it-works-shipping__method-icon">
                    {option.icon}
                  </div>

                  <div>
                    <span>
                      OPTION {index + 1}
                    </span>

                    <h4>{option.title}</h4>
                  </div>

                </div>

                <p className="how-it-works-shipping__method-description">
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

        <div className="how-it-works-shipping__updates">

          <div className="how-it-works-shipping__updates-content">

            <span className="how-it-works-shipping__updates-eyebrow">
              STAY INFORMED
            </span>

            <h3>
              Keep Your Shipment Information
              <span> Connected to Your Account</span>
            </h3>

            <p>
              Relevant shipment information and updates can be associated with
              your customer account so you can stay informed throughout the
              journey from procurement toward arrival.
            </p>

            <div className="how-it-works-shipping__updates-grid">

              {customerUpdates.map((update, index) => (
                <div
                  className="how-it-works-shipping__update"
                  key={index}
                >

                  <div className="how-it-works-shipping__update-icon">
                    {update.icon}
                  </div>

                  <div>
                    <h4>{update.title}</h4>
                    <p>{update.description}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="how-it-works-shipping__route">

            <div className="how-it-works-shipping__route-header">
              <span>YOUR CARGO JOURNEY</span>
              <span>CHINA → AFRICA</span>
            </div>

            <div className="how-it-works-shipping__route-path">

              <div className="how-it-works-shipping__route-point">

                <span className="how-it-works-shipping__route-icon">
                  🇨🇳
                </span>

                <div>
                  <small>ORIGIN</small>
                  <strong>China</strong>
                </div>

              </div>

              <div className="how-it-works-shipping__route-line">
                <span>→</span>
              </div>

              <div className="how-it-works-shipping__route-point">

                <span className="how-it-works-shipping__route-icon">
                  📦
                </span>

                <div>
                  <small>CARGO</small>
                  <strong>In Transit</strong>
                </div>

              </div>

              <div className="how-it-works-shipping__route-line">
                <span>→</span>
              </div>

              <div className="how-it-works-shipping__route-point">

                <span className="how-it-works-shipping__route-icon">
                  🌍
                </span>

                <div>
                  <small>DESTINATION</small>
                  <strong>Africa</strong>
                </div>

              </div>

            </div>

            <div className="how-it-works-shipping__route-note">
              <span>📍</span>

              <p>
                Destination and shipping arrangements depend on the confirmed
                shipment details and available logistics options.
              </p>
            </div>

          </div>

        </div>

        <div className="how-it-works-shipping__notice">

          <span className="how-it-works-shipping__notice-icon">
            💡
          </span>

          <div>

            <span className="how-it-works-shipping__notice-label">
              SHIPPING INFORMATION
            </span>

            <h3>
              Shipping arrangements depend on your cargo and destination
            </h3>

            <p>
              Shipping method, consolidation, destination arrangements,
              documentation, and other requirements can vary depending on the
              goods and shipment. Our team communicates the relevant
              arrangements before the shipment proceeds.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksShipping;