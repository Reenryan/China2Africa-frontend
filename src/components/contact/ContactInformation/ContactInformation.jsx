import "./ContactInformation.css";

const ContactInformation = () => {
  return (
    <section className="contact-information">
      <div className="contact-information__container">

        <div className="contact-information__heading">
          <span>CONTACT INFORMATION</span>

          <h2>
            Reach Our
            <strong> Team</strong>
          </h2>
        </div>

        <div className="contact-information__grid">

          <div className="contact-information__item">
            <div className="contact-information__icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>
              <p>Official email address coming soon</p>
            </div>
          </div>

          <div className="contact-information__item">
            <div className="contact-information__icon">
              ☎
            </div>

            <div>
              <h3>Phone</h3>
              <p>Official phone number coming soon</p>
            </div>
          </div>

          <div className="contact-information__item">
            <div className="contact-information__icon">
              ◉
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p>WhatsApp contact coming soon</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInformation;