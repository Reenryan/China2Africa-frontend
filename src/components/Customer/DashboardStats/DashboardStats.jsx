import { useEffect, useState } from "react";

import "./DashboardStats.css";

const DashboardStats = () => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/customer/dashboard-stats",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Failed to load dashboard statistics."
          );
        }

        setStats(result.data);
      } catch (error) {
        console.error(
          "Fetch dashboard stats error:",
          error
        );

        setError(
          error.message ||
            "Failed to load dashboard statistics."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  const statCards = [
    {
      label: "Total Requests",
      value: stats?.total_requests ?? 0,
      description: "All sourcing requests",
      icon: "▤",
    },
    {
      label: "Pending Requests",
      value: stats?.pending_requests ?? 0,
      description: "Awaiting review",
      icon: "◷",
    },
    {
      label: "Active Shipments",
      value: stats?.active_shipments ?? 0,
      description: "Currently in progress",
      icon: "◈",
    },
    {
      label: "Completed",
      value: stats?.completed_requests ?? 0,
      description: "Successfully completed",
      icon: "✓",
    },
  ];

  if (isLoading) {
    return (
      <section className="dashboard-stats">
        <div className="dashboard-stats__loading">
          Loading statistics...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="dashboard-stats">
        <div className="dashboard-stats__error">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-stats">

      {statCards.map((stat) => (
        <div
          className="dashboard-stat"
          key={stat.label}
        >

          <div className="dashboard-stat__top">

            <span className="dashboard-stat__icon">
              {stat.icon}
            </span>

            <strong>
              {stat.value}
            </strong>

          </div>

          <h2>
            {stat.label}
          </h2>

          <p>
            {stat.description}
          </p>

        </div>
      ))}

    </section>
  );
};

export default DashboardStats;
