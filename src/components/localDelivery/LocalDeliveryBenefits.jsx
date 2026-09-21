import "./LocalDeliveryBenefits.css";

const LocalDeliveryBenefits = () => {
  const benefits = [
    {
      icon: "📍",
      title: "Delivery Based on Your Destination",
      description:
        "Provide your delivery destination and we help determine the appropriate local delivery arrangements for your shipment.",
    },
    {
      icon: "🚚",
      title: "Less Delivery Coordination for You",
      description:
        "Instead of managing the local movement of your cargo on your own, our team helps coordinate the relevant delivery arrangements.",
    },
    {
      icon: "📦",
      title: "Cargo-Focused Arrangements",
      description:
        "We consider important shipment details such as cargo type, quantity, size, and destination when coordinating local delivery.",
    },
    {
      icon: "🤝",
      title: "One Coordinated Journey",
      description:
        "Local delivery forms part of the wider journey, helping connect your international shipping arrangements with the final movement of your goods.",
    },
    {
      icon: "📞",
      title: "Clear Communication",
      description:
        "We help communicate the relevant delivery information and next steps as your cargo moves toward its destination.",
    },
    {
      icon: "🌍",
      title: "Support After Arrival",
      description:
        "Our coordination does not stop when your cargo arrives. We help with the next local delivery steps where applicable.",
    },
  ];

  return (
    <section className="local-delivery-benefits">
      <div className="local-delivery-benefits__container">

        <div className="local-delivery-benefits__header">

          <span className="local-delivery-benefits__eyebrow">
            WHY USE OUR LOCAL DELIVERY SERVICE
          </span>

          <h2>
            We Help Bring Your Cargo
            <span> Closer to You</span>
          </h2>

          <p>
            Once your cargo arrives, you should not have to figure out every
            local delivery step alone. We help coordinate the movement of
            your goods based on your destination and shipment requirements.
          </p>

        </div>

        <div className="local-delivery-benefits__grid">

          {benefits.map((benefit, index) => (
            <div
              className="local-delivery-benefits__card"
              key={index}
            >

              <div className="local-delivery-benefits__icon">
                {benefit.icon}
              </div>

              <div className="local-delivery-benefits__content">

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryBenefits;