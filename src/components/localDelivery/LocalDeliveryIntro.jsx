import "./LocalDeliveryIntro.css";

const LocalDeliveryIntro = () => {
  return (
    <section className="local-delivery-intro">
      <div className="local-delivery-intro__container">

        <div className="local-delivery-intro__content">

          <span className="local-delivery-intro__eyebrow">
            ABOUT OUR LOCAL DELIVERY SERVICE
          </span>

          <h2>
            From Cargo Arrival
            <span> to Your Final Destination</span>
          </h2>

          <p>
            Getting your goods to Africa is only part of the journey. Once
            your cargo arrives at the relevant destination, the next step is
            moving it from the arrival point toward you.
          </p>

          <p>
            At China2Africa, we help coordinate the local delivery stage
            based on your cargo, destination, and the arrangements available
            for your shipment.
          </p>

        </div>

        <div className="local-delivery-intro__card">

          <div className="local-delivery-intro__card-header">

            <span className="local-delivery-intro__card-icon">
              🚚
            </span>

            <div>
              <span className="local-delivery-intro__card-label">
                LOCAL DELIVERY
              </span>

              <h3>
                Arrival
                <span> → </span>
                Customer
              </h3>
            </div>

          </div>

          <div className="local-delivery-intro__divider"></div>

          <div className="local-delivery-intro__details">

            <div className="local-delivery-intro__detail">

              <span className="local-delivery-intro__detail-icon">
                📍
              </span>

              <div>
                <h4>Arrival Point</h4>

                <p>
                  Your cargo first reaches the relevant arrival point based
                  on the international shipping arrangement.
                </p>
              </div>

            </div>

            <div className="local-delivery-intro__detail">

              <span className="local-delivery-intro__detail-icon">
                🚚
              </span>

              <div>
                <h4>Local Movement</h4>

                <p>
                  We help coordinate the movement of your cargo from the
                  arrival point toward its intended destination.
                </p>
              </div>

            </div>

            <div className="local-delivery-intro__detail">

              <span className="local-delivery-intro__detail-icon">
                🏠
              </span>

              <div>
                <h4>Final Destination</h4>

                <p>
                  We coordinate the next delivery steps based on your
                  shipment and the agreed local delivery arrangements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalDeliveryIntro;