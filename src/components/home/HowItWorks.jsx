import { Link } from "react-router-dom";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: "📝",
    title: "Tell Us What You Need",
    description:
      "Submit a sourcing request with the products you are looking for, quantities, specifications, and any important requirements.",
  },
  {
    number: "02",
    icon: "💬",
    title: "Get a Sourcing Response",
    description:
      "Our team reviews your request, assesses the requirements, and communicates the next steps with you.",
  },
  {
    number: "03",
    icon: "🔎",
    title: "We Source & Coordinate",
    description:
      "We help identify suppliers, coordinate procurement, and organize your goods before they leave China.",
  },
  {
    number: "04",
    icon: "🚢",
    title: "Your Cargo Ships",
    description:
      "Your goods are prepared and shipped using the appropriate freight option based on your shipment requirements.",
  },
  {
    number: "05",
    icon: "🌍",
    title: "Receive Your Goods",
    description:
      "We coordinate the final stage of the journey so your cargo can move from arrival in Africa toward its destination.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">

        <div className="how-header">
          <span className="section-eyebrow">
            HOW IT WORKS
          </span>

          <h2 className="how-title">
            From China to Africa.
            <br />
            <span>We simplify the journey.</span>
          </h2>

          <p className="how-description">
            Whether you are sourcing your first product or regularly
            importing for your business, our process is designed to
            make international sourcing easier to understand and
            easier to manage.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((step, index) => (
            <div className="how-step-wrapper" key={step.number}>

              <article className="how-step">
                <div className="how-step-top">
                  <span className="how-number">
                    {step.number}
                  </span>

                  <div className="how-icon">
                    {step.icon}
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>

              {index < steps.length - 1 && (
                <div className="how-connector">
                  <span>→</span>
                </div>
              )}

            </div>
          ))}
        </div>

        <div className="how-cta">
          <div className="how-cta-content">
            <h3>
              Ready to start sourcing?
            </h3>

            <p>
              Tell us what you are looking for and let us help
              you take the next step.
            </p>
          </div>

          <Link
            to="/signup"
            className="how-cta-button"
          >
            Start a Sourcing Request
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;