import "./AboutMission.css";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <div className="about-mission__container">

        <div className="about-mission__heading">
          <span>OUR DIRECTION</span>

          <h2>
            What Drives
            <strong> China2Africa</strong>
          </h2>

          <p>
            Our mission and vision guide how we support African businesses
            looking to source, procure and move products from China.
          </p>
        </div>

        <div className="about-mission__cards">

          <article className="about-mission__card">
            <div className="about-mission__icon">
              M
            </div>

            <div className="about-mission__content">
              <span>OUR MISSION</span>

              <h3>
                Simplifying Access to
                <strong> China</strong>
              </h3>

              <p>
                Our mission is to help African businesses access products
                and suppliers in China through a more organized and
                coordinated sourcing process.
              </p>

              <p>
                We aim to support customers through product sourcing,
                supplier coordination, procurement, cargo consolidation,
                shipping and delivery arrangements.
              </p>
            </div>
          </article>

          <article className="about-mission__card">
            <div className="about-mission__icon">
              V
            </div>

            <div className="about-mission__content">
              <span>OUR VISION</span>

              <h3>
                Connecting China and Africa
                <strong> Through Trade</strong>
              </h3>

              <p>
                Our vision is to make cross-border trade between China and
                Africa more accessible, organized and practical for
                businesses of different sizes.
              </p>

              <p>
                We envision a connected sourcing journey where African
                businesses can confidently explore opportunities in China
                while having the coordination and support they need.
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default AboutMission;