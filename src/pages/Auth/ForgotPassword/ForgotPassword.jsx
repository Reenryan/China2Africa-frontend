import ForgotPasswordForm from "../../../components/Auth/ForgotPasswordForm/ForgotPasswordForm";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <main className="forgot-password-page">
      <div className="forgot-password-page__container">

        <div className="forgot-password-page__intro">
          <span>CHINA2AFRICA · ACCOUNT RECOVERY</span>

          <h1>
            Forgot Your
            <strong> Password?</strong>
          </h1>

          <p>
            Enter the email address associated with your China2Africa
            account and we will send you instructions to reset your
            password.
          </p>
        </div>

        <ForgotPasswordForm />

      </div>
    </main>
  );
};

export default ForgotPassword;