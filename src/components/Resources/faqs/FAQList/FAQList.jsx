import { useEffect, useMemo, useState } from "react";

import FAQsCategories from "../FAQSCategories/FAQsCategories";

import "./FAQList.css";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3001/api/faqs"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        const data = await response.json();

        setFaqs(data.faqs || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setError("Unable to load FAQs.");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const categories = useMemo(() => {
    return [
      ...new Set(
        faqs
          .map((faq) => faq.category)
          .filter(Boolean)
      ),
    ];
  }, [faqs]);

  const filteredFAQs = useMemo(() => {
    if (activeCategory === "All") {
      return faqs;
    }

    return faqs.filter(
      (faq) => faq.category === activeCategory
    );
  }, [faqs, activeCategory]);

  const toggleFAQ = (id) => {
    setOpenFAQ((current) =>
      current === id ? null : id
    );
  };

  return (
    <section className="faq-list">
      <div className="faq-list__container">

        <FAQsCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setOpenFAQ(null);
          }}
        />

        {loading && (
          <div className="faq-list__status">
            <span>Loading FAQs...</span>
          </div>
        )}

        {!loading && error && (
          <div className="faq-list__status faq-list__status--error">
            <span>{error}</span>
          </div>
        )}

        {!loading &&
          !error &&
          filteredFAQs.length === 0 && (
            <div className="faq-list__status">
              <span>
                No FAQs are currently available in this category.
              </span>
            </div>
          )}

        {!loading && !error && filteredFAQs.length > 0 && (
          <div className="faq-list__items">
            {filteredFAQs.map((faq) => {
              const isOpen = openFAQ === faq.id;

              return (
                <div
                  className={`faq-list__item ${
                    isOpen ? "faq-list__item--open" : ""
                  }`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-list__question"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>
                      {faq.question}
                    </span>

                    <span className="faq-list__icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-list__answer">
                      <p>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default FAQList;