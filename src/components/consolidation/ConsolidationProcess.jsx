import "./ConsolidationProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Source Your Products",
    description:
      "Tell us what you are sourcing ,we find suppliers and coordinate products you want to consolidate.",
  },
  {
    number: "02",
    title: "Goods Are Coordinated",
    description:
      "We coordinate the relevant supplier and cargo information and help organize the movement of your goods.",
  },
  {
    number: "03",
    title: "Cargo Is Consolidated",
    description:
      "Your compatible goods are brought together and prepared as a coordinated shipment.",
  },
  {
    number: "04",
    title: "Shipment Begins",
    description:
      "Once the cargo is ready, the consolidated shipment proceeds through the selected shipping arrangement.",
  },
];

function ConsolidationProcess() {
  return (
    <section className="consolidation-process">
      <div className="consolidation-process-container">

        <div className="consolidation-process-header">
          <span className="consolidation-process-eyebrow">
            HOW IT WORKS
          </span>

          <h2 className="consolidation-process-title">
            From multiple suppliers
            <br />
            <span>to one coordinated shipment.</span>
          </h2>

          <p className="consolidation-process-intro">
            We help coordinate the important stages involved in bringing
            goods from different suppliers together before shipment.
          </p>
        </div>

        <div className="consolidation-process-steps">

          {processSteps.map((step, index) => (
            <div
              className="consolidation-process-step"
              key={step.number}
            >

              <div className="consolidation-process-number">
                {step.number}
              </div>

              <div className="consolidation-process-connector">
                {index < processSteps.length - 1 && <span />}
              </div>

              <div className="consolidation-process-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ConsolidationProcess;