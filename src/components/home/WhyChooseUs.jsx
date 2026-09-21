import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "✓",
    title: "Verified Suppliers",
    description:
      "We help you identify and coordinate with suppliers so you can source with greater confidence.",
  },
  {
    icon: "🔎",
    title: "Reliable Coordination",
    description:
      "From product sourcing to shipping, we coordinate the important steps between China and Africa.",
  },
  {
    icon: "📦",
    title: "Cargo Consolidation",
    description:
      "Source from multiple suppliers and consolidate your goods into a more manageable shipment.",
  },
  {
    icon: "🚢",
    title: "Flexible Shipping",
    description:
      "Choose shipping options that suit your goods, timeline, and business needs.",
  },
  {
    icon: "🌍",
    title: "Africa-Focused Delivery",
    description:
      "We coordinate the journey from China through shipping and onward delivery within Africa.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Get communication and updates throughout the process instead of navigating international sourcing alone.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* Section introduction */}
        <div className="why-intro">

          <span className="section-eyebrow">
            WHY CHINA2AFRICA?
          </span>

          <h2 className="why-title">
            More than shipping.
            <br />
            <span>A trusted sourcing partner.</span>
          </h2>

          <p className="why-description">
            Sourcing from China can feel complicated when you are dealing
            with suppliers, payments, quality checks, shipping, and delivery
            across different countries. China2Africa brings these steps
            together so African importers and growing businesses can source
            with greater confidence.
          </p>

          <div className="why-trust-message">
            <span className="why-trust-icon">✓</span>

            <div>
              <strong>Built around trust and coordination</strong>
              <p>
                We help you navigate the journey from finding products
                in China to getting them closer to your business in Africa.
              </p>
            </div>
          </div>

        </div>

        {/* Reasons */}
        <div className="why-grid">

          {reasons.map((reason) => (
            <article
              className="why-card"
              key={reason.title}
            >
              <div className="why-card-icon">
                {reason.icon}
              </div>

              <div>
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;