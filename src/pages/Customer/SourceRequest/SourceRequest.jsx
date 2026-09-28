import { useState } from "react";

import { useNavigate } from "react-router-dom";

import ProductForm from "../../../components/Customer/SourceRequest/ProductForm/ProductForm";

import RequestDetails from "../../../components/Customer/SourceRequest/RequestDetails/RequestDetails";

import RequestReview from "../../../components/Customer/SourceRequest/RequestReview/RequestReview";

import "./SourceRequest.css";

const SourceRequest = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const [requestData, setRequestData] = useState({
    account_type: "",
    sourcing_notes: "",
    preferred_supplier: "",
    products: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateRequestData = (data) => {
    setRequestData((previous) => ({
      ...previous,
      ...data,
    }));
  };

  const goToNextStep = () => {
    setCurrentStep((previous) => previous + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((previous) => previous - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    /*
      Backend submission will eventually happen here.

      Example:

      const response = await fetch(
        "http://localhost:3001/api/sourcing-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(requestData),
        }
      );
    */

    console.log("Sourcing request:", requestData);

    setTimeout(() => {
      setIsSubmitting(false);

      navigate("/dashboard");
    }, 1000);
  };

  return (
    <main className="source-request-page">
      <div className="source-request-page__content">

        <div className="source-request-page__heading">
          <span>CHINA2AFRICA · SOURCING</span>

          <h1>
            Start a <strong>Sourcing Request</strong>
          </h1>

          <p>
            Tell us what you would like to source from China.
            You can add multiple products to one request.
          </p>
        </div>

        <div className="source-request-page__steps">

          <div
            className={
              currentStep >= 1
                ? "source-request-page__step source-request-page__step--active"
                : "source-request-page__step"
            }
          >
            <span>1</span>
            <p>Request Details</p>
          </div>

          <div
            className={
              currentStep >= 2
                ? "source-request-page__step source-request-page__step--active"
                : "source-request-page__step"
            }
          >
            <span>2</span>
            <p>Products</p>
          </div>

          <div
            className={
              currentStep >= 3
                ? "source-request-page__step source-request-page__step--active"
                : "source-request-page__step"
            }
          >
            <span>3</span>
            <p>Review</p>
          </div>

        </div>

        <div className="source-request-page__form-container">

          {currentStep === 1 && (
            <RequestDetails
              requestData={requestData}
              updateRequestData={updateRequestData}
              onNext={goToNextStep}
            />
          )}

          {currentStep === 2 && (
            <ProductForm
              products={requestData.products}
              updateRequestData={updateRequestData}
              onNext={goToNextStep}
              onBack={goToPreviousStep}
            />
          )}

          {currentStep === 3 && (
            <RequestReview
              requestData={requestData}
              onBack={goToPreviousStep}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}

        </div>

      </div>
    </main>
  );
};

export default SourceRequest;
