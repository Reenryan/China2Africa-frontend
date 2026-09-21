import "./AirFreightDestinations.css";

const AirFreightDestinations = () => {
  const destinations = [
    {
      icon: "🇰🇪",
      country: "Kenya",
      airport: "Jomo Kenyatta International Airport",
      code: "NBO",
      description:
        "Air cargo arriving in Kenya through Jomo Kenyatta International Airport, with coordination for the next steps toward local delivery.",
      features: [
        "Air cargo arrival",
        "Arrival coordination",
        "Local delivery arrangements",
      ],
    },
    {
      icon: "🌍",
      country: "Additional Destination",
      airport: "Airport Destination — To Be Confirmed",
      code: "TBC",
      description:
        "Additional African air freight destinations will be added once the available airport routes and arrangements are confirmed.",
      features: [
        "Destination to be confirmed",
        "Air cargo arrival",
        "Delivery arrangements where applicable",
      ],
    },
  ];

  return (
    <section className="air-freight-destinations">
      <div className="air-freight-destinations__container">

        <div className="air-freight-destinations__header">

          <span className="air-freight-destinations__eyebrow">
            AIR FREIGHT DESTINATIONS
          </span>

          <h2>
            From China
            <span> to African Destinations</span>
          </h2>

          <p>
            We coordinate air freight arrangements from suppliers in China
            toward selected African destinations. Available routes and
            destination arrangements depend on the cargo and shipping
            requirements.
          </p>

        </div>

        <div className="air-freight-destinations__route">

          <div className="air-freight-destinations__route-point">
            <span className="air-freight-destinations__route-icon">
              🇨🇳
            </span>

            <div>
              <span>ORIGIN</span>
              <h3>China</h3>
            </div>
          </div>

          <div className="air-freight-destinations__route-line">
            <span>✈️</span>
          </div>

          <div className="air-freight-destinations__route-point">
            <span className="air-freight-destinations__route-icon">
              🌍
            </span>

            <div>
              <span>DESTINATION</span>
              <h3>Africa</h3>
            </div>
          </div>

        </div>

        <div className="air-freight-destinations__grid">

          {destinations.map((destination, index) => (
            <div
              className="air-freight-destinations__card"
              key={index}
            >

              <div className="air-freight-destinations__card-top">

                <div className="air-freight-destinations__country">
                  <span className="air-freight-destinations__country-icon">
                    {destination.icon}
                  </span>

                  <span>{destination.country}</span>
                </div>

                <span className="air-freight-destinations__code">
                  {destination.code}
                </span>

              </div>

              <div className="air-freight-destinations__divider"></div>

              <span className="air-freight-destinations__label">
                AIRPORT
              </span>

              <h3>{destination.airport}</h3>

              <p>{destination.description}</p>

              <ul>
                {destination.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        <div className="air-freight-destinations__note">

          <span>📍</span>

          <p>
            <strong>Destination availability:</strong> Air freight routes
            and airport arrangements may vary depending on the cargo,
            destination, airline, and applicable requirements. Contact our
            team to confirm the available destination for your shipment.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AirFreightDestinations;