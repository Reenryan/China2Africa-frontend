import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPasswordForm.css";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return "Email address is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError("");
    setServerError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setServerError("");
    setSuccessMessage("");

    const validationError = validateEmail();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to process your request. Please try again."
        );
      }

      setSuccessMessage(
        data.message ||
          "If an account exists with this email, password reset instructions have been sent."
      );
    } catch (error) {
      console.error("Forgot password error:", error);

      setServerError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-form">

      <div className="forgot-password-form__header">
        <h2>Reset Your Password</h2>

        <p>
          Enter your account email below to receive a password
          reset link.
        </p>
      </div>

      {serverError && (
        <div className="forgot-password-form__message forgot-password-form__message--error">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="forgot-password-form__message forgot-password-form__message--success">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div className="forgot-password-form__field">
          <label htmlFor="forgot-password-email">
            Email Address
          </label>

          <input
            type="email"
            id="forgot-password-email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={error ? "input-error" : ""}
          />

          {error && (
            <p className="forgot-password-form__error">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="forgot-password-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Reset Link
              <span>→</span>
            </>
          )}
        </button>

      </form>

      <div className="forgot-password-form__back">
        <Link to="/login">
          ← Back to Sign In
        </Link>
      </div>

    </div>
  );
};

export default ForgotPasswordForm;