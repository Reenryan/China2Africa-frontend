import { Link } from "react-router-dom";
import "./BusinessProcurementServices.css";

function BusinessProcurementServices() {
  return (
    <section className="business-procurement-services">
      <div className="business-procurement-services-container">

        {/* SECTION HEADER */}
        <div className="business-procurement-services-header">

          <div>
            <span className="business-procurement-services-eyebrow">
              WHAT WE CAN HELP WITH
            </span>

            <h2 className="business-procurement-services-title">
              Procurement support for
              <br />
              <span>the important parts of buying.</span>
            </h2>
          </div>

          <p className="business-procurement-services-intro">
            From supplier coordination to preparing goods for
            shipment, we help businesses organize the different
            parts of sourcing and purchasing from China.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="business-procurement-services-grid">

          {/* SERVICE 01 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                01
              </span>

              <span className="business-procurement-service-icon">
                🤝
              </span>
            </div>

            <h3>Supplier Coordination</h3>

            <p>
              Coordinate communication with suppliers and help
              ensure that your product requirements are clearly
              understood before purchasing.
            </p>

          </article>

          {/* SERVICE 02 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                02
              </span>

              <span className="business-procurement-service-icon">
                📋
              </span>
            </div>

            <h3>Product & Specification Coordination</h3>

            <p>
              Help organize product specifications, quantities,
              images, quality requirements, and other details
              provided by your business.
            </p>

          </article>

          {/* SERVICE 03 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                03
              </span>

              <span className="business-procurement-service-icon">
                📦
              </span>
            </div>

            <h3>Bulk Purchasing Support</h3>

            <p>
              Coordinate larger product quantities and purchasing
              requirements for wholesalers, retailers, distributors,
              and other businesses.
            </p>

          </article>

          {/* SERVICE 04 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                04
              </span>

              <span className="business-procurement-service-icon">
                🧾
              </span>
            </div>

            <h3>Order Coordination</h3>

            <p>
              Help coordinate confirmed product requirements and
              purchasing arrangements between your business and
              the relevant suppliers.
            </p>

          </article>

          {/* SERVICE 05 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                05
              </span>

              <span className="business-procurement-service-icon">
                🔗
              </span>
            </div>

            <h3>Multi-Supplier Procurement</h3>

            <p>
              When your business needs products from different
              suppliers, we can help coordinate the requirements
              before the goods move toward consolidation.
            </p>

          </article>

          {/* SERVICE 06 */}
          <article className="business-procurement-service-card">

            <div className="business-procurement-service-top">
              <span className="business-procurement-service-number">
                06
              </span>

              <span className="business-procurement-service-icon">
                🚢
              </span>
            </div>

            <h3>Procurement to Shipping Coordination</h3>

            <p>
              Once procurement arrangements are confirmed, we help
              coordinate the next steps toward receiving, consolidating,
              and preparing your goods for shipment.
            </p>

          </article>

        </div>

        {/* BOTTOM CTA */}
        <div className="business-procurement-services-bottom">

          <div>
            <span className="business-procurement-services-bottom-label">
              HAVE A SPECIFIC REQUIREMENT?
            </span>

            <h3>
              Tell us what your business needs.
            </h3>

            <p>
              Share your products, quantities, specifications, and
              other requirements through a sourcing request.
            </p>
          </div>

          <Link
            to="/signup"
            className="business-procurement-services-button"
          >
            Start a Sourcing Request
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default BusinessProcurementServices;