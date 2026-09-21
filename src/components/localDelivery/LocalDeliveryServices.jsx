import React from "react";
import "./LocalDeliveryServices.css";

const LocalDeliveryServices = () => {
  const services = [
    {
      icon: "📍",
      title: "Destination-Based Delivery",
      description:
        "Provide your preferred delivery destination and we help coordinate the appropriate local delivery arrangements for your cargo.",
    },
    {
      icon: "🚚",
      title: "Cargo Collection & Movement",
      description:
        "Once your cargo reaches the relevant arrival point, we coordinate its movement toward the destination you provided.",
    },
    {
      icon: "🏢",
      title: "Business Deliveries",
      description:
        "We can coordinate delivery arrangements for businesses receiving goods for shops, offices, warehouses, or other business locations.",
    },
    {
      icon: "🏠",
      title: "Residential Deliveries",
      description:
        "Where applicable, local delivery can be coordinated to a residential destination provided by the customer.",
    },
    {
      icon: "📦",
      title: "Cargo Handling Coordination",
      description:
        "We coordinate the relevant local movement of your shipment based on its size, quantity, destination, and delivery requirements.",
    },
    {
      icon: "🤝",
      title: "Delivery Coordination",
      description:
        "We help coordinate the delivery process and communicate the relevant next steps based on your shipment and destination.",
    },
  ];

  return (
    <section className="local-delivery-services">
      <div className="local-delivery-services__container">

        <div className="local-delivery-services__header">

          <span className="local-delivery-services__eyebrow">
            OUR LOCAL DELIVERY SERVICES
          </span>

          <h2>
            Tell Us Where You Need It.
            <span> We Coordinate the Delivery.</span>
          </h2>

          <p>
            Your delivery destination helps us determine the appropriate
            local delivery arrangements for your cargo. Provide the
            destination and relevant shipment details, and our team helps
            coordinate the next stage.
          </p>

        </div>

        <div className="local-delivery-services__grid">

          {services.map((service, index) => (
            <div
              className="local-delivery-services__card"
              key={index}
            >

              <div className="local-delivery-services__icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}

        </div>

        <div className="local-delivery-services__note">

          <span className="local-delivery-services__note-icon">
            📌
          </span>

          <p>
            <strong>Your destination matters.</strong> Delivery availability
            and arrangements may depend on the destination, cargo
            characteristics, and the applicable local delivery requirements.
          </p>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryServices;