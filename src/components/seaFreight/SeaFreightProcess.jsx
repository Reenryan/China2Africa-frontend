import "./SeaFreightProcess.css";

const SeaFreightProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Cargo Details",
      description:
        "Tell us what you are shipping, including the type of goods, quantity, dimensions, weight, and destination where applicable.",
    },
    {
      number: "02",
      title: "Review & Prepare Your Cargo",
      description:
        "We review your cargo requirements and coordinate the necessary preparation before the goods are ready for sea freight.",
    },
    {
      number: "03",
      title: "Consolidation & Shipping",
      description:
        "Where applicable, your goods are coordinated with other cargo and prepared for movement by sea from China.",
    },
    {
      number: "04",
      title: "Sea Freight Journey",
      description:
        "Your cargo begins its international journey from China toward the intended African destination.",
    },
    {
      number: "05",
      title: "Arrival & Next Steps",
      description:
        "Once the cargo reaches the destination, we coordinate the next steps toward collection or local delivery where applicable.",
    },
  ];

  return (
    <section className="sea-freight-process">
      <div className="sea-freight-process__container">

        <div className="sea-freight-process__header">
          <span className="sea-freight-process__eyebrow">
            HOW SEA FREIGHT WORKS
          </span>

          <h2>
            From China
            <span> to Your Destination</span>
          </h2>

          <p>
            We coordinate the key stages of your sea freight journey so you
            know what happens from the time your cargo requirements are
            submitted until your goods arrive.
          </p>
        </div>

        <div className="sea-freight-process__timeline">
          {steps.map((step, index) => (
            <div
              className="sea-freight-process__step"
              key={step.number}
            >
              <div className="sea-freight-process__number">
                {step.number}
              </div>

              <div className="sea-freight-process__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="sea-freight-process__line"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeaFreightProcess;