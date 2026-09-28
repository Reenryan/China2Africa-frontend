import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./RecentRequest.css";

const RecentRequests = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecentRequests = async () => {
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
            result.message || "Failed to load recent requests."
          );
        }

        const recentRequests = (result.data || [])
          .sort(
            (a, b) =>
              new Date(b.created_at) -
              new Date(a.created_at)
          )
          .slice(0, 3);

        setRequests(recentRequests);
      } catch (error) {
        console.error(
          "Fetch recent requests error:",
          error
        );

        setError(
          error.message ||
            "Failed to load recent requests."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentRequests();
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
      under_review: "under-review",
      confirmed: "confirmed",
      supplier_coordination: "supplier-coordination",
      completed: "completed",
      cancelled: "cancelled",
    };

    return (
      statusClasses[status] || "default"
    );
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-KE",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const getProductSummary = (request) => {
    if (!request.products?.length) {
      return "No products";
    }

    if (request.products.length === 1) {
      return request.products[0].product_name;
    }

    return `${request.products[0].product_name} + ${
      request.products.length - 1
    } more`;
  };

  const getQuantitySummary = (request) => {
    if (!request.products?.length) {
      return "-";
    }

    const totalQuantity = request.products.reduce(
      (total, product) =>
        total + Number(product.quantity || 0),
      0
    );

    return `${totalQuantity} units`;
  };

  return (
    <section className="recent-requests">

      <div className="recent-requests__header">

        <div>
          <span>ACTIVITY</span>

          <h2>
            Recent Requests
          </h2>
        </div>

        <Link to="/dashboard/requests">
          View All →
        </Link>

      </div>


      {isLoading && (
        <div className="recent-requests__message">
          Loading recent requests...
        </div>
      )}


      {!isLoading && error && (
        <div className="recent-requests__message recent-requests__message--error">
          {error}
        </div>
      )}


      {!isLoading &&
        !error &&
        requests.length === 0 && (
          <div className="recent-requests__message">
            No sourcing requests found.
          </div>
        )}


      {!isLoading &&
        !error &&
        requests.length > 0 && (
          <div className="recent-requests__table-wrapper">

            <table className="recent-requests__table">

              <thead>
                <tr>
                  <th>Request</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {requests.map((request) => (
                  <tr
                    key={request.request_number}
                  >

                    <td>
                      <Link
                        to={`/dashboard/requests/${request.request_number}`}
                      >
                        {request.request_number}
                      </Link>
                    </td>

                    <td>
                      {getProductSummary(request)}
                    </td>

                    <td>
                      {getQuantitySummary(request)}
                    </td>

                    <td>
                      {formatDate(
                        request.created_at
                      )}
                    </td>

                    <td>

                      <span
                        className={`recent-requests__status recent-requests__status--${getStatusClass(
                          request.status
                        )}`}
                      >
                        {getStatusLabel(
                          request.status
                        )}
                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

    </section>
  );
};

export default RecentRequests;