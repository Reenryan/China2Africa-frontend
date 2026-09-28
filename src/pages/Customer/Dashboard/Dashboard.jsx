import DashboardStats from "../../../components/Customer/DashboardStats/DashboardStats";
import RecentRequests from "../../../components/Customer/RecentRequest/RecentRequest";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="customer-dashboard">
      <div className="customer-dashboard__content">
        <section className="customer-dashboard__welcome">
          <span>YOUR DASHBOARD</span>

          <h1>
            Welcome back, <strong>Adrian</strong>
          </h1>

          <p>
            Manage your sourcing requests, shipments and
            account information from one place.
          </p>
        </section>

        <DashboardStats />

        <RecentRequests />
      </div>
    </section>
  );
};

export default Dashboard;
