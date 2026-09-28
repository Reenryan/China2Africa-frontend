import { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardHeader from "../../components/Customer/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../components/Customer/DashboardSideBar/DashboardSidebar";

import "./CustomerDashboardLayout.css";

const CustomerDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="customer-dashboard-layout">
      <DashboardSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="customer-dashboard-layout__main">
        <DashboardHeader
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="customer-dashboard-layout__content">
          <Outlet />
        </main>
      </div>

      {isSidebarOpen && (
        <button
          type="button"
          className="customer-dashboard-layout__overlay"
          aria-label="Close dashboard menu"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CustomerDashboardLayout;
