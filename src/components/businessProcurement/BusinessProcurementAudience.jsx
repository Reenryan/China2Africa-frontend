import React from "react";
import "./BusinessProcurementAudience.css";

const audienceTypes = [
  {
    number: "01",
    title: "Small Businesses",
    description:
      "For growing businesses that need products, equipment, packaging, or other supplies from China without handling the entire procurement process themselves.",
    examples: [
      "Retail businesses",
      "Online stores",
      "Growing local brands",
    ],
  },
  {
    number: "02",
    title: "Wholesalers & Distributors",
    description:
      "For businesses purchasing larger quantities and looking for coordinated sourcing, supplier communication, and shipment preparation.",
    examples: [
      "Wholesale traders",
      "Product distributors",
      "Large-volume buyers",
    ],
  },
  {
    number: "03",
    title: "Individual Buyers",
    description:
      "For individuals who need help sourcing specific products from China and want professional assistance with supplier and procurement coordination.",
    examples: [
      "Personal purchases",
      "Special product requests",
      "Small quantity orders",
    ],
  },
];

const BusinessProcurementAudience = () => {
  return (
    <section className="business-procurement-audience">
      <div className="business-procurement-audience__container">

        {/* Header */}
        <div className="business-procurement-audience__header">
          <span className="business-procurement-audience__eyebrow">
            WHO WE SERVE
          </span>

          <h2>
            Procurement Support for
            <span> Different Buyers</span>
          </h2>

          <p>
            Whether you are building a business, buying in bulk, or looking
            for a specific product, we can help coordinate your sourcing and
            procurement needs from China.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="business-procurement-audience__grid">
          {audienceTypes.map((audience) => (
            <article
              className="business-procurement-audience__card"
              key={audience.number}
            >
              <div className="business-procurement-audience__top">
                <span className="business-procurement-audience__number">
                  {audience.number}
                </span>

                <div className="business-procurement-audience__icon">
                  {audience.number === "01" && "🏪"}
                  {audience.number === "02" && "📦"}
                  {audience.number === "03" && "👤"}
                </div>
              </div>

              <h3>{audience.title}</h3>

              <p>{audience.description}</p>

              <ul>
                {audience.examples.map((example) => (
                  <li key={example}>
                    <span>✓</span>
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="business-procurement-audience__bottom">
          <p>
            Not sure which procurement option fits your needs?
            <strong> Tell us what you are looking for</strong> and our team
            can discuss the requirements with you.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BusinessProcurementAudience;