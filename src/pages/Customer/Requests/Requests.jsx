import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Requests.css";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/requests",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load requests."
          );
        }

        setRequests(result.data || []);
      } catch (error) {
        console.error("Fetch requests error:", error);

        setError(
          error.message ||
            "Something went wrong while loading your requests."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

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
    return new Date(date).toLocaleDateString("en-KE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="customer-requests">

      <div className="customer-requests__container">

        {/* PAGE HEADER */}
        <section className="customer-requests__header">

          <div>
            <span className="customer-requests__label">
              SOURCING REQUESTS
            </span>

            <h1>
              My <strong>Requests</strong>
            </h1>

            <p>
              View and manage the sourcing requests you have
              submitted to China2Africa.
            </p>
          </div>

          <Link
            to="/dashboard/requests/new"
            className="customer-requests__new-button"
          >
            <span>＋</span>
            New Request
          </Link>

        </section>


        {/* ERROR */}
        {error && (
          <div className="customer-requests__message customer-requests__message--error">
            <strong>Unable to load requests</strong>

            <p>{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}


        {/* LOADING */}
        {isLoading && !error && (
          <div className="customer-requests__loading">
            <div className="customer-requests__spinner"></div>

            <p>Loading your requests...</p>
          </div>
        )}


        {/* EMPTY */}
        {!isLoading && !error && requests.length === 0 && (
          <div className="customer-requests__empty">

            <div className="customer-requests__empty-icon">
              +
            </div>

            <h2>No Sourcing Requests Yet</h2>

            <p>
              You haven't submitted a sourcing request yet.
              Start by telling us what products you want to
              source from China.
            </p>

            <Link
              to="/dashboard/requests/new"
              className="customer-requests__new-button"
            >
              Create Your First Request
            </Link>

          </div>
        )}


        {/* REQUESTS */}
        {!isLoading && !error && requests.length > 0 && (
          <section className="customer-requests__list">

            <div className="customer-requests__list-header">
              <h2>
                Your Requests
              </h2>

              <span>
                {requests.length}{" "}
                {requests.length === 1
                  ? "Request"
                  : "Requests"}
              </span>
            </div>


            <div className="customer-requests__cards">

              {requests.map((request) => (
                <article
                  key={request.id}
                  className="customer-request-card"
                >

                  <div className="customer-request-card__top">

                    <div>
                      <span className="customer-request-card__number">
                        {request.request_number}
                      </span>

                      <h3>
                        Sourcing Request
                      </h3>
                    </div>

                    <span
                      className={`customer-request-card__status customer-request-card__status--${getStatusClass(
                        request.status
                      )}`}
                    >
                      {getStatusLabel(request.status)}
                    </span>

                  </div>


                  <div className="customer-request-card__details">

                    <div>
                      <span>SUBMITTED</span>

                      <strong>
                        {formatDate(request.created_at)}
                      </strong>
                    </div>

                    <div>
                      <span>PRODUCTS</span>

                      <strong>
                        {request.products?.length || 0}
                      </strong>
                    </div>

                    <div>
                      <span>ACCOUNT TYPE</span>

                      <strong>
                        {request.account_type
                          ?.replace("_", " ")
                          .replace(/\b\w/g, (letter) =>
                            letter.toUpperCase()
                          )}
                      </strong>
                    </div>

                  </div>


                  <div className="customer-request-card__bottom">

                    <span>
                      {request.products?.length || 0}{" "}
                      {request.products?.length === 1
                        ? "product"
                        : "products"}{" "}
                      requested
                    </span>

                    <Link
                      to={`/dashboard/requests/${request.request_number}`}
                      className="customer-request-card__view"
                    >
                      View Request
                      <span>→</span>
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

export default Requests;