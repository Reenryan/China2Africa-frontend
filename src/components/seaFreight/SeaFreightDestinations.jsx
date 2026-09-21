import "./SeaFreightDestinations.css";

const SeaFreightDestinations = () => {
  const destinations = [
    {
      icon: "🇰🇪",
      region: "KENYA",
      title: "Mombasa Port",
      description:
        "A key entry point for cargo arriving in Kenya. We coordinate sea freight toward Mombasa and the next steps for cargo after arrival.",
      features: [
        "Cargo arrival in Mombasa",
        "Coordination after arrival",
        "Local delivery arrangements",
      ],
    },
    {
      icon: "🇹🇿",
      region: "TANZANIA",
      title: "Dar es Salaam Port",
      description:
        "An important East African shipping gateway for cargo destined for Tanzania and surrounding markets.",
      features: [
        "Cargo arrival in Dar es Salaam",
        "Coordination after arrival",
        "Local delivery arrangements",
      ],
    },
  ];

  return (
    <section className="sea-freight-destinations">
      <div className="sea-freight-destinations__container">

        <div className="sea-freight-destinations__header">
          <span className="sea-freight-destinations__eyebrow">
            SHIPPING DESTINATIONS
          </span>

          <h2>
            Connecting China
            <span> to East Africa</span>
          </h2>

          <p>
            Our sea freight service supports cargo moving from China toward
            key East African shipping gateways, including Mombasa and
            Dar es Salaam.
          </p>
        </div>

        <div className="sea-freight-destinations__grid">
          {destinations.map((destination, index) => (
            <article
              className="sea-freight-destinations__card"
              key={index}
            >
              <div className="sea-freight-destinations__top">

                <div className="sea-freight-destinations__icon">
                  {destination.icon}
                </div>

                <div>
                  <span className="sea-freight-destinations__region">
                    {destination.region}
                  </span>

                  <h3>{destination.title}</h3>
                </div>

              </div>

              <p className="sea-freight-destinations__description">
                {destination.description}
              </p>

              <div className="sea-freight-destinations__divider"></div>

              <div className="sea-freight-destinations__features">
                {destination.features.map((feature, featureIndex) => (
                  <div
                    className="sea-freight-destinations__feature"
                    key={featureIndex}
                  >
                    <span className="sea-freight-destinations__check">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="sea-freight-destinations__bottom">
          <div className="sea-freight-destinations__route">
            <span>🇨🇳</span>
            <span className="sea-freight-destinations__route-line"></span>
            <span>🌍</span>
          </div>

          <div className="sea-freight-destinations__bottom-content">
            <h3>
              China
              <span> → </span>
              East Africa
            </h3>

            <p>
              Your cargo journey begins in China and is coordinated toward
              the selected shipping gateway based on your shipping
              requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeaFreightDestinations;