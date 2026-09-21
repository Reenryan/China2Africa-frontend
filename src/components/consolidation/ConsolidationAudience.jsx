import "./ConsolidationAudience.css";

const audiences = [
  {
    number: "01",
    title: "Small Businesses",
    description:
      "Businesses sourcing several products from different suppliers can use consolidation to coordinate their purchases into a more manageable shipment.",
  },
  {
    number: "02",
    title: "Wholesalers",
    description:
      "Wholesalers purchasing different products or larger quantities from multiple suppliers can coordinate their goods before shipping.",
  },
  {
    number: "03",
    title: "Growing Businesses",
    description:
      "Businesses expanding their product range can coordinate purchases from different suppliers without having to manage every shipment separately.",
  },
  {
    number: "04",
    title: "Importers",
    description:
      "Importers sourcing goods from several suppliers can benefit from having their cargo coordinated before it begins its journey to Africa.",
  },
];

function ConsolidationAudience() {
  return (
    <section className="consolidation-audience">
      <div className="consolidation-audience-container">

        <div className="consolidation-audience-header">

          <div>
            <span className="consolidation-audience-eyebrow">
              WHO IS IT FOR?
            </span>

            <h2 className="consolidation-audience-title">
              Built for businesses
              <br />
              <span>that source from China.</span>
            </h2>
          </div>

          <p className="consolidation-audience-intro">
            Whether you are sourcing a few different products or
            coordinating purchases from several suppliers, cargo
            consolidation can help simplify the way your goods are
            prepared for shipment.
          </p>

        </div>

        <div className="consolidation-audience-grid">

          {audiences.map((audience) => (
            <article
              className="consolidation-audience-card"
              key={audience.number}
            >

              <div className="consolidation-audience-number">
                {audience.number}
              </div>

              <div className="consolidation-audience-content">

                <h3>{audience.title}</h3>

                <p>{audience.description}</p>

              </div>

              <div className="consolidation-audience-check">
                ✓
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ConsolidationAudience;