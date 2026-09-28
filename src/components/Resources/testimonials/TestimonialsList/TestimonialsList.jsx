import { useEffect, useState } from "react";

import "./TestimonialsList.css";

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/testimonials"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const result = await response.json();

        setTestimonials(result.testimonials || []);
      } catch (err) {
        console.error("Error fetching testimonials:", err);

        setError(
          "Unable to load testimonials at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials-section">
      {/* INTRO */}
      <div className="testimonials-section__intro">
        <div className="testimonials-section__intro-heading">
          <span>OUR CUSTOMERS' EXPERIENCES</span>

          <h2>
            Real Experiences From
            <strong>African Importers</strong>
          </h2>
        </div>

        <div className="testimonials-section__intro-content">
          <p>
            From finding the right products and coordinating
            suppliers to consolidating cargo and arranging
            delivery, our customers use China2Africa to
            simplify different parts of their importing
            journey.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-section__container">
        {loading && (
          <p className="testimonials-section__status">
            Loading testimonials...
          </p>
        )}

        {error && (
          <p className="testimonials-section__status testimonials-section__status--error">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          testimonials.length === 0 && (
            <p className="testimonials-section__status">
              No testimonials are available yet.
            </p>
          )}

        {!loading &&
          !error &&
          testimonials.length > 0 && (
            <div className="testimonials-section__grid">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="testimonial-card"
                >
                  <div className="testimonial-card__rating">
                    {"★".repeat(testimonial.rating || 5)}
                  </div>

                  <blockquote>
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="testimonial-card__customer">
                    <div className="testimonial-card__avatar">
                      {testimonial.customer_name
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>

                    <div className="testimonial-card__customer-info">
                      <h3>
                        {testimonial.customer_name}
                      </h3>

                      {testimonial.role && (
                        <p>{testimonial.role}</p>
                      )}

                      {testimonial.business_name && (
                        <p>
                          {testimonial.business_name}
                        </p>
                      )}

                      {testimonial.location && (
                        <span>
                          {testimonial.location}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default TestimonialsList;
