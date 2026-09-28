import LoginForm from "../../../components/Auth/LoginForm/LoginForm";

import "./Login.css";

const Login = () => {
  return (
    <main className="login-page">
      <section className="login-page__container">
        <div className="login-page__intro">
          <span>CHINA2AFRICA</span>

          <h1>
            Welcome
            <strong> Back</strong>
          </h1>

          <p>
            Sign in to your China2Africa account to manage your sourcing
            requests, view updates and continue your importing journey.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
};

export default Login;