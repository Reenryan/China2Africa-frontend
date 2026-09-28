import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./TradeAcademyArticleDetails.css";

const TradeAcademyArticleDetail = () => {
  const { articleSlug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3001/api/articles/${articleSlug}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Article not found.");
          }

          throw new Error("Failed to load article.");
        }

        const data = await response.json();

        setArticle(data.article || data);
      } catch (err) {
        console.error("Error fetching article:", err);

        setArticle(null);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    if (articleSlug) {
      fetchArticle();
    }
  }, [articleSlug]);

  /*
   * Loading state
   */
  if (loading) {
    return (
      <section className="trade-academy-article-detail">
        <div className="trade-academy-article-detail__container">
          <div className="trade-academy-article-detail__loading">
            <div className="trade-academy-article-detail__loading-icon">
              📖
            </div>

            <span>TRADE ACADEMY</span>

            <h1>Loading Article...</h1>

            <p>
              Please wait while we load this article.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
   * Article not found / error
   */
  if (error || !article) {
    return (
      <section className="trade-academy-article-detail">
        <div className="trade-academy-article-detail__container">
          <div className="trade-academy-article-detail__not-found">
            <div className="trade-academy-article-detail__not-found-icon">
              📖
            </div>

            <span>TRADE ACADEMY</span>

            <h1>Article Not Found</h1>

            <p>
              {error ||
                "The article you are looking for could not be found."}
            </p>

            <Link
              to="/resources/trade-academy"
              className="trade-academy-article-detail__back-button"
            >
              Back to Trade Academy
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="trade-academy-article-detail">
      <div className="trade-academy-article-detail__container">

        {/* Breadcrumb */}
        <div className="trade-academy-article-detail__breadcrumb">
          <Link to="/resources/trade-academy">
            Trade Academy
          </Link>

          <span>→</span>

          {article.category_slug ? (
            <>
              <Link
                to={`/resources/trade-academy/category/${article.category_slug}`}
              >
                {article.category_name}
              </Link>

              <span>→</span>
            </>
          ) : null}

          <span>{article.title}</span>
        </div>

        {/* Article Header */}
        <header className="trade-academy-article-detail__header">

          <div className="trade-academy-article-detail__category">
            {article.category_icon && (
              <span>
                {article.category_icon}
              </span>
            )}

            <span>
              {article.category_name || article.category}
            </span>
          </div>

          <h1>{article.title}</h1>

          {article.excerpt && (
            <p className="trade-academy-article-detail__excerpt">
              {article.excerpt}
            </p>
          )}

          {/* Article Meta */}
          <div className="trade-academy-article-detail__meta">

            <span>
              {article.author || "China2Africa Trade Academy"}
            </span>

            <span>•</span>

            <span>
              {article.published_at || article.date}
            </span>

            <span>•</span>

            <span>
              {article.read_time || article.readTime}
            </span>

          </div>
        </header>

        {/* Featured Image */}
        {(article.featured_image || article.image) && (
          <div className="trade-academy-article-detail__image-wrapper">
            <img
              src={article.featured_image || article.image}
              alt={article.title}
              className="trade-academy-article-detail__image"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="trade-academy-article-detail__content">
          {article.content}
        </article>

        {/* Bottom Navigation */}
        <div className="trade-academy-article-detail__bottom">

          <Link to="/resources/trade-academy">
            ← Back to Trade Academy
          </Link>

          {article.category_slug && (
            <Link
              to={`/resources/trade-academy/category/${article.category_slug}`}
            >
              More from {article.category_name} →
            </Link>
          )}

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyArticleDetail;