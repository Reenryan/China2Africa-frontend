import "./SeaFreightServices.css";

const SeaFreightServices = () => {
  const services = [
    {
      icon: "📦",
      title: "Cargo Consolidation",
      description:
        "Combine eligible goods from different purchases into coordinated cargo for sea freight.",
    },
    {
      icon: "🚢",
      title: "Sea Freight Coordination",
      description:
        "Coordinate the movement of your cargo from China toward its intended African destination.",
    },
    {
      icon: "📋",
      title: "Cargo Preparation",
      description:
        "Help organize the necessary cargo details and requirements before shipment.",
    },
    {
      icon: "🏭",
      title: "Supplier Coordination",
      description:
        "Coordinate with suppliers where necessary to help ensure goods are prepared for shipment.",
    },
    {
      icon: "🔍",
      title: "Cargo Information",
      description:
        "Work with you to understand the type, quantity, and requirements of your goods before shipping.",
    },
    {
      icon: "🌍",
      title: "Arrival & Local Delivery",
      description:
        "Coordinate the next steps after cargo arrives, including local delivery arrangements where applicable.",
    },
  ];

  return (
    <section className="sea-freight-services">
      <div className="sea-freight-services__container">

        <div className="sea-freight-services__header">
          <span className="sea-freight-services__eyebrow">
            OUR SEA FREIGHT SERVICES
          </span>

          <h2>
            From Cargo Preparation
            <span> to Arrival</span>
          </h2>

          <p>
            We coordinate the key stages involved in moving your goods by sea,
            helping you understand what is required before your cargo begins
            its journey from China to Africa.
          </p>
        </div>

        <div className="sea-freight-services__grid">
          {services.map((service, index) => (
            <div
              className="sea-freight-services__card"
              key={index}
            >
              <div className="sea-freight-services__icon">
                {service.icon}
              </div>

              <div className="sea-freight-services__content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeaFreightServices;