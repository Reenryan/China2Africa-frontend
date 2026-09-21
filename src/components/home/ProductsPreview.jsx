import { Link } from "react-router-dom";
import "./ProductsPreview.css";

const productCategories = [
  {
    icon: "📱",
    title: "Electronics & Accessories",
    description:
      "Phones, accessories, gadgets, smart devices and other consumer electronics.",
  },
  {
    icon: "👕",
    title: "Fashion & Apparel",
    description:
      "Clothing, shoes, bags, accessories and fashion products for different markets.",
  },
  {
    icon: "🏠",
    title: "Home & Living",
    description:
      "Household items, furniture, kitchen products, décor and everyday essentials.",
  },
  {
    icon: "💄",
    title: "Beauty & Personal Care",
    description:
      "Beauty products, personal care items, salon supplies and related accessories.",
  },
  {
    icon: "🔧",
    title: "Tools & Equipment",
    description:
      "Hand tools, equipment, hardware, machinery  and supplies for businesses.",
  },
  {
    icon: "🛍️",
    title: "Custom Products",
    description:
      "Have something specific in mind? Tell us what you need and we can help you explore sourcing options.",
  },
];

function ProductsPreview() {
  return (
    <section className="products-section">
      <div className="products-container">

        <div className="products-header">
          <div>
            <span className="section-eyebrow">
              PRODUCTS WE CAN SOURCE
            </span>

            <h2 className="products-title">
              Looking for something
              <br />
              <span>from China?</span>
            </h2>
          </div>

          <p className="products-intro">
            From everyday consumer products to business equipment,
            we can help you explore sourcing options from suppliers
            in China based on your requirements.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((category) => (
            <article
              className="product-category-card"
              key={category.title}
            >
              <div className="product-category-icon">
                {category.icon}
              </div>

              <div className="product-category-content">
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <Link
                  to="/services/product-sourcing"
                  className="product-category-link"
                >
                  Explore category
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="products-bottom">
          <div className="products-note">
            <span className="products-note-icon">💡</span>

            <p>
              <strong>Don't see what you're looking for?</strong>
              <br />
              We can still help you explore sourcing options.
            </p>
          </div>

          <Link
            to="/signup"
            className="products-button"
          >
            Request a Product
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProductsPreview;