import "./TradeAcademyIntro.css";

const TradeAcademyIntro = () => {
  const learningPoints = [
    {
      icon: "🔎",
      title: "Understand the Process",
      description:
        "Learn about the different stages involved in sourcing products, coordinating with suppliers, procurement, shipping, and delivery.",
    },
    {
      icon: "📦",
      title: "Make Better Decisions",
      description:
        "Explore practical information that can help you think through products, quantities, suppliers, shipping methods, and importing requirements.",
    },
    {
      icon: "🌍",
      title: "Learn With an African Perspective",
      description:
        "Access educational content designed around the needs and questions of African businesses and customers importing from China.",
    },
  ];

  return (
    <section className="trade-academy-intro">
      <div className="trade-academy-intro__container">

        <div className="trade-academy-intro__content">

          <span className="trade-academy-intro__eyebrow">
            WHY TRADE ACADEMY?
          </span>

          <h2>
            Understand the Journey
            <span> Before You Start Importing</span>
          </h2>

          <p>
            Importing products from China can involve many different stages,
            from finding the right product and communicating with suppliers
            to procurement, cargo consolidation, shipping, and final
            delivery.
          </p>

          <p>
            Trade Academy brings practical information about these stages
            together in one place, helping you build a better understanding
            of the importing process before making important decisions.
          </p>

          <div className="trade-academy-intro__highlight">

            <span className="trade-academy-intro__highlight-icon">
              💡
            </span>

            <div>
              <strong>
                Learn first. Make informed decisions.
              </strong>

              <p>
                Our resources are designed to make international sourcing and
                importing easier to understand.
              </p>
            </div>

          </div>

        </div>

        <div className="trade-academy-intro__learning">

          <div className="trade-academy-intro__learning-header">

            <span>
              WHAT YOU CAN LEARN
            </span>

            <h3>
              Practical Knowledge for
              <span> Your Importing Journey</span>
            </h3>

          </div>

          <div className="trade-academy-intro__points">

            {learningPoints.map((point, index) => (
              <div
                className="trade-academy-intro__point"
                key={index}
              >

                <div className="trade-academy-intro__point-icon">
                  {point.icon}
                </div>

                <div className="trade-academy-intro__point-content">

                  <h4>
                    {point.title}
                  </h4>

                  <p>
                    {point.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyIntro;