import "./AirFreightCargo.css";

const AirFreightCargo = () => {
  const cargoTypes = [
    {
      icon: "👕",
      title: "Clothing & Accessories",
      description:
        "Fashion items, clothing, shoes, bags, and related accessories.",
    },
    {
      icon: "📱",
      title: "Electronics & Accessories",
      description:
        "Selected electronic products, devices, accessories, and related goods subject to applicable requirements.",
    },
    {
      icon: "🧴",
      title: "Personal & Household Products",
      description:
        "Selected household, personal-use, and everyday consumer products.",
    },
    {
      icon: "🛍️",
      title: "Retail Products",
      description:
        "Commercial products intended for shops, online businesses, and other retail activities.",
    },
    {
      icon: "🔧",
      title: "Tools & Equipment",
      description:
        "Selected tools, equipment, and business-related items depending on applicable shipping requirements.",
    },
    {
      icon: "📦",
      title: "Other Commercial Goods",
      description:
        "Other goods may be considered based on their nature, size, weight, destination, and applicable regulations.",
    },
  ];

  const requirements = [
    "Type and description of goods",
    "Quantity of items or packages",
    "Estimated weight",
    "Package dimensions or size",
    "Supplier or collection location in China",
    "Intended destination",
  ];

  return (
    <section className="air-freight-cargo">
      <div className="air-freight-cargo__container">

        <div className="air-freight-cargo__header">

          <span className="air-freight-cargo__eyebrow">
            AIR FREIGHT CARGO
          </span>

          <h2>
            What Can You
            <span> Ship by Air?</span>
          </h2>

          <p>
            Air freight can be suitable for a wide range of commercial and
            consumer goods. Cargo acceptance depends on the nature of the
            goods and the applicable airline, security, customs, and
            regulatory requirements.
          </p>

        </div>

        <div className="air-freight-cargo__content">

          <div className="air-freight-cargo__types">

            <div className="air-freight-cargo__section-heading">
              <h3>Common Cargo Categories</h3>

              <p>
                Share details about your goods with us so we can help
                determine the appropriate shipping arrangements.
              </p>
            </div>

            <div className="air-freight-cargo__grid">

              {cargoTypes.map((cargo, index) => (
                <div
                  className="air-freight-cargo__card"
                  key={index}
                >

                  <div className="air-freight-cargo__icon">
                    {cargo.icon}
                  </div>

                  <h4>{cargo.title}</h4>

                  <p>{cargo.description}</p>

                </div>
              ))}

            </div>

          </div>

          <div className="air-freight-cargo__requirements">

            <div className="air-freight-cargo__requirements-header">

              <span className="air-freight-cargo__requirements-icon">
                📋
              </span>

              <div>
                <span className="air-freight-cargo__requirements-label">
                  WHAT WE NEED
                </span>

                <h3>
                  Cargo Information
                </h3>
              </div>

            </div>

            <p className="air-freight-cargo__requirements-intro">
              To help us understand your shipment and coordinate the next
              steps, provide the following information where available:
            </p>

            <ul className="air-freight-cargo__list">

              {requirements.map((requirement, index) => (
                <li key={index}>

                  <span className="air-freight-cargo__check">
                    ✓
                  </span>

                  <span>{requirement}</span>

                </li>
              ))}

            </ul>

            <div className="air-freight-cargo__notice">

              <span>⚠️</span>

              <p>
                Some goods may be restricted, require additional
                documentation, or be subject to special handling and
                regulatory requirements. We will advise you where additional
                information or arrangements are needed.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AirFreightCargo;