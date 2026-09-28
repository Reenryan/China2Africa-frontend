import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VerifyEmailForm.css";

const VerifyEmailForm = () => {
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState("");

  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const validateCode = () => {
    if (!verificationCode) {
      return "Verification code is required.";
    }

    if (!/^\d{6}$/.test(verificationCode)) {
      return "Verification code must contain exactly 6 digits.";
    }

    return "";
  };

  const handleCodeChange = (event) => {
    const value = event.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Maximum 6 digits
    if (value.length > 6) {
      return;
    }

    setVerificationCode(value);

    setError("");
    setServerError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setServerError("");
    setSuccessMessage("");

    const validationError = validateCode();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            verification_code: verificationCode,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to verify your email. Please try again."
        );
      }

      setSuccessMessage(
        data.message ||
          "Email verified successfully."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Email verification error:", error);

      setServerError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setServerError("");
    setSuccessMessage("");

    setIsResending(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/resend-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to resend verification code."
        );
      }

      setSuccessMessage(
        data.message ||
          "A new verification code has been sent to your email."
      );
    } catch (error) {
      console.error("Resend verification error:", error);

      setServerError(
        error.message ||
          "Unable to resend the verification code."
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="verify-email-form">

      <div className="verify-email-form__header">
        <h2>Enter Verification Code</h2>

        <p>
          Enter the 6-digit code sent to your email address.
        </p>
      </div>

      {serverError && (
        <div className="verify-email-form__message verify-email-form__message--error">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="verify-email-form__message verify-email-form__message--success">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div className="verify-email-form__field">
          <label htmlFor="verification-code">
            Verification Code
          </label>

          <input
            type="text"
            id="verification-code"
            inputMode="numeric"
            maxLength="6"
            value={verificationCode}
            onChange={handleCodeChange}
            placeholder="000000"
            autoComplete="one-time-code"
            className={error ? "input-error" : ""}
          />

          {error && (
            <p className="verify-email-form__error">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="verify-email-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Verifying..."
          ) : (
            <>
              Verify Email
              <span>→</span>
            </>
          )}
        </button>

      </form>

      <div className="verify-email-form__resend">
        <p>Didn't receive the code?</p>

        <button
          type="button"
          onClick={handleResend}
          disabled={isResending}
        >
          {isResending
            ? "Sending..."
            : "Resend Verification Code"}
        </button>
      </div>

      <div className="verify-email-form__login">
        <Link to="/login">
          ← Back to Sign In
        </Link>
      </div>

    </div>
  );
};

export default VerifyEmailForm;