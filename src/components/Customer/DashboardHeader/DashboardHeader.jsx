import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./DashboardHeader.css";

const DashboardHeader = ({ onMenuClick }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/customer/profile",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load customer information."
          );
        }

        setCustomer(result.data);
      } catch (error) {
        console.error("Fetch customer error:", error);
      }
    };

    fetchCustomer();
  }, []);

  const getInitial = () => {
    if (!customer?.full_name) {
      return "U";
    }

    return customer.full_name.charAt(0).toUpperCase();
  };

  const getAccountType = () => {
    if (!customer?.account_type) {
      return "Customer";
    }

    return customer.account_type
      .replace("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  return (
    <header className="dashboard-header">

      <div className="dashboard-header__container">

        <div className="dashboard-header__mobile-left">

          <button
            type="button"
            className="dashboard-header__menu"
            onClick={onMenuClick}
            aria-label="Open dashboard menu"
          >
            ☰
          </button>

          <div className="dashboard-header__mobile-brand">
            <span>CHINA2AFRICA</span>
            <small>Customer Portal</small>
          </div>

        </div>


        <div className="dashboard-header__actions">

          <button
            type="button"
            className="dashboard-header__notification"
            aria-label="Notifications"
          >
            ♢
            <span></span>
          </button>


          <Link
            to="/dashboard/profile"
            className="dashboard-header__profile"
          >

            <div className="dashboard-header__avatar">
              {getInitial()}
            </div>

            <div className="dashboard-header__user">

              <strong>
                {customer?.full_name || "Loading..."}
              </strong>

              <span>
                {getAccountType()}
              </span>

            </div>

          </Link>

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;
