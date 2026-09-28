import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Shipments.css";

const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/shipments",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load shipments."
          );
        }

        setShipments(result.data || []);
      } catch (error) {
        console.error("Fetch shipments error:", error);

        setError(
          error.message ||
            "Something went wrong while loading your shipments."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchShipments();
  }, []);

  const getStatusLabel = (status) => {
    const statuses = {
      supplier_coordination: "Supplier Coordination",
      preparing: "Preparing",
      in_transit: "In Transit",
      arrived: "Arrived",
      delivered: "Delivered",
      cancelled: "Cancelled",
    };

    return statuses[status] || status;
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      supplier_coordination: "coordination",
      preparing: "preparing",
      in_transit: "transit",
      arrived: "arrived",
      delivered: "delivered",
      cancelled: "cancelled",
    };

    return statusClasses[status] || "default";
  };

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-KE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getTotalQuantity = (products) => {
    return (products || []).reduce(
      (total, product) =>
        total + Number(product.quantity || 0),
      0
    );
  };

  return (
    <main className="customer-shipments">
      <div className="customer-shipments__container">

        <section className="customer-shipments__header">
          <div>
            <span>LOGISTICS</span>

            <h1>
              My <strong>Shipments</strong>
            </h1>

            <p>
              View the shipment information associated with
              your confirmed sourcing requests.
            </p>
          </div>
        </section>

        {isLoading && (
          <div className="customer-shipments__loading">
            <div className="customer-shipments__spinner"></div>
            <p>Loading your shipments...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="customer-shipments__message customer-shipments__message--error">
            <strong>Unable to load shipments</strong>

            <p>{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading &&
          !error &&
          shipments.length === 0 && (
            <div className="customer-shipments__empty">
              <div className="customer-shipments__empty-icon">
                ◈
              </div>

              <h2>No Shipments Yet</h2>

              <p>
                Shipment information will appear here once
                one of your sourcing requests has progressed
                to the shipping stage.
              </p>

              <Link
                to="/dashboard/requests"
                className="customer-shipments__button"
              >
                View My Requests
              </Link>
            </div>
          )}

        {!isLoading &&
          !error &&
          shipments.length > 0 && (
            <section className="customer-shipments__list">

              <div className="customer-shipments__list-header">
                <h2>Your Shipments</h2>

                <span>
                  {shipments.length}{" "}
                  {shipments.length === 1
                    ? "Shipment"
                    : "Shipments"}
                </span>
              </div>

              <div className="customer-shipments__cards">
                {shipments.map((shipment) => (
                  <article
                    key={shipment.id}
                    className="customer-shipment-card"
                  >
                    <div className="customer-shipment-card__top">
                      <div>
                        <span>
                          {shipment.shipment_number}
                        </span>

                        <h3>
                          Shipment for{" "}
                          {shipment.request_number}
                        </h3>
                      </div>

                      <span
                        className={`customer-shipment-card__status customer-shipment-card__status--${getStatusClass(
                          shipment.status
                        )}`}
                      >
                        {getStatusLabel(
                          shipment.status
                        )}
                      </span>
                    </div>

                    <div className="customer-shipment-card__details">
                      <div>
                        <span>SHIPPING METHOD</span>
                        <strong>
                          {shipment.shipping_method}
                        </strong>
                      </div>

                      <div>
                        <span>ORIGIN</span>
                        <strong>
                          {shipment.origin}
                        </strong>
                      </div>

                      <div>
                        <span>DESTINATION</span>
                        <strong>
                          {shipment.destination}
                        </strong>
                      </div>

                      <div>
                        <span>PRODUCTS</span>
                        <strong>
                          {shipment.products?.length || 0}
                        </strong>
                      </div>
                    </div>

                    <div className="customer-shipment-card__bottom">
                      <div>
                        <span>ESTIMATED ARRIVAL</span>

                        <strong>
                          {formatDate(
                            shipment.estimated_arrival
                          )}
                        </strong>
                      </div>

                      <div>
                        <span>TOTAL QUANTITY</span>

                        <strong>
                          {getTotalQuantity(
                            shipment.products
                          )}{" "}
                          units
                        </strong>
                      </div>

                      <Link
                        to={`/dashboard/requests/${shipment.request_number}`}
                        className="customer-shipment-card__view"
                      >
                        View Request →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

      </div>
    </main>
  );
};

export default Shipments;
