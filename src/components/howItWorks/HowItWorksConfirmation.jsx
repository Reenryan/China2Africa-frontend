import React from "react";
import "./HowItWorksConfirmation.css";

const HowItWorksConfirmation = () => {
  const confirmationSteps = [
    {
      number: "01",
      icon: "🔎",
      title: "Review Your Request",
      description:
        "Our team reviews the product information, specifications, quantity, images, and other details you provided.",
    },
    {
      number: "02",
      icon: "💬",
      title: "Contact & Clarify",
      description:
        "We communicate with you to clarify any missing information and make sure we understand exactly what you need.",
    },
    {
      number: "03",
      icon: "🏭",
      title: "Coordinate With Suppliers",
      description:
        "We communicate with relevant suppliers and gather information about the product, availability, specifications, and sourcing requirements.",
    },
    {
      number: "04",
      icon: "🤝",
      title: "Confirm the Details",
      description:
        "The relevant product and sourcing details are discussed with you so that the requirements can be confirmed before procurement proceeds.",
    },
  ];

  const confirmationDetails = [
    {
      icon: "📦",
      title: "Product Specifications",
      description:
        "Size, model, material, color, quality, features, packaging, or other requirements relevant to the product.",
    },
    {
      icon: "🔢",
      title: "Quantity",
      description:
        "The quantity required for each product and any changes agreed during communication.",
    },
    {
      icon: "🏭",
      title: "Supplier & Product Information",
      description:
        "Relevant supplier information and product details identified during the sourcing process.",
    },
    {
      icon: "🚚",
      title: "Shipping Considerations",
      description:
        "Information that may affect consolidation, shipping arrangements, destination, or delivery.",
    },
  ];

  return (
    <section className="how-it-works-confirmation">
      <div className="how-it-works-confirmation__container">

        <div className="how-it-works-confirmation__header">

          <span className="how-it-works-confirmation__eyebrow">
            STEP 03 · REVIEW & CONFIRMATION
          </span>

          <h2>
            We Review, Communicate,
            <span> and Confirm the Details</span>
          </h2>

          <p>
            After you submit your sourcing request, our team reviews the
            information and communicates with you before moving forward with
            procurement. This helps ensure that the product and sourcing
            requirements are clearly understood.
          </p>

        </div>

        <div className="how-it-works-confirmation__journey">

          {confirmationSteps.map((step, index) => (
            <React.Fragment key={index}>

              <div className="how-it-works-confirmation__step">

                <div className="how-it-works-confirmation__step-top">

                  <span className="how-it-works-confirmation__number">
                    {step.number}
                  </span>

                  <span className="how-it-works-confirmation__icon">
                    {step.icon}
                  </span>

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

              {index < confirmationSteps.length - 1 && (
                <div className="how-it-works-confirmation__connector">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        <div className="how-it-works-confirmation__details">

          <div className="how-it-works-confirmation__details-content">

            <span className="how-it-works-confirmation__details-eyebrow">
              WHAT GETS CONFIRMED
            </span>

            <h3>
              We Make Sure Everyone Is
              <span> Working From the Same Requirements</span>
            </h3>

            <p>
              Product sourcing can involve several details. Before moving
              into procurement, we work with you to clarify the important
              requirements and communicate relevant information identified
              during the sourcing process.
            </p>

            <div className="how-it-works-confirmation__details-grid">

              {confirmationDetails.map((detail, index) => (
                <div
                  className="how-it-works-confirmation__detail"
                  key={index}
                >

                  <div className="how-it-works-confirmation__detail-icon">
                    {detail.icon}
                  </div>

                  <div>
                    <h4>{detail.title}</h4>

                    <p>{detail.description}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="how-it-works-confirmation__confirmation-card">

            <div className="how-it-works-confirmation__confirmation-card-header">

              <span className="how-it-works-confirmation__check">
                ✓
              </span>

              <div>
                <span>REQUEST STATUS</span>

                <h4>
                  Specifications Being Confirmed
                </h4>
              </div>

            </div>

            <div className="how-it-works-confirmation__progress">

              <div className="how-it-works-confirmation__progress-item how-it-works-confirmation__progress-item--complete">
                <span>✓</span>
                <div>
                  <strong>Request Submitted</strong>
                  <small>Your sourcing request has been received.</small>
                </div>
              </div>

              <div className="how-it-works-confirmation__progress-line"></div>

              <div className="how-it-works-confirmation__progress-item how-it-works-confirmation__progress-item--active">
                <span>02</span>
                <div>
                  <strong>Details Confirmed</strong>
                  <small>
                    Product and sourcing requirements are being clarified.
                  </small>
                </div>
              </div>

              <div className="how-it-works-confirmation__progress-line"></div>

              <div className="how-it-works-confirmation__progress-item">
                <span>03</span>
                <div>
                  <strong>Procurement</strong>
                  <small>
                    Procurement proceeds once the relevant details are
                    confirmed.
                  </small>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="how-it-works-confirmation__notice">

          <div className="how-it-works-confirmation__notice-icon">
            💡
          </div>

          <div>

            <span>
              IMPORTANT
            </span>

            <h3>
              Your request is discussed with you before procurement proceeds
            </h3>

            <p>
              Submitting a request does not automatically commit you to a
              purchase. Our team communicates with you about the relevant
              product, supplier, specifications, and procurement details
              before the next stage.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksConfirmation;