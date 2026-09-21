import "./AirFreightIntro.css";

const AirFreightIntro = () => {
  return (
    <section className="air-freight-intro">
      <div className="air-freight-intro__container">

        <div className="air-freight-intro__content">

          <span className="air-freight-intro__eyebrow">
            ABOUT OUR AIR FREIGHT SERVICE
          </span>

          <h2>
            A Flexible Option for
            <span> Time-Sensitive Cargo</span>
          </h2>

          <p>
            Air freight is a practical option for businesses and importers
            who need to move goods from China to Africa when air transport
            better suits their cargo requirements.
          </p>

          <p>
            At China2Africa, we help coordinate the shipping journey around
            your cargo requirements, including preparation, shipping
            arrangements, and the next steps toward arrival and local
            delivery.
          </p>

        </div>

        <div className="air-freight-intro__card">

          <div className="air-freight-intro__card-header">

            <span className="air-freight-intro__card-icon">
              ✈️
            </span>

            <div>
              <span className="air-freight-intro__card-label">
                AIR FREIGHT
              </span>

              <h3>
                China
                <span> → </span>
                Africa
              </h3>
            </div>

          </div>

          <div className="air-freight-intro__divider"></div>

          <div className="air-freight-intro__details">

            <div className="air-freight-intro__detail">

              <span className="air-freight-intro__detail-icon">
                ⚡
              </span>

              <div>
                <h4>Time-Sensitive Cargo</h4>

                <p>
                  Suitable for shipments where air transport fits the
                  customer's timing and cargo requirements.
                </p>
              </div>

            </div>

            <div className="air-freight-intro__detail">

              <span className="air-freight-intro__detail-icon">
                📦
              </span>

              <div>
                <h4>Flexible Cargo Options</h4>

                <p>
                  A useful alternative for goods that may not be suitable
                  for waiting on sea freight.
                </p>
              </div>

            </div>

            <div className="air-freight-intro__detail">

              <span className="air-freight-intro__detail-icon">
                🌍
              </span>

              <div>
                <h4>China to Africa</h4>

                <p>
                  Coordinated movement of goods from Chinese suppliers
                  toward African destinations.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AirFreightIntro;