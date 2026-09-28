import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TradeAcademyArticles.css";

const TradeAcademyArticles = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    "Product Sourcing",
    "Supplier Sourcing",
    "Procurement",
    "Cargo Consolidation",
    "Sea Freight",
    "Air Freight",
    "Importing Into Kenya",
    "Kenya Import Updates",
    "Business & Importing Tips",
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/articles"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();

        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Unable to load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category_name === activeCategory
        );

  return (
    <section className="trade-academy-articles">
      <div className="trade-academy-articles__container">

        {/* HEADER */}
        <div className="trade-academy-articles__header">
          <span className="trade-academy-articles__eyebrow">
            TRADE ACADEMY LIBRARY
          </span>

          <h2>
            Explore Our
            <span> Learning Resources</span>
          </h2>

          <p>
            Browse practical articles covering product sourcing, suppliers,
            procurement, cargo consolidation, shipping, importing, and
            business considerations.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="trade-academy-articles__filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`trade-academy-articles__filter ${
                activeCategory === category
                  ? "trade-academy-articles__filter--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS */}
        <div className="trade-academy-articles__results">

          <div className="trade-academy-articles__results-header">
            <span>
              {activeCategory === "All"
                ? "ALL ARTICLES"
                : activeCategory.toUpperCase()}
            </span>

            {!loading && !error && (
              <strong>
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1
                  ? "Article"
                  : "Articles"}
              </strong>
            )}
          </div>

          {/* LOADING */}
          {loading && (
            <div className="trade-academy-articles__empty">
              <div className="trade-academy-articles__empty-icon">
                📚
              </div>

              <h3>Loading Articles...</h3>

              <p>
                Please wait while we load the latest Trade Academy
                resources.
              </p>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="trade-academy-articles__empty">
              <div className="trade-academy-articles__empty-icon">
                ⚠️
              </div>

              <h3>Unable to Load Articles</h3>

              <p>{error}</p>
            </div>
          )}

          {/* ARTICLES */}
          {!loading && !error && filteredArticles.length > 0 && (
            <div className="trade-academy-articles__grid">
              {filteredArticles.map((article) => (
                <article
                  className="trade-academy-articles__card"
                  key={article.id}
                >
                  {/* IMAGE */}
                  <Link
                    to={`/resources/trade-academy/article/${article.slug}`}
                    className="trade-academy-articles__image-link"
                  >
                    <div className="trade-academy-articles__image-wrapper">
                      <img
                        src={article.featured_image}
                        alt={article.title}
                        className="trade-academy-articles__image"
                      />

                      <span className="trade-academy-articles__category">
                        {article.category_name}
                      </span>
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="trade-academy-articles__content">

                    <div className="trade-academy-articles__meta">
                      <span>
                        {article.published_at}
                      </span>

                      <span>•</span>

                      <span>
                        {article.read_time}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3>
                      <Link
                        to={`/resources/trade-academy/article/${article.slug}`}
                      >
                        {article.title}
                      </Link>
                    </h3>

                    {/* EXCERPT */}
                    <p>
                      {article.excerpt}
                    </p>

                    {/* READ ARTICLE */}
                    <Link
                      to={`/resources/trade-academy/article/${article.slug}`}
                      className="trade-academy-articles__read-link"
                    >
                      Read Article
                      <span>→</span>
                    </Link>

                  </div>
                </article>
              ))}
            </div>
          )}

          {/* NO ARTICLES */}
          {!loading &&
            !error &&
            filteredArticles.length === 0 && (
              <div className="trade-academy-articles__empty">
                <div className="trade-academy-articles__empty-icon">
                  📚
                </div>

                <h3>
                  No Articles Found
                </h3>

                <p>
                  There are currently no published articles in this
                  category.
                </p>
              </div>
            )}
        </div>

        {/* NOTE */}
        <div className="trade-academy-articles__note">
          <span className="trade-academy-articles__note-icon">
            💡
          </span>

          <div>
            <span>
              KEEP LEARNING
            </span>

            <h3>
              New Resources Can Be Added Over Time
            </h3>

            <p>
              Our Trade Academy library can continue to grow as new
              educational articles are published across different
              categories.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradeAcademyArticles;