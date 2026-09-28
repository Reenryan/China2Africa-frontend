import { Link, useLocation } from "react-router-dom";

import "./RequestSubmitted.css";

const RequestSubmitted = () => {
  const location = useLocation();

  const requestNumber =
    location.state?.requestNumber || "SR-00001";

  return (
    <main className="request-submitted-page">
      <div className="request-submitted-page__container">
        <div className="request-submitted-page__icon">
          ✓
        </div>

        <span className="request-submitted-page__label">
          CHINA2AFRICA · REQUEST SUBMITTED
        </span>

        <h1>
          Your Sourcing Request
          <strong> Has Been Submitted</strong>
        </h1>

        <p className="request-submitted-page__intro">
          Thank you for submitting your sourcing request. Our
          team will review the information provided and contact
          you regarding the next steps.
        </p>

        <div className="request-submitted-page__request-number">
          <span>REQUEST NUMBER</span>

          <strong>{requestNumber}</strong>
        </div>

        <div className="request-submitted-page__next">
          <h2>What Happens Next?</h2>

          <div className="request-submitted-page__steps">
            <div>
              <span>1</span>

              <div>
                <h3>Request Review</h3>
                <p>
                  Our team reviews your products,
                  specifications and requirements.
                </p>
              </div>
            </div>

            <div>
              <span>2</span>

              <div>
                <h3>Confirmation & Communication</h3>
                <p>
                  We contact you to clarify or confirm
                  the product specifications.
                </p>
              </div>
            </div>

            <div>
              <span>3</span>

              <div>
                <h3>Supplier Coordination</h3>
                <p>
                  Once the details are confirmed, our team
                  begins coordinating with suitable suppliers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="request-submitted-page__actions">
          <Link
            to={`/dashboard/requests/${requestNumber}`}
            className="request-submitted-page__primary"
          >
            View My Request
            <span>→</span>
          </Link>

          <Link
            to="/dashboard"
            className="request-submitted-page__secondary"
          >
            Back to Dashboard
          </Link>
        </div>

        <p className="request-submitted-page__note">
          You can monitor updates to this request from your
          customer dashboard.
        </p>
      </div>
    </main>
  );
};

export default RequestSubmitted;