import "./LocalDeliveryProcess.css";

const LocalDeliveryProcess = () => {
  const steps = [
    {
      number: "01",
      icon: "📍",
      title: "Provide Your Destination",
      description:
        "Tell us where you want your cargo delivered. Your destination helps us determine the appropriate local delivery arrangements.",
    },
    {
      number: "02",
      icon: "📦",
      title: "Share Cargo Details",
      description:
        "Provide the relevant information about your shipment, such as the type of goods, quantity, size, or other details needed for delivery planning.",
    },
    {
      number: "03",
      icon: "🔎",
      title: "We Review the Delivery Requirements",
      description:
        "Our team reviews your destination and cargo information to understand the local delivery requirements for your shipment.",
    },
    {
      number: "04",
      icon: "🚚",
      title: "We Coordinate Local Movement",
      description:
        "Once the delivery arrangements are established, we coordinate the movement of your cargo from the relevant arrival point toward your destination.",
    },
    {
      number: "05",
      icon: "🏠",
      title: "Cargo Reaches Your Destination",
      description:
        "Your cargo proceeds through the agreed local delivery arrangement toward the destination you provided.",
    },
  ];

  return (
    <section className="local-delivery-process">
      <div className="local-delivery-process__container">

        <div className="local-delivery-process__header">

          <span className="local-delivery-process__eyebrow">
            HOW LOCAL DELIVERY WORKS
          </span>

          <h2>
            You Provide the Destination.
            <span> We Coordinate the Journey.</span>
          </h2>

          <p>
            Our local delivery process is designed to keep things simple.
            You provide the destination and relevant cargo information, and
            our team helps coordinate the delivery arrangements for your
            shipment.
          </p>

        </div>

        <div className="local-delivery-process__timeline">

          {steps.map((step, index) => (
            <div
              className="local-delivery-process__step"
              key={index}
            >

              <div className="local-delivery-process__number">
                {step.number}
              </div>

              <div className="local-delivery-process__line"></div>

              <div className="local-delivery-process__card">

                <div className="local-delivery-process__icon">
                  {step.icon}
                </div>

                <div className="local-delivery-process__content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="local-delivery-process__note">

          <span className="local-delivery-process__note-icon">
            💡
          </span>

          <p>
            <strong>What do you need to provide?</strong> Your delivery
            destination and the relevant information about your cargo. We
            use these details to help coordinate the appropriate local
            delivery arrangements.
          </p>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryProcess;