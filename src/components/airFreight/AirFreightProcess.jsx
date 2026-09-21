import "./AirFreightProcess.css";

const AirFreightProcess = () => {
  const steps = [
    {
      number: "01",
      icon: "📋",
      title: "Share Your Cargo Details",
      description:
        "Tell us what you are shipping, including the product type, quantity, weight, dimensions, supplier information, and destination.",
    },
    {
      number: "02",
      icon: "🔍",
      title: "Review & Security Checks",
      description:
        "We review the shipment information and coordinate the necessary cargo, security, and compliance checks before arrangements proceed.",
    },
    {
      number: "03",
      icon: "📦",
      title: "Prepare & Arrange Shipment",
      description:
        "We coordinate with suppliers and arrange the necessary preparation and air freight requirements for your cargo.",
    },
    {
      number: "04",
      icon: "✈️",
      title: "Air Freight & Arrival",
      description:
        "Your cargo is moved by air while we coordinate the relevant shipping and arrival steps toward the destination.",
    },
    {
      number: "05",
      icon: "🚚",
      title: "Local Delivery",
      description:
        "Once the cargo reaches the destination, we coordinate the next steps toward local delivery where applicable.",
    },
  ];

  return (
    <section className="air-freight-process">
      <div className="air-freight-process__container">

        <div className="air-freight-process__header">

          <span className="air-freight-process__eyebrow">
            HOW AIR FREIGHT WORKS
          </span>

          <h2>
            You Share the Details.
            <span> We Coordinate the Rest.</span>
          </h2>

          <p>
            From your initial cargo information to the next steps toward
            delivery, we help coordinate the process so you do not have to
            manage every stage on your own.
          </p>

        </div>

        <div className="air-freight-process__timeline">

          {steps.map((step, index) => (
            <div
              className="air-freight-process__step"
              key={step.number}
            >

              <div className="air-freight-process__number">
                {step.number}
              </div>

              <div className="air-freight-process__line">
                {index !== steps.length - 1 && <span></span>}
              </div>

              <div className="air-freight-process__card">

                <div className="air-freight-process__icon">
                  {step.icon}
                </div>

                <div className="air-freight-process__content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="air-freight-process__note">

          <span className="air-freight-process__note-icon">
            💡
          </span>

          <p>
            <strong>Simple for you.</strong> Provide the information we need
            about your cargo, and our team coordinates the relevant
            preparation, checks, shipping arrangements, and delivery steps
            based on your shipment.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AirFreightProcess;