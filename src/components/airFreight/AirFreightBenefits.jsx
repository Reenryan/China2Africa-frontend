import "./AirFreightBenefits.css";

const AirFreightBenefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Suitable for Time-Sensitive Cargo",
      description:
        "Air freight provides an alternative for customers who need a shipping option that better fits their timing requirements.",
    },
    {
      icon: "📦",
      title: "Suitable for Smaller Cargo",
      description:
        "Air freight can be a practical option for smaller or lighter shipments where air transportation fits the cargo requirements.",
    },
    {
      icon: "💰",
      title: "Plan Your Shipping Costs",
      description:
        "Understanding your cargo details helps you plan the appropriate shipping arrangement and associated costs.",
    },
    {
      icon: "🤝",
      title: "Coordinated Process",
      description:
        "We help coordinate the different stages of the shipment, from supplier preparation to air freight arrangements.",
    },
    {
      icon: "🌍",
      title: "China to Africa",
      description:
        "We help coordinate the movement of goods from suppliers in China toward African destinations.",
    },
    {
      icon: "📞",
      title: "Support Along the Way",
      description:
        "Our team remains available to help coordinate shipment information and the next steps throughout the process.",
    },
  ];

  return (
    <section className="air-freight-benefits">
      <div className="air-freight-benefits__container">

        <div className="air-freight-benefits__header">

          <span className="air-freight-benefits__eyebrow">
            WHY CONSIDER AIR FREIGHT
          </span>

          <h2>
            A Flexible Shipping Option
            <span> for Your Cargo</span>
          </h2>

          <p>
            Air freight can provide a practical alternative to sea freight
            depending on your cargo, timing, destination, and shipping
            requirements.
          </p>

        </div>

        <div className="air-freight-benefits__grid">

          {benefits.map((benefit, index) => (
            <div
              className="air-freight-benefits__card"
              key={index}
            >

              <div className="air-freight-benefits__icon">
                {benefit.icon}
              </div>

              <div className="air-freight-benefits__content">

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AirFreightBenefits;