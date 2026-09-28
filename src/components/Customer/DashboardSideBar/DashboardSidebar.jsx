import { Link, useLocation } from "react-router-dom";

import "./DashboardSidebar.css";

const DashboardSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavigation = () => {
    onClose();
  };

  return (
    <aside
      className={
        isOpen
          ? "dashboard-sidebar dashboard-sidebar--open"
          : "dashboard-sidebar"
      }
    >
      <div className="dashboard-sidebar__brand">
        <div>
          <span>CHINA2AFRICA</span>
          <p>Customer Portal</p>
        </div>

        <button
          type="button"
          className="dashboard-sidebar__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <nav className="dashboard-sidebar__nav">
        <p className="dashboard-sidebar__label">
          MENU
        </p>

        <Link
          to="/dashboard"
          onClick={handleNavigation}
          className={
            isActive("/dashboard")
              ? "dashboard-sidebar__link dashboard-sidebar__link--active"
              : "dashboard-sidebar__link"
          }
        >
          <span>⌂</span>
          Dashboard
        </Link>

        <Link
          to="/dashboard/requests"
          onClick={handleNavigation}
          className={
            isActive("/dashboard/requests")
              ? "dashboard-sidebar__link dashboard-sidebar__link--active"
              : "dashboard-sidebar__link"
          }
        >
          <span>▤</span>
          My Requests
        </Link>

        <Link
          to="/dashboard/requests/new"
          onClick={handleNavigation}
          className="dashboard-sidebar__link dashboard-sidebar__link--request"
        >
          <span>＋</span>
          New Request
        </Link>

        <Link
          to="/dashboard/shipments"
          onClick={handleNavigation}
          className={
            isActive("/dashboard/shipments")
              ? "dashboard-sidebar__link dashboard-sidebar__link--active"
              : "dashboard-sidebar__link"
          }
        >
          <span>◈</span>
          Shipments
        </Link>

        <Link
          to="/dashboard/payments"
          onClick={handleNavigation}
          className={
            isActive("/dashboard/payments")
              ? "dashboard-sidebar__link dashboard-sidebar__link--active"
              : "dashboard-sidebar__link"
          }
        >
          <span>▣</span>
          Payments
        </Link>

        <p className="dashboard-sidebar__label dashboard-sidebar__label--account">
          ACCOUNT
        </p>

        <Link
          to="/dashboard/profile"
          onClick={handleNavigation}
          className={
            isActive("/dashboard/profile")
              ? "dashboard-sidebar__link dashboard-sidebar__link--active"
              : "dashboard-sidebar__link"
          }
        >
          <span>◯</span>
          My Profile
        </Link>
      </nav>

      <div className="dashboard-sidebar__bottom">
        <Link
          to="/"
          className="dashboard-sidebar__website"
          onClick={handleNavigation}
        >
          ← Back to Website
        </Link>

        <button
          type="button"
          className="dashboard-sidebar__logout"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;