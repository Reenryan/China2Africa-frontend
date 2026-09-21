import "./ProductAudience.css";

function ProductSourcingAudience() {
  return (
    <section className="product-sourcing-audience">
      <div className="product-sourcing-audience-container">

        <div className="product-sourcing-audience-header">
          <span className="product-sourcing-audience-eyebrow">
            WHO WE HELP ?
          </span>

          <h2 className="product-sourcing-audience-title">
            Sourcing support for
            <br />
            <span>different business needs.</span>
          </h2>

          <p className="product-sourcing-audience-intro">
            Whether you are starting a business, expanding your
            product range, or buying in larger quantities, we help
            simplify the process of sourcing products from China.
          </p>
        </div>

        <div className="product-sourcing-audience-grid">

          <article className="product-sourcing-audience-card">
            <div className="product-sourcing-audience-number">
              01
            </div>

            <div className="product-sourcing-audience-icon">
              🏪
            </div>

            <h3>Retail Businesses</h3>

            <p>
              Source products for your shop, online store, or
              growing retail business while exploring suitable
              suppliers and product options.
            </p>
          </article>

          <article className="product-sourcing-audience-card">
            <div className="product-sourcing-audience-number">
              02
            </div>

            <div className="product-sourcing-audience-icon">
              📦
            </div>

            <h3>Wholesalers & Distributors</h3>

            <p>
              Find products in larger quantities for wholesale,
              distribution, resale, or supply to other businesses.
            </p>
          </article>

          <article className="product-sourcing-audience-card">
            <div className="product-sourcing-audience-number">
              03
            </div>

            <div className="product-sourcing-audience-icon">
              🚀
            </div>

            <h3>New Entrepreneurs</h3>

            <p>
              If you are starting a new business, we can help you
              explore product ideas and sourcing options based on
              what you want to sell.
            </p>
          </article>

          <article className="product-sourcing-audience-card">
            <div className="product-sourcing-audience-number">
              04
            </div>

            <div className="product-sourcing-audience-icon">
              🏢
            </div>

            <h3>Established Businesses</h3>

            <p>
              Expand your product range or explore new sourcing
              opportunities for your existing business and operations.
            </p>
          </article>

        </div>

        <div className="product-sourcing-audience-bottom">
          <div>
            <h3>Have a specific product in mind?</h3>

            <p>
              Tell us what you are looking for and we can help
              explore sourcing options based on your requirements.
            </p>
          </div>

          <span className="product-sourcing-audience-arrow">
            →
          </span>
        </div>

      </div>
    </section>
  );
}

export default ProductSourcingAudience;
