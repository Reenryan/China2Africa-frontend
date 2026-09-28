import "./AboutValues.css";

const AboutValues = () => {
  const values = [
    {
      number: "01",
      title: "Transparency",
      description:
        "We believe customers should have a clear understanding of the sourcing and procurement process, from product requirements to supplier coordination and shipping arrangements.",
    },
    {
      number: "02",
      title: "Reliability",
      description:
        "We aim to provide dependable coordination and communication throughout the sourcing journey, helping customers understand what happens at each stage.",
    },
    {
      number: "03",
      title: "Customer Focus",
      description:
        "Every sourcing journey starts with understanding what the customer needs. We work around product specifications, quantities, business requirements and delivery preferences.",
    },
    {
      number: "04",
      title: "Coordination",
      description:
        "Sourcing from another country involves different parties and processes. We focus on bringing these activities together to create a more organized importing experience.",
    },
  ];

  return (
    <section className="about-values">
      <div className="about-values__container">

        <div className="about-values__heading">
          <span>WHAT WE STAND FOR</span>

          <h2>
            Our Values
            <strong> Shape How We Work</strong>
          </h2>

          <p>
            The way we work is guided by principles that help us build
            clear, dependable and practical relationships with the
            businesses we serve.
          </p>
        </div>

        <div className="about-values__grid">
          {values.map((value) => (
            <article
              className="about-values__card"
              key={value.number}
            >
              <div className="about-values__number">
                {value.number}
              </div>

              <div className="about-values__card-content">
                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutValues;