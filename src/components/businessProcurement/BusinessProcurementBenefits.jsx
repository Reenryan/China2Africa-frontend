import "./BusinessProcurementBenefits.css";

const benefits = [
  {
    icon: "🎯",
    title: "Procurement That Matches Your Requirements",
    description:
      "We work from the exact product specifications, quantities, quality requirements, and reference images you provide.",
  },
  {
    icon: "🤝",
    title: "Supplier Coordination",
    description:
      "We communicate and coordinate with suppliers on your behalf, helping you navigate the sourcing process from China.",
  },
  {
    icon: "🔎",
    title: "Product & Supplier Verification",
    description:
      "We help review available products and supplier information so you can make informed procurement decisions.",
  },
  {
    icon: "📦",
    title: "Consolidated Procurement",
    description:
      "Products from different suppliers can be coordinated and prepared for consolidation before shipment to Africa.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    description:
      "Our team keeps you involved when important details need clarification, confirmation, or negotiation.",
  },
  {
    icon: "🌍",
    title: "Built for African Businesses",
    description:
      "Our procurement and shipping coordination is designed around the needs of businesses importing goods from China to Africa.",
  },
];

const BusinessProcurementBenefits = () => {
  return (
    <section className="business-procurement-benefits">
      <div className="business-procurement-benefits__container">

        {/* Section Header */}
        <div className="business-procurement-benefits__header">
          <span className="business-procurement-benefits__eyebrow">
            WHY USE OUR SERVICE
          </span>

          <h2>
            Procurement Made
            <span> Simpler</span>
          </h2>

          <p>
            From finding suitable products and coordinating with suppliers
            to preparing your goods for shipment, we help simplify the
            procurement journey from China to Africa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="business-procurement-benefits__grid">
          {benefits.map((benefit) => (
            <article
              className="business-procurement-benefits__card"
              key={benefit.title}
            >
              <div className="business-procurement-benefits__icon">
                {benefit.icon}
              </div>

              <div className="business-procurement-benefits__content">
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessProcurementBenefits;