import "./SeaFreightCargo.css";

const SeaFreightCargo = () => {
  const cargoTypes = [
    {
      icon: "📦",
      title: "General Merchandise",
      description:
        "Commercial goods and everyday products being imported from China.",
    },
    {
      icon: "🪑",
      title: "Furniture & Household Goods",
      description:
        "Larger household items, furniture, fittings, and related products.",
    },
    {
      icon: "🏭",
      title: "Business Supplies",
      description:
        "Equipment, materials, stock, and supplies needed by growing businesses.",
    },
    {
      icon: "👕",
      title: "Clothing & Accessories",
      description:
        "Clothing, footwear, bags, accessories, and other retail merchandise.",
    },
    {
      icon: "🔧",
      title: "Tools & Equipment",
      description:
        "Tools, machinery-related items, and equipment for commercial use.",
    },
    {
      icon: "🛍️",
      title: "Retail Products",
      description:
        "Products intended for shops, distributors, wholesalers, and other businesses.",
    },
  ];

  const cargoDetails = [
    "Type of goods",
    "Quantity",
    "Estimated weight",
    "Dimensions or package size",
    "Supplier or collection location",
    "Intended destination",
  ];

  return (
    <section className="sea-freight-cargo">
      <div className="sea-freight-cargo__container">

        <div className="sea-freight-cargo__header">
          <span className="sea-freight-cargo__eyebrow">
            CARGO INFORMATION
          </span>

          <h2>
            Tell Us About
            <span> Your Cargo</span>
          </h2>

          <p>
            Different types of goods can have different shipping requirements.
            Providing accurate cargo information helps us understand your
            shipment and determine the appropriate next steps.
          </p>
        </div>

        <div className="sea-freight-cargo__types">
          {cargoTypes.map((cargo, index) => (
            <div
              className="sea-freight-cargo__card"
              key={index}
            >
              <div className="sea-freight-cargo__icon">
                {cargo.icon}
              </div>

              <h3>{cargo.title}</h3>

              <p>{cargo.description}</p>
            </div>
          ))}
        </div>

        <div className="sea-freight-cargo__details">

          <div className="sea-freight-cargo__details-content">
            <span className="sea-freight-cargo__details-label">
              BEFORE SHIPPING
            </span>

            <h3>
              Information We Need
              <span> From You</span>
            </h3>

            <p>
              When discussing your shipment with our team, having the basic
              cargo details available helps us understand your requirements
              and coordinate the next steps.
            </p>
          </div>

          <div className="sea-freight-cargo__checklist">
            {cargoDetails.map((detail, index) => (
              <div
                className="sea-freight-cargo__check"
                key={index}
              >
                <span className="sea-freight-cargo__check-icon">
                  ✓
                </span>

                <span>{detail}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="sea-freight-cargo__note">
          <span className="sea-freight-cargo__note-icon">
            ℹ️
          </span>

          <p>
            Cargo acceptance and shipping requirements may depend on the type
            of goods, applicable regulations, and shipping arrangements.
            Contact our team before making shipping arrangements for
            restricted or special cargo.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SeaFreightCargo;