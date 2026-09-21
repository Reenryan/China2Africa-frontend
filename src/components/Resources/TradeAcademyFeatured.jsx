import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TradeAcademyFeatured.css";

const TradeAcademyFeatured = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/articles/featured"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured articles");
        }

        const data = await response.json();

        setFeaturedArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching featured articles:", error);
        setError("Unable to load featured articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedArticles();
  }, []);

  return (
    <section className="trade-academy-featured">
      <div className="trade-academy-featured__container">

        <div className="trade-academy-featured__header">
          <div className="trade-academy-featured__heading">
            <span className="trade-academy-featured__eyebrow">
              FEATURED LEARNING
            </span>

            <h2>
              Start With These
              <span> Practical Guides</span>
            </h2>
          </div>

          <p>
            Explore some of our featured Trade Academy articles covering
            important topics across product sourcing, suppliers, and shipping.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="trade-academy-featured__status">
            Loading featured articles...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="trade-academy-featured__status">
            {error}
          </div>
        )}

        {/* Articles */}
        {!loading && !error && featuredArticles.length > 0 && (
          <div className="trade-academy-featured__grid">
            {featuredArticles.map((article) => (
              <article
                className="trade-academy-featured__card"
                key={article.id}
              >
                <Link
                  to={`/resources/trade-academy/article/${article.slug}`}
                  className="trade-academy-featured__image-link"
                >
                  <div className="trade-academy-featured__image-wrapper">
                    <img
                      src={article.featured_image}
                      alt={article.title}
                      className="trade-academy-featured__image"
                    />

                    <span className="trade-academy-featured__category">
                      {article.category_name}
                    </span>
                  </div>
                </Link>

                <div className="trade-academy-featured__content">

                  <div className="trade-academy-featured__meta">
                    <span>
                      {article.published_at}
                    </span>

                    <span>•</span>

                    <span>
                      {article.read_time}
                    </span>
                  </div>

                  <h3>
                    <Link
                      to={`/resources/trade-academy/article/${article.slug}`}
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/resources/trade-academy/article/${article.slug}`}
                    className="trade-academy-featured__read-link"
                  >
                    Read Article
                    <span>→</span>
                  </Link>

                </div>
              </article>
            ))}
          </div>
        )}

        {/* No articles */}
        {!loading && !error && featuredArticles.length === 0 && (
          <div className="trade-academy-featured__status">
            No featured articles available.
          </div>
        )}

        <div className="trade-academy-featured__bottom">
          <div className="trade-academy-featured__bottom-content">
            <span>
              MORE TO EXPLORE
            </span>

            <h3>
              Looking for Something Specific?
            </h3>

            <p>
              Browse more Trade Academy articles by category and find
              information related to your sourcing, procurement, shipping,
              and importing needs.
            </p>
          </div>
            <Link
          to="/resources/trade-academy"
          className="trade-academy-featured__bottom-button"
        >
          Browse All Articles
          <span>→</span>
        </Link>
          
        </div>

      </div>
    </section>
  );
};

export default TradeAcademyFeatured;