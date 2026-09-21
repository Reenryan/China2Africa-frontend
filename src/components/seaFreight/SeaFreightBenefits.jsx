import "./SeaFreightBenefits.css";

const SeaFreightBenefits = () => {
  const benefits = [
    {
      icon: "📦",
      title: "Suitable for Larger Cargo",
      description:
        "Sea freight provides a practical option for businesses and importers moving larger quantities or heavier commercial goods.",
    },
    {
      icon: "💰",
      title: "Plan Your Shipping Costs",
      description:
        "Understanding your cargo requirements early helps you plan for the shipping and other costs involved in moving your goods.",
    },
    {
      icon: "🔗",
      title: "Coordinated Process",
      description:
        "We help coordinate the different stages involved in moving your cargo from preparation through to arrival.",
    },
    {
      icon: "🏢",
      title: "Built for Businesses",
      description:
        "Our sea freight service is designed around the needs of importers, wholesalers, distributors, and growing businesses.",
    },
    {
      icon: "🌍",
      title: "China to Africa",
      description:
        "Move goods from Chinese suppliers toward African destinations through a coordinated international shipping process.",
    },
    {
      icon: "🤝",
      title: "Support Along the Way",
      description:
        "We work with you around your cargo requirements and help you understand the next steps throughout the shipping process.",
    },
  ];

  return (
    <section className="sea-freight-benefits">
      <div className="sea-freight-benefits__container">

        <div className="sea-freight-benefits__header">
          <span className="sea-freight-benefits__eyebrow">
            WHY CHOOSE SEA FREIGHT
          </span>

          <h2>
            Shipping That Fits
            <span> Your Cargo Needs</span>
          </h2>

          <p>
            Sea freight can be a practical option when your business needs to
            move larger quantities of goods from China to Africa. We help
            coordinate the process around your cargo requirements.
          </p>
        </div>

        <div className="sea-freight-benefits__grid">
          {benefits.map((benefit, index) => (
            <div
              className="sea-freight-benefits__card"
              key={index}
            >
              <div className="sea-freight-benefits__icon">
                {benefit.icon}
              </div>

              <div className="sea-freight-benefits__content">
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

export default SeaFreightBenefits;