import { useState } from "react";

import ProductImageUpload from "../ProductImageUpload/ProductImageUpload";

import "./ProductForm.css";

const createEmptyProduct = () => ({
  id: Date.now(),
  name: "",
  specifications: "",
  quantity: "",
  images: [],
});

const ProductForm = ({
  products,
  updateRequestData,
  onNext,
  onBack,
}) => {
  const [errors, setErrors] = useState({});

  const addProduct = () => {
    updateRequestData({
      products: [...products, createEmptyProduct()],
    });
  };

  const removeProduct = (productId) => {
    if (products.length === 1) {
      return;
    }

    updateRequestData({
      products: products.filter(
        (product) => product.id !== productId
      ),
    });
  };

  const updateProduct = (productId, field, value) => {
    updateRequestData({
      products: products.map((product) =>
        product.id === productId
          ? {
              ...product,
              [field]: value,
            }
          : product
      ),
    });

    setErrors((previous) => ({
      ...previous,
      [productId]: {
        ...previous[productId],
        [field]: "",
      },
    }));
  };

  const updateProductImages = (productId, images) => {
    updateRequestData({
      products: products.map((product) =>
        product.id === productId
          ? {
              ...product,
              images,
            }
          : product
      ),
    });
  };

  const validateProducts = () => {
    const newErrors = {};

    products.forEach((product) => {
      const productErrors = {};

      if (!product.name.trim()) {
        productErrors.name = "Product name is required.";
      }

      if (!product.specifications.trim()) {
        productErrors.specifications =
          "Please provide product specifications.";
      }

      if (!product.quantity) {
        productErrors.quantity =
          "Quantity is required.";
      } else if (
        !/^\d+$/.test(String(product.quantity)) ||
        Number(product.quantity) <= 0
      ) {
        productErrors.quantity =
          "Enter a valid quantity.";
      }

      if (Object.keys(productErrors).length > 0) {
        newErrors[product.id] = productErrors;
      }
    });

    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateProducts();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onNext();
  };

  return (
    <section className="product-form">
      <div className="product-form__header">
        <div>
          <span>STEP 2</span>

          <h2>Products You Want to Source</h2>

          <p>
            Add each product separately with its specifications,
            quantity and sample images.
          </p>
        </div>

        <div className="product-form__count">
          {products.length}{" "}
          {products.length === 1 ? "Product" : "Products"}
        </div>
      </div>

      <div className="product-form__body">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__header">
              <div>
                <span>PRODUCT {index + 1}</span>
                <h3>
                  {product.name || `Product ${index + 1}`}
                </h3>
              </div>

              {products.length > 1 && (
                <button
                  type="button"
                  className="product-card__remove"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="product-card__body">
              <div className="product-form__field">
                <label htmlFor={`product-name-${product.id}`}>
                  Product Name
                </label>

                <input
                  type="text"
                  id={`product-name-${product.id}`}
                  value={product.name}
                  onChange={(event) =>
                    updateProduct(
                      product.id,
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="e.g. Electric Blender"
                  className={
                    errors[product.id]?.name
                      ? "input-error"
                      : ""
                  }
                />

                {errors[product.id]?.name && (
                  <p className="product-form__error">
                    {errors[product.id].name}
                  </p>
                )}
              </div>

              <div className="product-form__field">
                <label htmlFor={`product-specifications-${product.id}`}>
                  Specifications / Requirements
                </label>

                <textarea
                  id={`product-specifications-${product.id}`}
                  value={product.specifications}
                  onChange={(event) =>
                    updateProduct(
                      product.id,
                      "specifications",
                      event.target.value
                    )
                  }
                  placeholder="Describe size, material, colour, model, voltage, packaging or any other requirements..."
                  rows="5"
                  className={
                    errors[product.id]?.specifications
                      ? "input-error"
                      : ""
                  }
                />

                {errors[product.id]?.specifications && (
                  <p className="product-form__error">
                    {errors[product.id].specifications}
                  </p>
                )}
              </div>

              <div className="product-form__field">
                <label htmlFor={`product-quantity-${product.id}`}>
                  Quantity
                </label>

                <input
                  type="number"
                  id={`product-quantity-${product.id}`}
                  min="1"
                  value={product.quantity}
                  onChange={(event) =>
                    updateProduct(
                      product.id,
                      "quantity",
                      event.target.value
                    )
                  }
                  placeholder="Enter quantity"
                  className={
                    errors[product.id]?.quantity
                      ? "input-error"
                      : ""
                  }
                />

                {errors[product.id]?.quantity && (
                  <p className="product-form__error">
                    {errors[product.id].quantity}
                  </p>
                )}
              </div>

              <ProductImageUpload
                images={product.images}
                onImagesChange={(images) =>
                  updateProductImages(product.id, images)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="product-form__add"
          onClick={addProduct}
        >
          <span>＋</span>
          Add Another Product
        </button>
      </div>

      <div className="product-form__footer">
        <button
          type="button"
          className="product-form__back"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="button"
          className="product-form__next"
          onClick={handleNext}
        >
          Review Request
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default ProductForm;