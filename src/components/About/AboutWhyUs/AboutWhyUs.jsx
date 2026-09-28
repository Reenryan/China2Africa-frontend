import { Link } from "react-router-dom";
import "./AboutWhyUs.css";

const AboutWhyUs = () => {
  const reasons = [
    {
      number: "01",
      title: "One Coordinated Journey",
      description:
        "We help bring different parts of the importing process together, from product sourcing and supplier coordination to procurement, consolidation and shipping arrangements.",
    },
    {
      number: "02",
      title: "Support With Product Sourcing",
      description:
        "Customers can share the products, specifications and quantities they are looking for, allowing our team to help coordinate the sourcing process.",
    },
    {
      number: "03",
      title: "Supplier Coordination",
      description:
        "We help coordinate communication around product requirements and supplier discussions so that important details can be clarified before procurement.",
    },
    {
      number: "04",
      title: "Cargo Consolidation",
      description:
        "Products sourced from different suppliers can be coordinated for consolidation, helping organize cargo before it moves towards its destination.",
    },
    {
      number: "05",
      title: "Flexible Business Support",
      description:
        "Whether you are an individual starting out, a retailer, wholesaler or growing business, the sourcing process can be organized around your specific requirements.",
    },
    {
      number: "06",
      title: "China-to-Africa Focus",
      description:
        "Our services are designed around the practical challenges of sourcing products from China and moving them towards African markets.",
    },
  ];

  return (
    <section className="about-why-us">
      <div className="about-why-us__container">

        <div className="about-why-us__heading">
          <span>WHY CHINA2AFRICA</span>

          <h2>
            Making the Importing Journey
            <strong> More Coordinated</strong>
          </h2>

          <p>
            Importing products from China involves more than finding a
            supplier. China2Africa provides coordination across key stages
            of the journey so businesses can focus on their products and
            growth.
          </p>
        </div>

        <div className="about-why-us__grid">
          {reasons.map((reason) => (
            <article
              className="about-why-us__card"
              key={reason.number}
            >
              <div className="about-why-us__number">
                {reason.number}
              </div>

              <div className="about-why-us__card-content">
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-why-us__bottom">
          <div className="about-why-us__bottom-content">
            <span>START YOUR JOURNEY</span>

            <h3>
              Have a Product
              <strong> You Want to Source?</strong>
            </h3>

            <p>
              Tell us what you are looking for and our team can help
              coordinate the next steps.
            </p>
          </div>

          <Link
            to="/register"
            className="about-why-us__button"
          >
            Get Started
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutWhyUs;