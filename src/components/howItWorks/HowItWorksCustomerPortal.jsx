import { Link } from "react-router-dom";
import "./HowItWorksCustomerPortal.css";

const HowItWorksCustomerPortal = () => {
  const portalItems = [
    {
      icon: "👤",
      title: "My Profile",
      description:
        "Manage your personal, contact, and delivery information from your account.",
    },
    {
      icon: "📦",
      title: "Sourcing Requests",
      description:
        "View the sourcing requests you have submitted and see their current progress.",
    },
    {
      icon: "🚢",
      title: "Shipment Information",
      description:
        "View relevant cargo, shipping, arrival, and delivery information associated with your orders.",
    },
    {
      icon: "💳",
      title: "Payment Information",
      description:
        "Access payment information and payment status details provided for your confirmed procurement.",
    },
    {
      icon: "🔔",
      title: "Notifications",
      description:
        "Receive important updates from the China2Africa team concerning your requests and shipments.",
    },
    {
      icon: "📄",
      title: "Documents",
      description:
        "Access relevant documents and information associated with your sourcing and shipping journey.",
    },
  ];

  return (
    <section className="how-it-works-customer-portal">
      <div className="how-it-works-customer-portal__container">

        <div className="how-it-works-customer-portal__header">

          <span className="how-it-works-customer-portal__eyebrow">
            YOUR CUSTOMER PORTAL
          </span>

          <h2>
            Everything About Your
            <span> China2Africa Journey in One Place</span>
          </h2>

          <p>
            After creating your account and logging in, your private customer
            portal will give you a central place to view information related
            to your sourcing requests, procurement, shipping, payments, and
            delivery.
          </p>

        </div>

        <div className="how-it-works-customer-portal__layout">

          <div className="how-it-works-customer-portal__preview">

            <div className="how-it-works-customer-portal__preview-header">

              <div className="how-it-works-customer-portal__brand">
                <span className="how-it-works-customer-portal__brand-icon">
                  🌍
                </span>

                <div>
                  <span>CHINA2AFRICA</span>
                  <small>Customer Portal</small>
                </div>
              </div>

              <div className="how-it-works-customer-portal__user">
                <span>👤</span>
              </div>

            </div>

            <div className="how-it-works-customer-portal__preview-body">

              <div className="how-it-works-customer-portal__welcome">
                <span>WELCOME BACK</span>

                <h3>
                  Your Customer Dashboard
                </h3>

                <p>
                  View your latest requests and shipment information.
                </p>
              </div>

              <div className="how-it-works-customer-portal__stats">

                <div className="how-it-works-customer-portal__stat">
                  <span className="how-it-works-customer-portal__stat-icon">
                    📦
                  </span>

                  <div>
                    <strong>03</strong>
                    <span>Sourcing Requests</span>
                  </div>
                </div>

                <div className="how-it-works-customer-portal__stat">
                  <span className="how-it-works-customer-portal__stat-icon">
                    🚢
                  </span>

                  <div>
                    <strong>01</strong>
                    <span>Active Shipment</span>
                  </div>
                </div>

                <div className="how-it-works-customer-portal__stat">
                  <span className="how-it-works-customer-portal__stat-icon">
                    🔔
                  </span>

                  <div>
                    <strong>02</strong>
                    <span>New Updates</span>
                  </div>
                </div>

              </div>

              <div className="how-it-works-customer-portal__request">

                <div className="how-it-works-customer-portal__request-header">

                  <div>
                    <span>RECENT REQUEST</span>

                    <h4>
                      Product Sourcing Request
                    </h4>
                  </div>

                  <span className="how-it-works-customer-portal__status">
                    Under Review
                  </span>

                </div>

                <div className="how-it-works-customer-portal__request-details">

                  <div>
                    <span>REQUEST</span>
                    <strong>C2A-001</strong>
                  </div>

                  <div>
                    <span>PRODUCT</span>
                    <strong>Example Product</strong>
                  </div>

                  <div>
                    <span>QUANTITY</span>
                    <strong>500 Units</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="how-it-works-customer-portal__features">

            {portalItems.map((item, index) => (
              <div
                className="how-it-works-customer-portal__feature"
                key={index}
              >

                <div className="how-it-works-customer-portal__feature-icon">
                  {item.icon}
                </div>

                <div className="how-it-works-customer-portal__feature-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="how-it-works-customer-portal__bottom">

          <div className="how-it-works-customer-portal__bottom-icon">
            🔐
          </div>

          <div>
            <h3>Your information stays connected to your account</h3>

            <p>
              Your sourcing requests, shipment-related information, payment
              details, and updates can be associated with your customer
              account so you have a clear view of your China2Africa journey.
            </p>
          </div>

          <Link
            to="/register"
            className="how-it-works-customer-portal__bottom-button"
          >
            Create Your Account
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksCustomerPortal;