import "./BusinessProcurementIntro.css";

function BusinessProcurementIntro() {
  return (
    <section className="business-procurement-intro">
      <div className="business-procurement-intro-container">

        {/* HEADING */}
        <div className="business-procurement-intro-heading">

          <span className="business-procurement-intro-eyebrow">
            BUSINESS PROCUREMENT MADE SIMPLE
          </span>

          <h2 className="business-procurement-intro-title">
            More than finding a supplier.
            <br />
            <span>We help coordinate the purchase.</span>
          </h2>

        </div>

        {/* CONTENT */}
        <div className="business-procurement-intro-content">

          <p>
            For businesses sourcing from China, procurement can involve
            more than simply finding a product. You may need to
            communicate product requirements, compare supplier options,
            confirm quantities, coordinate specifications, and organize
            the purchasing process.
          </p>

          <p>
            China2Africa helps coordinate these requirements between
            your business and suppliers in China. Once you tell us what
            your business needs, we review the requirements, communicate
            with the relevant parties, and help coordinate the next
            steps toward getting your goods ready for shipment.
          </p>

          <p>
            This can be especially useful when you are purchasing
            multiple products, dealing with different suppliers, or
            sourcing goods in larger quantities for your business.
          </p>

        </div>

      </div>

      {/* HIGHLIGHTS */}
      <div className="business-procurement-intro-highlights">

        <div className="business-procurement-intro-highlight">

          <div className="business-procurement-highlight-icon">
            01
          </div>

          <div>
            <h3>Understand Your Requirements</h3>

            <p>
              We start by understanding the products, quantities,
              specifications, and other requirements for your business.
            </p>
          </div>

        </div>

        <div className="business-procurement-intro-highlight">

          <div className="business-procurement-highlight-icon">
            02
          </div>

          <div>
            <h3>Coordinate Suppliers</h3>

            <p>
              We help coordinate communication and requirements with
              suppliers in China based on your sourcing needs.
            </p>
          </div>

        </div>

        <div className="business-procurement-intro-highlight">

          <div className="business-procurement-highlight-icon">
            03
          </div>

          <div>
            <h3>Prepare for the Next Step</h3>

            <p>
              Once the purchasing details are confirmed, we coordinate
              the process toward getting your goods ready for shipment.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessProcurementIntro;