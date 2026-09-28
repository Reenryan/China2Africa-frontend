import { useState } from "react";

import "./RequestDetails.css";

const RequestDetails = ({
  requestData,
  updateRequestData,
  onNext,
}) => {
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    updateRequestData({
      [name]: value,
    });

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!requestData.account_type) {
      newErrors.account_type = "Please select your account type.";
    }

    if (!requestData.sourcing_notes.trim()) {
      newErrors.sourcing_notes =
        "Please provide some information about what you want to source.";
    }

    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onNext();
  };

  return (
    <section className="request-details">
      <div className="request-details__header">
        <span>STEP 1</span>

        <h2>Tell Us About Your Request</h2>

        <p>
          Provide some general information before adding the
          products you want us to source.
        </p>
      </div>

      <div className="request-details__body">
        <div className="request-details__field">
          <label htmlFor="request-account-type">
            Account Type
          </label>

          <select
            id="request-account-type"
            name="account_type"
            value={requestData.account_type}
            onChange={handleChange}
            className={
              errors.account_type ? "input-error" : ""
            }
          >
            <option value="">Select account type</option>
            <option value="individual">Individual</option>
            <option value="small_business">
              Small Business
            </option>
            <option value="wholesaler">Wholesaler</option>
          </select>

          {errors.account_type && (
            <p className="request-details__error">
              {errors.account_type}
            </p>
          )}
        </div>

        <div className="request-details__field">
          <label htmlFor="request-sourcing-notes">
            What would you like us to source?
          </label>

          <textarea
            id="request-sourcing-notes"
            name="sourcing_notes"
            value={requestData.sourcing_notes}
            onChange={handleChange}
            placeholder="Briefly describe what you are looking for..."
            rows="5"
            className={
              errors.sourcing_notes ? "input-error" : ""
            }
          />

          {errors.sourcing_notes && (
            <p className="request-details__error">
              {errors.sourcing_notes}
            </p>
          )}
        </div>

        <div className="request-details__field">
          <label htmlFor="request-preferred-supplier">
            Preferred Supplier or Source
            <span>Optional</span>
          </label>

          <input
            type="text"
            id="request-preferred-supplier"
            name="preferred_supplier"
            value={requestData.preferred_supplier}
            onChange={handleChange}
            placeholder="If you already have a supplier or source in mind"
          />
        </div>
      </div>

      <div className="request-details__footer">
        <button
          type="button"
          className="request-details__cancel"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>

        <button
          type="button"
          className="request-details__next"
          onClick={handleNext}
        >
          Continue to Products
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default RequestDetails;