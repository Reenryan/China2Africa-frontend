import "./ConsolidationBenefits.css";

const benefits = [
  {
    number: "01",
    icon: "🔎",
    title: "Multiple Supplier Coordination",
    description:
      "Coordinate goods purchased from different suppliers in China and bring the relevant shipment details together.",
  },
  {
    number: "02",
    icon: "📦",
    title: "Cargo Collection",
    description:
      "Coordinate the collection and movement of your goods from different suppliers toward the consolidation point.",
  },
  {
    number: "03",
    icon: "📋",
    title: "Shipment Coordination",
    description:
      "Organize the necessary cargo information and preparation before your consolidated shipment leaves China.",
  },
  {
    number: "04",
    icon: "🚢",
    title: "Consolidated Shipping",
    description:
      "Move compatible goods together as a coordinated shipment toward their destination in Africa.",
  },
];

function ConsolidationBenefits() {
  return (
    <section className="consolidation-benefits">
      <div className="consolidation-benefits-container">

        <div className="consolidation-benefits-header">
          <span className="consolidation-benefits-eyebrow">
            WHAT WE HANDLE
          </span>

          <h2 className="consolidation-benefits-title">
            Simplifying the
            <br />
            <span>consolidation process.</span>
          </h2>

          <p className="consolidation-benefits-intro">
            From coordinating multiple suppliers to preparing your
            cargo for shipment, China2Africa helps bring the important
            parts of the consolidation process together.
          </p>
        </div>

        <div className="consolidation-benefits-grid">
          {benefits.map((benefit) => (
            <article
              className="consolidation-benefit-card"
              key={benefit.number}
            >
              <div className="consolidation-benefit-top">
                <span className="consolidation-benefit-number">
                  {benefit.number}
                </span>

                <div className="consolidation-benefit-icon">
                  {benefit.icon}
                </div>
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <div className="consolidation-benefit-line"></div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ConsolidationBenefits;