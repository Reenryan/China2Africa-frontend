import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const heroImages = [
  {
    src: "../images/hero1.png",
    alt: "Container ship transporting cargo from China to Africa",
  },
  {
    src: "../images/hero2.png",
    alt: "Cargo inspection and logistics operations",
  },
  {
    src: "../images/hero3.png",
    alt: "Air freight transportation between China and Africa",
  },
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) =>
        (previous + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span>CHINA 🇨🇳</span>
            <span className="hero-arrow-text">→</span>
            <span>AFRICA 🌍</span>
          </div>

          <h1 className="hero-title">
            Source from China.
            <br />
            Ship to Africa.
            <br />
            <span>Grow your business.</span>
          </h1>

          <p className="hero-description">
            We help African businesses source products from China,
            verify suppliers, coordinate procurement, consolidate
            cargo, and arrange delivery across Africa.
          </p>

          <div className="hero-actions">

            <Link
              to="/signup"
              className="hero-button hero-button-primary"
            >
              Start a Sourcing Request
              <span>→</span>
            </Link>

            <Link
              to="/services/product-sourcing"
              className="hero-button hero-button-secondary"
            >
              Explore Our Services
            </Link>

          </div>

          {/* Trust indicators */}
          <div className="hero-trust">

            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>
                Verified
                <br />
                Suppliers
              </span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon">🚢</div>
              <span>
                Consolidated
                <br />
                Shipping
              </span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon">🚚</div>
              <span>
                Door-to-Door
                <br />
                Delivery
              </span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon">◉</div>
              <span>
                Dedicated
                <br />
                Support
              </span>
            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">

            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`hero-image ${
                  index === currentImage ? "hero-image-active" : ""
                }`}
              />
            ))}

          </div>

          {/* China badge */}
          <div className="hero-country-badge hero-china-badge">
            🇨🇳
          </div>

          {/* Africa badge */}
          <div className="hero-country-badge hero-africa-badge">
            🌍
          </div>

          {/* Image indicators */}
          <div className="hero-slider-indicators">

            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-dot ${
                  index === currentImage ? "slider-dot-active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
