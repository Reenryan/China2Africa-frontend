import { Link } from "react-router-dom";
import "./LocalDeliveryHero.css";

const LocalDeliveryHero = () => {
  return (
    <section className="local-delivery-hero">
      <div className="local-delivery-hero__container">

        <div className="local-delivery-hero__content">

          <span className="local-delivery-hero__eyebrow">
            LOCAL DELIVERY IN AFRICA
          </span>

          <h1>
            Get Your Cargo From
            <span> Arrival to Your Door</span>
          </h1>

          <p>
            Once your cargo arrives at its destination, we help coordinate
            the next stage of its journey through local delivery arrangements
            suited to your shipment and destination.
          </p>

          <div className="local-delivery-hero__actions">

            <Link
              to="/contact"
              className="local-delivery-hero__primary"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryHero;