import { Link } from "react-router-dom";
import "./HowItWorksSourcing.css";

const HowItWorksSourcing = () => {
  const requestDetails = [
    {
      icon: "📦",
      title: "Product Details",
      description:
        "Tell us the product you want to source and provide a clear description of what you are looking for.",
    },
    {
      icon: "🔢",
      title: "Quantity",
      description:
        "Provide the quantity you need so we can understand the scale of your sourcing requirement.",
    },
    {
      icon: "📝",
      title: "Specifications",
      description:
        "Include important details such as size, color, material, model, quality, or other product requirements.",
    },
    {
      icon: "🖼️",
      title: "Images & References",
      description:
        "Upload product images, sample photos, links, or other references that can help identify the product.",
    },
    {
      icon: "📍",
      title: "Destination",
      description:
        "Provide the intended destination so the team can understand where the goods will ultimately be delivered or collected.",
    },
    {
      icon: "💬",
      title: "Additional Information",
      description:
        "Share any other requirements, preferences, or information that may help our team understand your request.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Submit Your Request",
      description:
        "Complete your sourcing request through your customer account and provide the relevant product information.",
    },
    {
      number: "02",
      title: "Our Team Reviews It",
      description:
        "We review the information you provide and identify anything that may need clarification.",
    },
    {
      number: "03",
      title: "We Contact You",
      description:
        "Our team communicates with you to clarify specifications, quantities, requirements, and other important details.",
    },
    {
      number: "04",
      title: "Sourcing Begins",
      description:
        "Once the requirements are sufficiently clear, we can proceed with supplier and product sourcing coordination.",
    },
  ];

  return (
    <section className="how-it-works-sourcing">
      <div className="how-it-works-sourcing__container">

        <div className="how-it-works-sourcing__header">

          <span className="how-it-works-sourcing__eyebrow">
            STEP 02 · PRODUCT SOURCING
          </span>

          <h2>
            Tell Us What You Want
            <span> to Source From China</span>
          </h2>

          <p>
            Once you have created your account, you can submit a sourcing
            request with the information our team needs to understand the
            product you are looking for.
          </p>

        </div>

        <div className="how-it-works-sourcing__main">

          <div className="how-it-works-sourcing__details">

            <div className="how-it-works-sourcing__section-heading">

              <span>
                WHAT TO INCLUDE
              </span>

              <h3>
                Give Us Enough Information
                <span> to Understand Your Request</span>
              </h3>

              <p>
                The more clearly you describe what you need, the easier it is
                for our team to understand your requirements and communicate
                with you about the next steps.
              </p>

            </div>

            <div className="how-it-works-sourcing__grid">

              {requestDetails.map((detail, index) => (
                <div
                  className="how-it-works-sourcing__detail-card"
                  key={index}
                >

                  <div className="how-it-works-sourcing__detail-icon">
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

          <div className="how-it-works-sourcing__request-preview">

            <div className="how-it-works-sourcing__preview-header">

              <div>
                <span>
                  SOURCING REQUEST
                </span>

                <h3>
                  Example Request
                </h3>
              </div>

              <span className="how-it-works-sourcing__preview-status">
                DRAFT
              </span>

            </div>

            <div className="how-it-works-sourcing__preview-body">

              <div className="how-it-works-sourcing__field">

                <label>
                  PRODUCT
                </label>

                <div className="how-it-works-sourcing__field-value">
                  Wireless Earbuds
                </div>

              </div>

              <div className="how-it-works-sourcing__field-row">

                <div className="how-it-works-sourcing__field">

                  <label>
                    QUANTITY
                  </label>

                  <div className="how-it-works-sourcing__field-value">
                    500 Units
                  </div>

                </div>

                <div className="how-it-works-sourcing__field">

                  <label>
                    DESTINATION
                  </label>

                  <div className="how-it-works-sourcing__field-value">
                    Kenya
                  </div>

                </div>

              </div>

              <div className="how-it-works-sourcing__field">

                <label>
                  SPECIFICATIONS
                </label>

                <div className="how-it-works-sourcing__field-value how-it-works-sourcing__field-value--large">
                  Product specifications, preferred features, packaging
                  requirements, and other relevant details.
                </div>

              </div>

              <div className="how-it-works-sourcing__field">

                <label>
                  PRODUCT REFERENCE
                </label>

                <div className="how-it-works-sourcing__upload">

                  <span>
                    🖼️
                  </span>

                  <div>
                    <strong>
                      Product image / reference
                    </strong>

                    <small>
                      Example reference attachment
                    </small>
                  </div>

                </div>

              </div>

              <div className="how-it-works-sourcing__preview-note">

                <span>💡</span>

                <p>
                  You can provide multiple products in a sourcing request
                  where applicable, with the relevant quantity and
                  specifications for each product.
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="how-it-works-sourcing__process">

          <div className="how-it-works-sourcing__process-header">

            <span>
              WHAT HAPPENS NEXT?
            </span>

            <h3>
              Your Request Starts a
              <span> Conversation With Our Team</span>
            </h3>

          </div>

          <div className="how-it-works-sourcing__process-grid">

            {processSteps.map((step, index) => (
              <div
                className="how-it-works-sourcing__process-card"
                key={index}
              >

                <div className="how-it-works-sourcing__process-number">
                  {step.number}
                </div>

                <div>
                  <h4>{step.title}</h4>

                  <p>{step.description}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="how-it-works-sourcing__bottom">

          <div className="how-it-works-sourcing__bottom-icon">
            🤝
          </div>

          <div className="how-it-works-sourcing__bottom-content">

            <span>
              IMPORTANT
            </span>

            <h3>
              Submitting a Request Does Not Mean Procurement Has Started
            </h3>

            <p>
              Your initial request allows our team to understand what you
              need. We review the request, communicate with you, confirm the
              relevant specifications and sourcing details, and then proceed
              with the next stages.
            </p>

          </div>

          <Link
            to="/register"
            className="how-it-works-sourcing__bottom-button"
          >
            Create Your Account
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSourcing;