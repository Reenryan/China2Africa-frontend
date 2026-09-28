import VerifyEmailForm from "../../../components/Auth/VerifyEmailForm/VerifyEmailForm";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  return (
    <main className="verify-email-page">
      <div className="verify-email-page__container">

        <div className="verify-email-page__intro">
          <span>CHINA2AFRICA · EMAIL VERIFICATION</span>

          <h1>
            Verify Your
            <strong> Email Address</strong>
          </h1>

          <p>
            We've sent a verification code to your email address.
            Enter the code to verify your account and continue to
            China2Africa.
          </p>
        </div>

        <VerifyEmailForm />

      </div>
    </main>
  );
};

export default VerifyEmail;