import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./TradeAcademyCategory.css";

const TradeAcademyCategory = () => {
  const { categorySlug } = useParams();

  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3001/api/articles/category/${categorySlug}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Category not found.");
          }

          throw new Error("Failed to load category articles.");
        }

        const data = await response.json();

        setCategory(data.category);
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching category articles:", err);

        setCategory(null);
        setArticles([]);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug) {
      fetchCategoryArticles();
    }
  }, [categorySlug]);

  /*
   * Loading state
   */
  if (loading) {
    return (
      <section className="trade-academy-category">
        <div className="trade-academy-category__container">
          <div className="trade-academy-category__loading">
            <div className="trade-academy-category__loading-icon">
              📚
            </div>

            <span>TRADE ACADEMY</span>

            <h1>Loading Articles...</h1>

            <p>
              Please wait while we load the articles for this category.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
   * Error / category not found
   */
  if (error || !category) {
    return (
      <section className="trade-academy-category">
        <div className="trade-academy-category__container">
          <div className="trade-academy-category__not-found">
            <div className="trade-academy-category__not-found-icon">
              📚
            </div>

            <span>TRADE ACADEMY</span>

            <h1>Category Not Found</h1>

            <p>
              {error ||
                "The learning category you are looking for could not be found."}
            </p>

            <Link
              to="/resources/trade-academy"
              className="trade-academy-category__back-button"
            >
              Back to Trade Academy
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="trade-academy-category">
      <div className="trade-academy-category__container">

        {/* Breadcrumb */}
        <div className="trade-academy-category__breadcrumb">
          <Link to="/resources/trade-academy">
            Trade Academy
          </Link>

          <span>→</span>

          <span>{category.title}</span>
        </div>

        {/* Category Hero */}
        <div className="trade-academy-category__hero">
          <div className="trade-academy-category__hero-content">

            <div className="trade-academy-category__icon">
              {category.icon}
            </div>

            <span className="trade-academy-category__eyebrow">
              TRADE ACADEMY CATEGORY
            </span>

            <h1>{category.title}</h1>

            <p>{category.description}</p>
          </div>
        </div>

        {/* Articles */}
        <div className="trade-academy-category__articles">

          <div className="trade-academy-category__articles-header">
            <div>
              <span className="trade-academy-category__articles-eyebrow">
                LEARNING RESOURCES
              </span>

              <h2>
                Articles in {category.title}
              </h2>
            </div>

            <span className="trade-academy-category__article-count">
              {articles.length}{" "}
              {articles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {articles.length > 0 ? (
            <div className="trade-academy-category__grid">

              {articles.map((article) => (
                <article
                  className="trade-academy-category__card"
                  key={article.id}
                >

                  {/* Article Image */}
                  <Link
                    to={`/resources/trade-academy/article/${article.slug}`}
                    className="trade-academy-category__image-link"
                  >
                    <div className="trade-academy-category__image-wrapper">

                      <img
                        src={article.featured_image || article.image}
                        alt={article.title}
                        className="trade-academy-category__image"
                      />

                      <span className="trade-academy-category__category-label">
                        {category.title}
                      </span>

                    </div>
                  </Link>

                  {/* Article Content */}
                  <div className="trade-academy-category__content">

                    <div className="trade-academy-category__meta">
                      <span>
                        {article.published_at || article.date}
                      </span>

                      <span>•</span>

                      <span>
                        {article.read_time || article.readTime}
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
                      className="trade-academy-category__read-link"
                    >
                      Read Article
                      <span>→</span>
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="trade-academy-category__empty">

              <div className="trade-academy-category__empty-icon">
                📚
              </div>

              <h3>No Articles Yet</h3>

              <p>
                There are currently no published articles in this category.
              </p>

              <Link to="/resources/trade-academy">
                Explore Other Topics →
              </Link>

            </div>
          )}

        </div>

        {/* Bottom Navigation */}
        <div className="trade-academy-category__bottom">

          <Link to="/resources/trade-academy">
            ← Back to Trade Academy
          </Link>

          <Link to="/resources/trade-academy">
            Browse All Articles →
          </Link>

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyCategory;