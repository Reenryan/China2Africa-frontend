import { Link } from "react-router-dom";
import "./ServicesPreview.css";

const services = [
  {
    icon: "🔎",
    title: "Product Sourcing",
    description:
      "Tell us what you need and we help you source products from reliable suppliers in China.",
    link: "/services/product-sourcing",
  },
  {
    icon: "🏢",
    title: "Business Procurement",
    description:
      "Get coordinated procurement support for businesses sourcing products, equipment, or supplies from China.",
    link: "/services/business-procurement",
  },
  {
    icon: "📦",
    title: "Cargo Consolidation",
    description:
      "Combine goods from multiple suppliers into one shipment for simpler and more efficient cargo handling.",
    link: "/services/consolidation",
  },
  {
    icon: "🚢",
    title: "Sea Freight",
    description:
      "Move your cargo from China to Africa through cost-effective sea freight solutions.",
    link: "/services/sea-freight",
  },
  {
    icon: "✈️",
    title: "Air Freight",
    description:
      "For time-sensitive shipments, arrange faster air freight from China to Africa.",
    link: "/services/air-freight",
  },
  {
    icon: "🚚",
    title: "Local Delivery",
    description:
      "Coordinate the final stage of your shipment from arrival in Africa to your destination.",
    link: "/services/local-delivery",
  },
];

function ServicesPreview() {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <div>
            <span className="section-eyebrow">
              WHAT WE DO
            </span>

            <h2 className="services-title">
              Source smarter.
              <br />
              <span>Ship with confidence.</span>
            </h2>
          </div>

          <p className="services-intro">
            From finding products and coordinating suppliers to
            consolidating cargo and arranging delivery, we help
            simplify the journey from China to Africa.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                to={service.link}
                className="service-link"
              >
                Learn more
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <Link
            to="/services/product-sourcing"
            className="services-button"
          >
            Explore All Services
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;