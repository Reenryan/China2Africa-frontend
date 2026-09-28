import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    account_type: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setServerError("");
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.full_name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const accountType = formData.account_type;
    const password = formData.password;
    const confirmPassword = formData.confirm_password;

    if (!fullName) {
      newErrors.full_name = "Full name is required.";
    } else if (fullName.length < 2) {
      newErrors.full_name = "Please enter your full name.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!accountType) {
      newErrors.account_type = "Please select an account type.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirm_password =
        "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirm_password = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setServerError("");
    setSuccessMessage("");

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            full_name: formData.full_name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            account_type: formData.account_type,
            password: formData.password,
            confirm_password: formData.confirm_password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to create your account. Please try again."
        );
      }

      setSuccessMessage(
        data.message ||
          "Account created successfully. Please verify your email."
      );

      setTimeout(() => {
        navigate("/verify-email");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);

      setServerError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-form">

      {/* IMPORTANT: Existing account message */}
      <div className="register-form__login-prompt">
        <div>
          <span>ALREADY HAVE AN ACCOUNT?</span>
          <p>Sign in to continue your sourcing journey.</p>
        </div>

        <Link to="/login">
          Sign In
          <span>→</span>
        </Link>
      </div>

      <div className="register-form__header">
        <h2>Create Your Account</h2>
        <p>
          Enter your details below to get started with China2Africa.
        </p>
      </div>

      {serverError && (
        <div className="register-form__message register-form__message--error">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="register-form__message register-form__message--success">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div className="register-form__field">
          <label htmlFor="register-full-name">
            Full Name
          </label>

          <input
            type="text"
            id="register-full-name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            className={errors.full_name ? "input-error" : ""}
          />

          {errors.full_name && (
            <p className="register-form__error">
              {errors.full_name}
            </p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="register-email">
            Email Address
          </label>

          <input
            type="email"
            id="register-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && (
            <p className="register-form__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="register-phone">
            Phone Number
          </label>

          <input
            type="tel"
            id="register-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +254 712 345 678"
            autoComplete="tel"
            className={errors.phone ? "input-error" : ""}
          />

          {errors.phone && (
            <p className="register-form__error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="register-account-type">
            Account Type
          </label>

          <select
            id="register-account-type"
            name="account_type"
            value={formData.account_type}
            onChange={handleChange}
            className={
              errors.account_type ? "input-error" : ""
            }
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

          {errors.account_type && (
            <p className="register-form__error">
              {errors.account_type}
            </p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="register-password">
            Password
          </label>

          <input
            type="password"
            id="register-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            autoComplete="new-password"
            className={errors.password ? "input-error" : ""}
          />

          {errors.password && (
            <p className="register-form__error">
              {errors.password}
            </p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="register-confirm-password">
            Confirm Password
          </label>

          <input
            type="password"
            id="register-confirm-password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            className={
              errors.confirm_password ? "input-error" : ""
            }
          />

          {errors.confirm_password && (
            <p className="register-form__error">
              {errors.confirm_password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="register-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Creating Account..."
          ) : (
            <>
              Create Account
              <span>→</span>
            </>
          )}
        </button>

      </form>

      <p className="register-form__terms">
        By creating an account, you agree to our
        <Link to="/terms"> Terms & Conditions</Link> and
        <Link to="/privacy"> Privacy Policy</Link>.
      </p>

    </div>
  );
};

export default RegisterForm;