import { Link } from "react-router-dom";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "China2Africa made the sourcing process much easier for us. Instead of dealing with everything on our own, we had someone coordinating the important steps from China to Kenya.",
    name: "Customer Name",
    role: "Business Owner",
    location: "Kenya",
  },
  {
    quote:
      "The biggest value for us was having one point of coordination. We could focus on our business while China2Africa helped us navigate suppliers, cargo, and shipping.",
    name: "Customer Name",
    role: "Importer",
    location: "Kenya",
  },
  {
    quote:
      "We wanted to source products from China but were not sure where to begin. The team helped us understand the process and guided us through the different stages.",
    name: "Customer Name",
    role: "Small Business Owner",
    location: "Africa",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <div>
            <span className="section-eyebrow">
              CUSTOMER STORIES
            </span>

            <h2 className="testimonials-title">
              Trusted by businesses
              <br />
              <span>building across Africa.</span>
            </h2>
          </div>

          <p className="testimonials-intro">
            We believe good sourcing relationships are built on
            communication, transparency, and reliable coordination.
            Here is what customers can expect from working with
            China2Africa.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${index}`}
            >
              <div className="testimonial-quote-mark">
                “
              </div>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>

                  <p>
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-bottom">
          <div className="testimonials-rating">
            <div className="rating-stars">
              ★ ★ ★ ★ ★
            </div>

            <div>
              <strong>Built on trust</strong>
              <span>
                Reliable communication from sourcing to delivery
              </span>
            </div>
          </div>

          <Link
            to="/resources/testimonials"
            className="testimonials-button"
          >
            Read More Stories
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;