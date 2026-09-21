import "./AirFreightServices.css";

const AirFreightServices = () => {
  const services = [
    {
      icon: "✈️",
      title: "Air Cargo Coordination",
      description:
        "We help coordinate air freight arrangements based on your cargo requirements, destination, and preferred shipping option.",
    },
    {
      icon: "📦",
      title: "Cargo Preparation",
      description:
        "We help ensure your goods and shipment information are properly prepared before they are arranged for air transportation.",
    },
    {
      icon: "🤝",
      title: "Supplier Coordination",
      description:
        "We coordinate with suppliers in China to help organize your goods and prepare them for the next stage of the shipping process.",
    },
    {
      icon: "🛫",
      title: "Air Freight Arrangements",
      description:
        "We coordinate the necessary arrangements for moving your cargo from China toward its intended African destination.",
    },
    {
      icon: "📋",
      title: "Cargo Information",
      description:
        "We work with relevant shipment details such as product type, quantity, weight, dimensions, supplier location, and destination.",
    },
    {
      icon: "🌍",
      title: "Arrival & Local Delivery",
      description:
        "Once your cargo reaches the destination, we help coordinate the next steps, including local delivery arrangements where applicable.",
    },
  ];

  return (
    <section className="air-freight-services">
      <div className="air-freight-services__container">

        <div className="air-freight-services__header">

          <span className="air-freight-services__eyebrow">
            OUR AIR FREIGHT SERVICES
          </span>

          <h2>
            From Cargo Preparation
            <span> to Arrival</span>
          </h2>

          <p>
            We help coordinate the key stages involved in moving your goods
            by air, working around your cargo requirements and destination.
          </p>

        </div>

        <div className="air-freight-services__grid">

          {services.map((service, index) => (
            <div
              className="air-freight-services__card"
              key={index}
            >

              <div className="air-freight-services__icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AirFreightServices;