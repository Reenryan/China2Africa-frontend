import { useEffect, useState } from "react";

import "./Profile.css";

const Profile = () => {
  const [customer, setCustomer] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    account_type: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        setError("");

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
            result.message ||
              "Failed to load your profile."
          );
        }

        setCustomer(result.data);

        setFormData({
          full_name: result.data.full_name || "",
          phone: result.data.phone || "",
          account_type: result.data.account_type || "",
        });
      } catch (error) {
        console.error("Fetch profile error:", error);

        setError(
          error.message ||
            "Something went wrong while loading your profile."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch(
        "http://localhost:3001/api/customer/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to update your profile."
        );
      }

      setCustomer(result.data);

      setFormData({
        full_name: result.data.full_name || "",
        phone: result.data.phone || "",
        account_type: result.data.account_type || "",
      });

      setSuccess("Your profile has been updated successfully.");
    } catch (error) {
      console.error("Update profile error:", error);

      setError(
        error.message ||
          "Something went wrong while updating your profile."
      );
    } finally {
      setIsSaving(false);
    }
  };

  const getInitial = () => {
    if (!customer?.full_name) return "U";

    return customer.full_name
      .charAt(0)
      .toUpperCase();
  };

  const formatAccountType = (accountType) => {
    if (!accountType) return "";

    return accountType
      .replace("_", " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );
  };

  if (isLoading) {
    return (
      <main className="customer-profile">
        <div className="customer-profile__loading">
          <div className="customer-profile__spinner"></div>
          <p>Loading your profile...</p>
        </div>
      </main>
    );
  }

  if (error && !customer) {
    return (
      <main className="customer-profile">
        <div className="customer-profile__container">
          <div className="customer-profile__message customer-profile__message--error">
            <strong>Unable to load profile</strong>
            <p>{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="customer-profile">
      <div className="customer-profile__container">

        <section className="customer-profile__header">
          <div>
            <span>ACCOUNT</span>

            <h1>
              My <strong>Profile</strong>
            </h1>

            <p>
              Manage your personal information and
              customer account details.
            </p>
          </div>
        </section>

        {error && (
          <div className="customer-profile__alert customer-profile__alert--error">
            {error}
          </div>
        )}

        {success && (
          <div className="customer-profile__alert customer-profile__alert--success">
            {success}
          </div>
        )}

        <section className="customer-profile__layout">

          <div className="customer-profile__summary">
            <div className="customer-profile__avatar">
              {getInitial()}
            </div>

            <h2>
              {customer?.full_name}
            </h2>

            <p>
              {formatAccountType(
                customer?.account_type
              )}
            </p>

            <span>
              {customer?.customer_number}
            </span>
          </div>

          <div className="customer-profile__form-card">

            <div className="customer-profile__form-header">
              <h2>Personal Information</h2>

              <p>
                Keep your contact details up to date.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="customer-profile__form-grid">

                <div className="customer-profile__field">
                  <label htmlFor="full_name">
                    Full Name
                  </label>

                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="customer-profile__field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="customer-profile__field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={customer?.email || ""}
                    disabled
                  />

                  <small>
                    Your email address cannot be changed
                    here.
                  </small>
                </div>

                <div className="customer-profile__field">
                  <label htmlFor="account_type">
                    Account Type
                  </label>

                  <select
                    id="account_type"
                    name="account_type"
                    value={formData.account_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select account type
                    </option>

                    <option value="individual">
                      Individual
                    </option>

                    <option value="small_business">
                      Small Business
                    </option>

                    <option value="wholesaler">
                      Wholesaler
                    </option>
                  </select>
                </div>

              </div>

              <div className="customer-profile__form-footer">
                <button
                  type="submit"
                  disabled={isSaving}
                >
                  {isSaving
                    ? "Saving..."
                    : "Save Changes"}
                </button>
              </div>

            </form>
          </div>

        </section>
      </div>
    </main>
  );
};

export default Profile;