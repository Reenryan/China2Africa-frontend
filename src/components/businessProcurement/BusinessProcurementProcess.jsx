import "./BusinessProcurementProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Tell Us Your Requirements",
    description:
      "Submit your business procurement request with the products you need, specifications, quantities, preferred options, and any product images or reference samples.",
  },
  {
    number: "02",
    title: "We Review Your Request",
    description:
      "Our team reviews your requirements, checks the product details, and contacts you to clarify specifications, quantities, quality expectations, and other important details.",
  },
  {
    number: "03",
    title: "Supplier & Procurement Coordination",
    description:
      "We research suitable suppliers, communicate with them on your behalf, compare available options, and coordinate the procurement process according to the agreed requirements.",
  },
  {
    number: "04",
    title: "Confirm Procurement Details",
    description:
      "Once the product specifications, quantities, pricing, and procurement arrangements are agreed upon, we confirm the details with you and provide the required payment information.",
  },
  {
    number: "05",
    title: "Prepare for Shipment",
    description:
      "After procurement is confirmed, the purchased goods are coordinated for consolidation and prepared for shipment from China to your destination in Africa.",
  },
];

const BusinessProcurementProcess = () => {
  return (
    <section className="business-procurement-process">
      <div className="business-procurement-process__container">

        {/* Section Header */}
        <div className="business-procurement-process__header">
          <span className="business-procurement-process__eyebrow">
            HOW IT WORKS
          </span>

          <h2>
            From Your Requirement to
            <span> Procurement</span>
          </h2>

          <p>
            Our business procurement process is designed to keep every stage
            clear and coordinated, from the moment you submit your request
            until your goods are ready for shipment.
          </p>
        </div>

        {/* Process Steps */}
        <div className="business-procurement-process__timeline">
          {processSteps.map((step, index) => (
            <div
              className="business-procurement-process__step"
              key={step.number}
            >
              <div className="business-procurement-process__number">
                {step.number}
              </div>

              <div className="business-procurement-process__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index !== processSteps.length - 1 && (
                <div className="business-procurement-process__line"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessProcurementProcess;