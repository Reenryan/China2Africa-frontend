import RegisterForm from "../../../components/Auth/RegisterForm/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <main className="register-page">
      <div className="register-page__container">
        <div className="register-page__intro">
          <span>CHINA2AFRICA</span>

          <h1>
            Create Your
            <strong> Account</strong>
          </h1>

          <p>
            Create your China2Africa account to submit sourcing requests,
            communicate with our team and manage your importing journey.
          </p>

          <div className="register-page__benefits">
            <div>
              <span>✓</span>
              <p>Submit and manage sourcing requests</p>
            </div>

            <div>
              <span>✓</span>
              <p>Receive updates from our team</p>
            </div>

            <div>
              <span>✓</span>
              <p>Keep your sourcing information organized</p>
            </div>
          </div>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;