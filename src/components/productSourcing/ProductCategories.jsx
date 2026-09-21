import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCategories.css";

/*
  TEMPORARY DATA

  This is only here so you can see the section working
  before the backend API is ready.

  Later, remove this data and let the backend provide it.
*/

const demoCategories = [
  {
    id: 1,
    name: "Electronics & Accessories",
    description:
      "Source electronics, accessories, gadgets, and related products from suppliers in China.",
    image_urls: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ],
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    description:
      "Find clothing, footwear, bags, accessories, and other fashion products for your business.",
    image_urls: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    ],
  },
  {
    id: 3,
    name: "Home & Living",
    description:
      "Source furniture, household items, kitchen products, décor, and other home-related goods.",
    image_urls: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55",
    ],
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    description:
      "Explore sourcing options for beauty products, personal care items, accessories, and related goods.",
    image_urls: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    ],
  },
  {
    id: 5,
    name: "Tools & Equipment",
    description:
      "Source tools, equipment, machinery-related products, and supplies for different business needs.",
    image_urls: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
      "https://images.unsplash.com/photo-1581147036324-c17ac41c2b1a",
    ],
  },
  {
    id: 6,
    name: "Custom & Other Products",
    description:
      "Looking for something specific? Tell us what you need and we can help explore sourcing options.",
    image_urls: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad",
    ],
  },
];

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    Keeps track of which image is currently displayed
    for each category.

    Example:

    {
      1: 0,
      2: 1,
      3: 2
    }

    means:
    category 1 → image 0
    category 2 → image 1
    category 3 → image 2
  */
  const [activeImages, setActiveImages] = useState({});

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        setError("");

        /*
          Later your Vite environment variable can be:

          VITE_API_URL=http://localhost:5000/api

          Then this becomes:

          http://localhost:5000/api/product-categories
        */

        const apiUrl =
          import.meta.env.VITE_API_URL ||
          "http://localhost:5000/api";

        const response = await fetch(
          `${apiUrl}/product-categories`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to load product categories."
          );
        }

        const data = await response.json();

        /*
          Expected backend response:

          {
            "success": true,
            "data": [
              {
                "id": 1,
                "name": "Electronics & Accessories",
                "description": "...",
                "image_urls": [
                  "https://...",
                  "https://...",
                  "https://..."
                ]
              }
            ]
          }
        */

        setCategories(data.data || data);
      } catch (err) {
        console.warn(
          "Backend unavailable. Using temporary demo data."
        );

        setError(
          "Showing temporary category images while the backend is unavailable."
        );

        /*
          TEMPORARY FALLBACK

          Remove this later when the backend is connected.
        */
        setCategories(demoCategories);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  /*
    Start the image rotation after categories have loaded.
  */

  useEffect(() => {
    if (!categories.length) {
      return;
    }

    const interval = setInterval(() => {
      setActiveImages((previousImages) => {
        const nextImages = { ...previousImages };

        categories.forEach((category) => {
          const imageCount = category.image_urls?.length || 0;

          if (imageCount > 0) {
            const currentIndex =
              previousImages[category.id] || 0;

            nextImages[category.id] =
              (currentIndex + 1) % imageCount;
          }
        });

        return nextImages;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [categories]);

  if (loading) {
    return (
      <section className="product-categories">
        <div className="product-categories-container">

          <div className="product-categories-header">
            <span className="product-categories-eyebrow">
              WHAT CAN WE SOURCE?
            </span>

            <h2 className="product-categories-title">
              Products for
              <br />
              <span>different business needs.</span>
            </h2>

            <p className="product-categories-intro">
              We help businesses explore sourcing options across
              a wide range of product categories.
            </p>
          </div>

          <div className="product-categories-loading">
            <div className="product-category-loading-spinner"></div>

            <p>Loading product categories...</p>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="product-categories">
      <div className="product-categories-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="product-categories-header">

          <span className="product-categories-eyebrow">
            WHAT CAN WE SOURCE?
          </span>

          <h2 className="product-categories-title">
            Products for
            <br />
            <span>different business needs.</span>
          </h2>

          <p className="product-categories-intro">
            From electronics and fashion to household goods,
            beauty products, tools, and more, we help you explore
            sourcing opportunities from suppliers in China.
          </p>

        </div>

        {error && (
          <p className="product-categories-notice">
            {error}
          </p>
        )}

        {/* =========================
            CATEGORY GRID
        ========================= */}

        <div className="product-categories-grid">

          {categories.map((category) => {

            const images = category.image_urls || [];

            const currentImageIndex =
              activeImages[category.id] || 0;

            const currentImage =
              images[currentImageIndex];

            return (
              <article
                className="product-category-card"
                key={category.id}
              >

                {/* IMAGE AREA */}

                <div className="product-category-image-wrapper">

                  {currentImage && (
                    <img
                      src={currentImage}
                      alt={category.name}
                      className="product-category-image"
                    />
                  )}

                  <div className="product-category-image-overlay"></div>

                  <div className="product-category-image-count">
                    {images.map((_, index) => (
                      <span
                        key={index}
                        className={
                          index === currentImageIndex
                            ? "product-category-dot product-category-dot-active"
                            : "product-category-dot"
                        }
                      />
                    ))}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="product-category-content">

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <Link
                    to="/signup"
                    className="product-category-link"
                  >
                    Request This Product
                    <span>→</span>
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="product-categories-bottom">

          <p>
            Don't see the product you're looking for?
          </p>

          <Link
            to="/signup"
            className="product-categories-button"
          >
            Tell Us What You Need
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ProductCategories;