import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./RequestDetails.css";

const RequestDetails = () => {
  const { requestNumber } = useParams();

  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3001/api/requests/${requestNumber}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load request."
          );
        }

        setRequest(result.data);
      } catch (error) {
        console.error(
          "Fetch request details error:",
          error
        );

        setError(
          error.message ||
            "Something went wrong while loading this request."
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (requestNumber) {
      fetchRequest();
    }
  }, [requestNumber]);

  const getStatusLabel = (status) => {
    const statuses = {
      pending: "Pending",
      under_review: "Under Review",
      confirmed: "Confirmed",
      supplier_coordination: "Supplier Coordination",
      completed: "Completed",
      cancelled: "Cancelled",
    };

    return statuses[status] || status;
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      pending: "pending",
      under_review: "review",
      confirmed: "confirmed",
      supplier_coordination: "coordination",
      completed: "completed",
      cancelled: "cancelled",
    };

    return statusClasses[status] || "default";
  };

  const formatDate = (date) => {
    if (!date) {
      return "Not available";
    }

    return new Date(date).toLocaleDateString(
      "en-KE",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatAccountType = (accountType) => {
    if (!accountType) {
      return "Not available";
    }

    return accountType
      .replace("_", " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );
  };

  const getTotalQuantity = () => {
    if (!request?.products?.length) {
      return 0;
    }

    return request.products.reduce(
      (total, product) =>
        total + Number(product.quantity || 0),
      0
    );
  };


  /* ========================================
     LOADING
     ======================================== */

  if (isLoading) {
    return (
      <main className="request-details">

        <div className="request-details__loading">

          <div className="request-details__spinner"></div>

          <p>Loading request details...</p>

        </div>

      </main>
    );
  }


  /* ========================================
     ERROR
     ======================================== */

  if (error || !request) {
    return (
      <main className="request-details">

        <div className="request-details__error">

          <div className="request-details__error-icon">
            !
          </div>

          <h1>
            Request Not Found
          </h1>

          <p>
            {error ||
              "We could not find the sourcing request you are looking for."}
          </p>

          <Link
            to="/dashboard/requests"
            className="request-details__back-button"
          >
            ← Back to My Requests
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="request-details">

      <div className="request-details__container">


        {/* ========================================
            BACK LINK
            ======================================== */}

        <Link
          to="/dashboard/requests"
          className="request-details__back"
        >
          ← Back to My Requests
        </Link>


        {/* ========================================
            HEADER
            ======================================== */}

        <section className="request-details__header">

          <div>

            <span className="request-details__label">
              SOURCING REQUEST
            </span>

            <div className="request-details__title-row">

              <h1>
                {request.request_number}
              </h1>

              <span
                className={`request-details__status request-details__status--${getStatusClass(
                  request.status
                )}`}
              >
                {getStatusLabel(request.status)}
              </span>

            </div>

            <p>
              View the details and progress of your
              sourcing request.
            </p>

          </div>

        </section>


        {/* ========================================
            REQUEST SUMMARY
            ======================================== */}

        <section className="request-details__summary">

          <div className="request-details__summary-item">

            <span>REQUEST NUMBER</span>

            <strong>
              {request.request_number}
            </strong>

          </div>

          <div className="request-details__summary-item">

            <span>SUBMITTED</span>

            <strong>
              {formatDate(request.created_at)}
            </strong>

          </div>

          <div className="request-details__summary-item">

            <span>LAST UPDATED</span>

            <strong>
              {formatDate(request.updated_at)}
            </strong>

          </div>

          <div className="request-details__summary-item">

            <span>ACCOUNT TYPE</span>

            <strong>
              {formatAccountType(
                request.account_type
              )}
            </strong>

          </div>

        </section>


        {/* ========================================
            REQUEST PROGRESS
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>PROGRESS</span>

              <h2>
                Request Status
              </h2>
            </div>

          </div>


          <div className="request-details__timeline">

            <div
              className={`request-details__timeline-item ${
                [
                  "under_review",
                  "confirmed",
                  "supplier_coordination",
                  "completed",
                ].includes(request.status)
                  ? "request-details__timeline-item--active"
                  : ""
              }`}
            >

              <div className="request-details__timeline-marker">
                ✓
              </div>

              <div>
                <h3>
                  Request Submitted
                </h3>

                <p>
                  Your sourcing request has been
                  received by our team.
                </p>

              </div>

            </div>


            <div
              className={`request-details__timeline-item ${
                [
                  "confirmed",
                  "supplier_coordination",
                  "completed",
                ].includes(request.status)
                  ? "request-details__timeline-item--active"
                  : ""
              }`}
            >

              <div className="request-details__timeline-marker">
                2
              </div>

              <div>
                <h3>
                  Request Review
                </h3>

                <p>
                  Our team reviews your products and
                  specifications.
                </p>

              </div>

            </div>


            <div
              className={`request-details__timeline-item ${
                [
                  "supplier_coordination",
                  "completed",
                ].includes(request.status)
                  ? "request-details__timeline-item--active"
                  : ""
              }`}
            >

              <div className="request-details__timeline-marker">
                3
              </div>

              <div>
                <h3>
                  Supplier Coordination
                </h3>

                <p>
                  We coordinate with suitable suppliers
                  after specifications are confirmed.
                </p>

              </div>

            </div>


            <div
              className={`request-details__timeline-item ${
                request.status === "completed"
                  ? "request-details__timeline-item--active"
                  : ""
              }`}
            >

              <div className="request-details__timeline-marker">
                4
              </div>

              <div>
                <h3>
                  Completed
                </h3>

                <p>
                  Your sourcing request has been
                  completed.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================
            PRODUCTS
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>PRODUCTS</span>

              <h2>
                Requested Products
              </h2>
            </div>

            <strong>
              {request.products?.length || 0}{" "}
              {request.products?.length === 1
                ? "Product"
                : "Products"}
            </strong>

          </div>


          <div className="request-details__products">

            {request.products?.length > 0 ? (
              request.products.map(
                (product, index) => (
                  <article
                    className="request-product"
                    key={product.id || index}
                  >

                    <div className="request-product__number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="request-product__content">

                      <div className="request-product__top">

                        <h3>
                          {product.product_name}
                        </h3>

                        <span>
                          {product.quantity} units
                        </span>

                      </div>


                      {product.description ||
                      product.specifications ? (
                        <div className="request-product__specifications">

                          <span>
                            SPECIFICATIONS
                          </span>

                          <p>
                            {product.specifications ||
                              product.description}
                          </p>

                        </div>
                      ) : (
                        <p className="request-product__not-available">
                          Product specifications will
                          appear here once available.
                        </p>
                      )}


                      {product.image_url && (
                        <div className="request-product__image">

                          <img
                            src={product.image_url}
                            alt={product.product_name}
                          />

                        </div>
                      )}

                    </div>

                  </article>
                )
              )
            ) : (
              <div className="request-details__empty">
                No products were found for this request.
              </div>
            )}

          </div>


          <div className="request-details__product-total">

            <span>
              Total Requested Quantity
            </span>

            <strong>
              {getTotalQuantity()} units
            </strong>

          </div>

        </section>


        {/* ========================================
            CUSTOMER INFORMATION
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>CUSTOMER</span>

              <h2>
                Request Information
              </h2>
            </div>

          </div>


          <div className="request-details__information-grid">

            <div>
              <span>CUSTOMER NUMBER</span>

              <strong>
                {request.customer_number ||
                  "Not available"}
              </strong>
            </div>

            <div>
              <span>ACCOUNT TYPE</span>

              <strong>
                {formatAccountType(
                  request.account_type
                )}
              </strong>
            </div>

          </div>

        </section>


        {/* ========================================
            ADMIN UPDATE
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>COMMUNICATION</span>

              <h2>
                Team Updates
              </h2>
            </div>

          </div>


          <div className="request-details__notice">

            <div className="request-details__notice-icon">
              i
            </div>

            <div>

              <h3>
                No Updates Yet
              </h3>

              <p>
                Our team will contact you if we need
                additional information or clarification
                about your request.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            SHIPMENT
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>SHIPPING</span>

              <h2>
                Shipment Information
              </h2>
            </div>

          </div>


          <div className="request-details__unavailable">

            <span>◈</span>

            <div>

              <h3>
                Shipment Not Available Yet
              </h3>

              <p>
                Shipment information will appear here
                once your sourcing request progresses to
                the shipping stage.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            PAYMENT
            ======================================== */}

        <section className="request-details__section">

          <div className="request-details__section-heading">

            <div>
              <span>PAYMENT</span>

              <h2>
                Payment Information
              </h2>
            </div>

          </div>


          <div className="request-details__unavailable">

            <span>▣</span>

            <div>

              <h3>
                Payment Information Not Available Yet
              </h3>

              <p>
                Payment instructions and payment status
                will appear here once your request has been
                confirmed by our team.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            FOOTER ACTIONS
            ======================================== */}

        <div className="request-details__actions">

          <Link
            to="/dashboard/requests"
            className="request-details__secondary-button"
          >
            ← My Requests
          </Link>

          <Link
            to="/dashboard/requests/new"
            className="request-details__primary-button"
          >
            Submit Another Request
            <span>→</span>
          </Link>

        </div>

      </div>

    </main>
  );
};

export default RequestDetails;
