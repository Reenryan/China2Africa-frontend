import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Payments.css";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/payments",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load payments."
          );
        }

        setPayments(result.data || []);
      } catch (error) {
        console.error("Fetch payments error:", error);

        setError(
          error.message ||
            "Something went wrong while loading your payments."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const getStatusLabel = (status) => {
    const statuses = {
      pending: "Pending",
      paid: "Paid",
      partially_paid: "Partially Paid",
      failed: "Failed",
      cancelled: "Cancelled",
    };

    return statuses[status] || status;
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      pending: "pending",
      paid: "paid",
      partially_paid: "partial",
      failed: "failed",
      cancelled: "cancelled",
    };

    return statusClasses[status] || "default";
  };

  const formatAmount = (amount, currency) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: currency || "KES",
      minimumFractionDigits: 2,
    }).format(Number(amount || 0));
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-KE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="customer-payments">
      <div className="customer-payments__container">

        <section className="customer-payments__header">
          <div>
            <span>ACCOUNTING</span>

            <h1>
              My <strong>Payments</strong>
            </h1>

            <p>
              View payment information and payment status
              for your sourcing requests.
            </p>
          </div>
        </section>

        <div className="customer-payments__notice">
          <span>i</span>

          <div>
            <strong>Payment information</strong>

            <p>
              China2Africa currently handles payments
              manually. Our team will provide payment
              instructions after your order and shipping
              details have been confirmed.
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="customer-payments__loading">
            <div className="customer-payments__spinner"></div>
            <p>Loading your payments...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="customer-payments__message customer-payments__message--error">
            <strong>Unable to load payments</strong>

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
          payments.length === 0 && (
            <div className="customer-payments__empty">
              <div className="customer-payments__empty-icon">
                ▣
              </div>

              <h2>No Payment Records Yet</h2>

              <p>
                Payment information will appear here once
                a payment has been created for one of your
                sourcing requests.
              </p>

              <Link
                to="/dashboard/requests"
                className="customer-payments__button"
              >
                View My Requests
              </Link>
            </div>
          )}

        {!isLoading &&
          !error &&
          payments.length > 0 && (
            <section className="customer-payments__list">

              <div className="customer-payments__list-header">
                <h2>Payment Records</h2>

                <span>
                  {payments.length}{" "}
                  {payments.length === 1
                    ? "Payment"
                    : "Payments"}
                </span>
              </div>

              <div className="customer-payments__cards">
                {payments.map((payment) => (
                  <article
                    key={payment.id}
                    className="customer-payment-card"
                  >
                    <div className="customer-payment-card__top">
                      <div>
                        <span>
                          {payment.payment_number}
                        </span>

                        <h3>
                          {payment.description}
                        </h3>
                      </div>

                      <span
                        className={`customer-payment-card__status customer-payment-card__status--${getStatusClass(
                          payment.status
                        )}`}
                      >
                        {getStatusLabel(payment.status)}
                      </span>
                    </div>

                    <div className="customer-payment-card__amount">
                      <span>AMOUNT</span>

                      <strong>
                        {formatAmount(
                          payment.amount,
                          payment.currency
                        )}
                      </strong>
                    </div>

                    <div className="customer-payment-card__details">
                      <div>
                        <span>REQUEST</span>
                        <strong>
                          {payment.request_number}
                        </strong>
                      </div>

                      <div>
                        <span>SHIPMENT</span>
                        <strong>
                          {payment.shipment_number ||
                            "Not assigned"}
                        </strong>
                      </div>

                      <div>
                        <span>PAYMENT METHOD</span>
                        <strong>
                          {payment.payment_method ||
                            "Not provided"}
                        </strong>
                      </div>

                      <div>
                        <span>DATE</span>
                        <strong>
                          {formatDate(
                            payment.created_at
                          )}
                        </strong>
                      </div>
                    </div>

                    {payment.payment_reference && (
                      <div className="customer-payment-card__reference">
                        <span>PAYMENT REFERENCE</span>

                        <strong>
                          {payment.payment_reference}
                        </strong>
                      </div>
                    )}

                    {payment.payment_instructions && (
                      <div className="customer-payment-card__instructions">
                        <span>PAYMENT INSTRUCTIONS</span>

                        <p>
                          {payment.payment_instructions}
                        </p>
                      </div>
                    )}

                    <div className="customer-payment-card__bottom">
                      <Link
                        to={`/dashboard/requests/${payment.request_number}`}
                      >
                        View Related Request →
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

export default Payments;
