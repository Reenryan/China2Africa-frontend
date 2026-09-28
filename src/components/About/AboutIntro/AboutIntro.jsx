import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="about-intro__container">

        <div className="about-intro__heading">
          <span>WHO WE ARE</span>

          <h2>
            Making Cross-Border Sourcing
            <strong> Easier for African Businesses</strong>
          </h2>
        </div>

        <div className="about-intro__content">

          <p>
            China2Africa is a sourcing and logistics coordination platform
            designed to help African businesses access products and suppliers
            in China more easily.
          </p>

          <p>
            We understand that importing from China can involve multiple
            steps, from identifying suitable products and communicating with
            suppliers to coordinating procurement, consolidating cargo, and
            arranging shipping and delivery.
          </p>

          <p>
            Our role is to help simplify these stages by providing
            coordination and support throughout the sourcing journey.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;