import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);
  };

  return (
    <section className="contact-form">
      <div className="contact-form__container">

        <div className="contact-form__heading">
          <span>SEND US A MESSAGE</span>

          <h2>
            How Can We
            <strong> Help?</strong>
          </h2>

          <p>
            Fill in the form below and provide some details about your
            question or enquiry. Our team can then get back to you.
          </p>
        </div>

        <form
          className="contact-form__form"
          onSubmit={handleSubmit}
        >

          <div className="contact-form__row">

            <div className="contact-form__field">
              <label htmlFor="full_name">
                Full Name
              </label>

              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

          </div>

          <div className="contact-form__row">

            <div className="contact-form__field">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </div>

          </div>

          <div className="contact-form__field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="7"
              required
            />
          </div>

          <button
            type="submit"
            className="contact-form__submit"
          >
            Send Message
            <span>→</span>
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;