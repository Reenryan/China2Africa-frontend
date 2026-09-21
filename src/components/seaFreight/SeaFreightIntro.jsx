import "./SeaFreightIntro.css";

const SeaFreightIntro = () => {
  return (
    <section className="sea-freight-intro">
      <div className="sea-freight-intro__container">

        {/* Left Content */}
        <div className="sea-freight-intro__content">

          <span className="sea-freight-intro__eyebrow">
            ABOUT OUR SEA FREIGHT SERVICE
          </span>

          <h2>
            A Practical Way to Move
            <span> Larger Cargo From China</span>
          </h2>

          <p>
            Sea freight is a practical option for businesses and importers
            moving larger quantities or heavier cargo from China to Africa.
            It provides a coordinated way to move commercial goods across
            international shipping routes.
          </p>

          <p>
            At China2Africa, we help coordinate the shipping journey by
            working with customers on their cargo requirements, shipping
            arrangements, consolidation, and the next steps toward arrival
            and local delivery.
          </p>

        </div>

        {/* Right Information Card */}
        <div className="sea-freight-intro__card">

          <div className="sea-freight-intro__card-header">
            <span className="sea-freight-intro__card-icon">
              🚢
            </span>

            <div>
              <span className="sea-freight-intro__card-label">
                SEA FREIGHT
              </span>

              <h3>
                China
                <span> → </span>
                Africa
              </h3>
            </div>
          </div>

          <div className="sea-freight-intro__divider"></div>

          <div className="sea-freight-intro__details">

            <div className="sea-freight-intro__detail">
              <span className="sea-freight-intro__detail-icon">
                📦
              </span>

              <div>
                <h4>Commercial Cargo</h4>
                <p>
                  Suitable for businesses moving products and larger
                  quantities.
                </p>
              </div>
            </div>

            <div className="sea-freight-intro__detail">
              <span className="sea-freight-intro__detail-icon">
                🔗
              </span>

              <div>
                <h4>Coordinated Shipping</h4>
                <p>
                  Shipping arrangements are coordinated around your cargo
                  requirements.
                </p>
              </div>
            </div>

            <div className="sea-freight-intro__detail">
              <span className="sea-freight-intro__detail-icon">
                🌍
              </span>

              <div>
                <h4>China to Africa</h4>
                <p>
                  Supporting importers moving goods from China toward
                  African destinations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SeaFreightIntro;