import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    // Remove the field error once the user starts correcting it
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setServerError("");
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    const email = formData.email.trim();
    const password = formData.password;

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setServerError("");
    setSuccessMessage("");

    const validationErrors = validateForm();

    setErrors(validationErrors);

    // Do not send anything to the backend
    // if frontend validation fails.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to log in. Please try again."
        );
      }

      setSuccessMessage(
        data.message || "Login successful."
      );

      /*
       * We will decide the exact authentication/session
       * handling when we build the backend.
       *
       * For now, the backend is expected to establish
       * the authentication cookie/session.
       */

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (error) {
      console.error("Login error:", error);

      setServerError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form">

      <div className="login-form__header">
        <h2>Sign In</h2>

        <p>
          Enter your account details to continue.
        </p>
      </div>

      {serverError && (
        <div className="login-form__message login-form__message--error">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="login-form__message login-form__message--success">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div className="login-form__field">
          <label htmlFor="login-email">
            Email Address
          </label>

          <input
            type="email"
            id="login-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && (
            <p className="login-form__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="login-form__field">
          <div className="login-form__label-row">
            <label htmlFor="login-password">
              Password
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <input
            type="password"
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            className={errors.password ? "input-error" : ""}
          />

          {errors.password && (
            <p className="login-form__error">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="login-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Signing In..."
          ) : (
            <>
              Sign In
              <span>→</span>
            </>
          )}
        </button>

      </form>

      <div className="login-form__register">
        <p>
          Don't have an account?
          <Link to="/register">
            Create an account
          </Link>
        </p>
      </div>

    </div>
  );
};

export default LoginForm;