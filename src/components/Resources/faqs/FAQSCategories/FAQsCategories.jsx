import "./FAQsCategories.css";

const FAQsCategories = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="faqs-categories">
      <button
        type="button"
        className={
          activeCategory === "All"
            ? "faqs-categories__button faqs-categories__button--active"
            : "faqs-categories__button"
        }
        onClick={() => onCategoryChange("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={
            activeCategory === category
              ? "faqs-categories__button faqs-categories__button--active"
              : "faqs-categories__button"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FAQsCategories;