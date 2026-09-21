import "./HowItWorksOverview.css";

const HowItWorksOverview = () => {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Create Your Account",
      description:
        "Create your China2Africa customer account before submitting a sourcing request.",
    },
    {
      number: "02",
      icon: "📦",
      title: "Submit Your Request",
      description:
        "Tell us what you want to source, including specifications, quantity, images, and other relevant details.",
    },
    {
      number: "03",
      icon: "🔎",
      title: "We Review & Contact You",
      description:
        "Our team reviews your request, clarifies the requirements, and communicates with you about the next steps.",
    },
    {
      number: "04",
      icon: "🤝",
      title: "Confirm Product & Supplier",
      description:
        "We coordinate with suppliers and keep you informed while the product specifications and sourcing details are confirmed.",
    },
    {
      number: "05",
      icon: "📦",
      title: "Procurement & Consolidation",
      description:
        "Once the sourcing details are confirmed, we proceed with procurement and coordinate consolidation where applicable.",
    },
    {
      number: "06",
      icon: "💳",
      title: "Payment & Shipping Confirmation",
      description:
        "The relevant payment and shipping information is communicated and confirmed before the shipment proceeds.",
    },
    {
      number: "07",
      icon: "🚢",
      title: "Shipping & Arrival",
      description:
        "We coordinate the appropriate shipping arrangements and the next steps as your cargo moves toward its destination.",
    },
    {
      number: "08",
      icon: "🏠",
      title: "Door Delivery or Pickup",
      description:
        "Once your cargo reaches the relevant destination, we coordinate delivery to your door or pickup from an available collection point.",
    },
  ];

  return (
    <section className="how-it-works-overview">
      <div className="how-it-works-overview__container">

        <div className="how-it-works-overview__header">

          <span className="how-it-works-overview__eyebrow">
            YOUR COMPLETE CHINA2AFRICA JOURNEY
          </span>

          <h2>
            From Your First Request
            <span> to Receiving Your Goods</span>
          </h2>

          <p>
            From creating your account to receiving your cargo, we coordinate
            the different stages of your sourcing and shipping journey while
            keeping you informed along the way.
          </p>

        </div>

        <div className="how-it-works-overview__timeline">

          {steps.map((step, index) => (
            <div
              className="how-it-works-overview__step"
              key={index}
            >

              <div className="how-it-works-overview__step-marker">

                <span className="how-it-works-overview__number">
                  {step.number}
                </span>

              </div>

              <div className="how-it-works-overview__connector"></div>

              <div className="how-it-works-overview__card">

                <div className="how-it-works-overview__icon">
                  {step.icon}
                </div>

                <div className="how-it-works-overview__content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="how-it-works-overview__bottom">

          <span className="how-it-works-overview__bottom-icon">
            🌍
          </span>

          <div>
            <strong>
              One coordinated journey.
            </strong>

            <p>
              You tell us what you need. We coordinate the sourcing,
              procurement, shipping, and delivery stages with you until your
              goods reach you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksOverview;