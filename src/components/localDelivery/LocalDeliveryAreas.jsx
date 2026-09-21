import "./LocalDeliveryAreas.css";

const LocalDeliveryAreas = () => {
  const deliveryOptions = [
    {
      icon: "🏠",
      title: "Door Delivery",
      description:
        "Provide the destination where you want your cargo delivered, and we help coordinate the local delivery arrangements toward that location.",
      features: [
        "Provide your delivery destination",
        "Suitable for homes and businesses",
        "Delivery coordinated based on your shipment",
      ],
      action: "Provide Your Destination",
    },
    {
      icon: "🏪",
      title: "Pickup & Collection Points",
      description:
        "Where China2Africa collection points are available, customers can choose a convenient pickup location and collect their cargo from there.",
      features: [
        "Choose an available collection point",
        "Convenient cargo pickup",
        "Locations added as our network grows",
      ],
      action: "View Available Locations",
    },
  ];

  return (
    <section className="local-delivery-areas">
      <div className="local-delivery-areas__container">

        <div className="local-delivery-areas__header">

          <span className="local-delivery-areas__eyebrow">
            DELIVERY & PICKUP OPTIONS
          </span>

          <h2>
            Choose How You Want to
            <span> Receive Your Cargo</span>
          </h2>

          <p>
            As China2Africa's local delivery network grows, customers may
            have different ways to receive their cargo. You can provide a
            delivery destination or, where available, choose a China2Africa
            pickup or collection point.
          </p>

        </div>

        <div className="local-delivery-areas__grid">

          {deliveryOptions.map((option, index) => (
            <div
              className="local-delivery-areas__card"
              key={index}
            >

              <div className="local-delivery-areas__card-header">

                <div className="local-delivery-areas__icon">
                  {option.icon}
                </div>

                <div>
                  <span className="local-delivery-areas__option-label">
                    OPTION {index + 1}
                  </span>

                  <h3>{option.title}</h3>
                </div>

              </div>

              <p className="local-delivery-areas__description">
                {option.description}
              </p>

              <ul className="local-delivery-areas__features">

                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}

              </ul>

              <div className="local-delivery-areas__status">

                {index === 0 ? (
                  <>
                    <span className="local-delivery-areas__status-icon">
                      📍
                    </span>

                    <span>
                      Available based on destination and delivery
                      arrangements
                    </span>
                  </>
                ) : (
                  <>
                    <span className="local-delivery-areas__status-icon">
                      🏪
                    </span>

                    <span>
                      Collection locations will be added as the network
                      expands
                    </span>
                  </>
                )}

              </div>

            </div>
          ))}

        </div>

        <div className="local-delivery-areas__network">

          <div className="local-delivery-areas__network-icon">
            🌍
          </div>

          <div className="local-delivery-areas__network-content">

            <span className="local-delivery-areas__network-label">
              OUR GROWING DELIVERY NETWORK
            </span>

            <h3>
              More Collection Locations Can Be Added Over Time
            </h3>

            <p>
              As China2Africa expands its presence across different cities,
              additional stores and collection points can be added to this
              network. Customers will then be able to choose from the
              available locations when selecting the pickup option.
            </p>

          </div>

        </div>

        <div className="local-delivery-areas__note">

          <span className="local-delivery-areas__note-icon">
            📌
          </span>

          <p>
            <strong>For now:</strong> Provide your preferred delivery
            destination when contacting our team. Available pickup or
            collection locations will depend on the China2Africa network
            operating in your area.
          </p>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryAreas;