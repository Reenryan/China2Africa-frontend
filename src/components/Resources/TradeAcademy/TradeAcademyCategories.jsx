import { Link } from "react-router-dom";
import "./TradeAcademyCategories.css";

const TradeAcademyCategories = () => {
  const categories = [
    {
      icon: "🔎",
      title: "Product Sourcing",
      slug: "product-sourcing",
      description:
        "Learn how to identify products, define your requirements, and approach product sourcing from China.",
    },
    {
      icon: "🏭",
      title: "Supplier Sourcing",
      slug: "supplier-sourcing",
      description:
        "Understand the process of finding suppliers and the important information to consider when working with them.",
    },
    {
      icon: "🤝",
      title: "Procurement",
      slug: "procurement",
      description:
        "Learn how product procurement works from confirmed requirements through supplier coordination and purchasing.",
    },
    {
      icon: "📦",
      title: "Cargo Consolidation",
      slug: "cargo-consolidation",
      description:
        "Understand how goods from different suppliers can be coordinated and consolidated into shipments where applicable.",
    },
    {
      icon: "🚢",
      title: "Sea Freight",
      slug: "sea-freight",
      description:
        "Explore the basics of sea freight and the factors to consider when moving commercial cargo from China to Africa.",
    },
    {
      icon: "✈️",
      title: "Air Freight",
      slug: "air-freight",
      description:
        "Learn about air freight, cargo requirements, and considerations when choosing air transportation.",
    },
    {
      icon: "🇰🇪",
      title: "Importing Into Kenya",
      slug: "importing-into-kenya",
      description:
        "Explore practical educational information about importing goods into Kenya and the different stages involved.",
    },
    {
      icon: "💡",
      title: "Business & Importing Tips",
      slug: "business-importing-tips",
      description:
        "Discover practical lessons, common considerations, and useful information for businesses importing from China.",
    },
  ];

  return (
    <section
      id="trade-academy-categories"
      className="trade-academy-categories"
    >
      <div className="trade-academy-categories__container">

        <div className="trade-academy-categories__header">

          <span className="trade-academy-categories__eyebrow">
            EXPLORE THE ACADEMY
          </span>

          <h2>
            Explore Topics That
            <span> Matter to Your Importing Journey</span>
          </h2>

          <p>
            Browse our learning categories and explore articles covering
            product sourcing, suppliers, procurement, shipping, importing,
            and other practical areas of international trade.
          </p>

        </div>

        <div className="trade-academy-categories__grid">

          {categories.map((category) => (
            <div
              className="trade-academy-categories__card"
              key={category.slug}
            >

              <div className="trade-academy-categories__card-top">

                <div className="trade-academy-categories__icon">
                  {category.icon}
                </div>

              </div>

              <h3>
                {category.title}
              </h3>

              <p className="trade-academy-categories__description">
                {category.description}
              </p>

              <Link
                to={`/resources/trade-academy/category/${category.slug}`}
                className="trade-academy-categories__link"
              >
                Explore Articles
                <span>→</span>
              </Link>

            </div>
          ))}

        </div>

        <div className="trade-academy-categories__bottom">

          <div className="trade-academy-categories__bottom-icon">
            📚
          </div>

          <div className="trade-academy-categories__bottom-content">

            <span>
              KEEP LEARNING
            </span>

            <h3>
              Find the Information You Need
            </h3>

            <p>
              Each category brings together related Trade Academy articles,
              making it easier to find information relevant to your sourcing
              and importing journey.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TradeAcademyCategories;