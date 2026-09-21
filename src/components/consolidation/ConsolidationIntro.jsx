import "./ConsolidationIntro.css";

function ConsolidationIntro() {
  return (
    <section className="consolidation-intro">
      <div className="consolidation-intro-container">

        <div className="consolidation-intro-heading">
          <span className="consolidation-intro-eyebrow">
            WHY CONSOLIDATE?
          </span>

          <h2 className="consolidation-intro-title">
            Multiple suppliers.
            <br />
            <span>One coordinated shipment.</span>
          </h2>
        </div>

        <div className="consolidation-intro-content">

          <p>
            When you source products from different suppliers in China,
            managing separate shipments can become complicated. Your
            goods may need to be collected, coordinated, prepared, and
            shipped at different times.
          </p>

          <p>
            Cargo consolidation brings compatible goods together before
            they are shipped, allowing your purchases to be handled as
            one coordinated shipment.
          </p>

          <p>
            China2Africa helps coordinate this process so you can focus
            on your business while we help organize the movement of your
            goods from suppliers in China toward Africa.
          </p>

        </div>

      </div>

      <div className="consolidation-intro-flow">

        <div className="consolidation-flow-item">
          <div className="consolidation-flow-icon">
            01
          </div>

          <div>
            <h3>Multiple Suppliers</h3>
            <p>
              Products sourced from different suppliers in China.
            </p>
          </div>
        </div>

        <div className="consolidation-flow-arrow">
          →
        </div>

        <div className="consolidation-flow-item">
          <div className="consolidation-flow-icon">
            02
          </div>

          <div>
            <h3>Cargo Consolidation</h3>
            <p>
              Goods are coordinated and prepared together.
            </p>
          </div>
        </div>

        <div className="consolidation-flow-arrow">
          →
        </div>

        <div className="consolidation-flow-item">
          <div className="consolidation-flow-icon">
            03
          </div>

          <div>
            <h3>One Shipment</h3>
            <p>
              Your consolidated cargo moves as a coordinated shipment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ConsolidationIntro;