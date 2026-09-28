import "./RequestReview.css";

const RequestReview = ({
  requestData,
  onBack,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <section className="request-review">
      <div className="request-review__header">
        <span>STEP 3</span>

        <h2>Review Your Request</h2>

        <p>
          Please review the information below before submitting
          your sourcing request.
        </p>
      </div>

      <div className="request-review__body">
        <div className="request-review__section">
          <div className="request-review__section-header">
            <h3>Request Information</h3>
          </div>

          <div className="request-review__details">
            <div>
              <span>Account Type</span>
              <strong>
                {requestData.account_type
                  .replace("_", " ")
                  .replace(/\b\w/g, (letter) =>
                    letter.toUpperCase()
                  )}
              </strong>
            </div>

            <div>
              <span>Preferred Supplier</span>
              <strong>
                {requestData.preferred_supplier ||
                  "Not specified"}
              </strong>
            </div>

            <div className="request-review__full">
              <span>General Request Information</span>
              <p>{requestData.sourcing_notes}</p>
            </div>
          </div>
        </div>

        <div className="request-review__section">
          <div className="request-review__section-header">
            <h3>
              Products ({requestData.products.length})
            </h3>
          </div>

          <div className="request-review__products">
            {requestData.products.map((product, index) => (
              <div
                className="request-review__product"
                key={product.id}
              >
                <div className="request-review__product-number">
                  {index + 1}
                </div>

                <div className="request-review__product-info">
                  <h4>{product.name}</h4>

                  <div className="request-review__product-meta">
                    <span>
                      Quantity:{" "}
                      <strong>{product.quantity}</strong>
                    </span>

                    <span>
                      Images:{" "}
                      <strong>
                        {product.images.length}
                      </strong>
                    </span>
                  </div>

                  <div className="request-review__specifications">
                    <span>Specifications</span>
                    <p>{product.specifications}</p>
                  </div>

                  {product.images.length > 0 && (
                    <div className="request-review__images">
                      {product.images.map((image) => (
                        <img
                          key={image.id}
                          src={image.preview}
                          alt={product.name}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="request-review__notice">
          <strong>What happens after submission?</strong>

          <p>
            Our China2Africa team will review your request,
            contact you to clarify or confirm the specifications,
            and then begin coordinating with suppliers.
          </p>
        </div>
      </div>

      <div className="request-review__footer">
        <button
          type="button"
          className="request-review__back"
          onClick={onBack}
          disabled={isSubmitting}
        >
          ← Back
        </button>

        <button
          type="button"
          className="request-review__submit"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Submit Sourcing Request
              <span>→</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default RequestReview;