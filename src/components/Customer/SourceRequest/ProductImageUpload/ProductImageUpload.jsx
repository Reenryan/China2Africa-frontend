import "./ProductImageUpload.css";

const ProductImageUpload = ({
  images,
  onImagesChange,
}) => {
  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const newImages = selectedFiles.map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      file,
      preview: URL.createObjectURL(file),
    }));

    onImagesChange([...images, ...newImages]);
  };

  const removeImage = (imageId) => {
    const imageToRemove = images.find(
      (image) => image.id === imageId
    );

    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    onImagesChange(
      images.filter((image) => image.id !== imageId)
    );
  };

  return (
    <div className="product-image-upload">
      <div className="product-image-upload__label">
        <label>Product Images</label>

        <span>Optional</span>
      </div>

      <p className="product-image-upload__description">
        Upload sample images, reference photos or product
        pictures to help us understand what you need.
      </p>

      <label
        htmlFor="product-image-input"
        className="product-image-upload__box"
      >
        <span className="product-image-upload__icon">
          ＋
        </span>

        <strong>Upload Product Images</strong>

        <small>
          PNG, JPG or WEBP · Multiple images allowed
        </small>
      </label>

      <input
        type="file"
        id="product-image-input"
        accept="image/png,image/jpeg,image/webp"
        multiple
        onChange={handleImageChange}
      />

      {images.length > 0 && (
        <div className="product-image-upload__preview">
          {images.map((image) => (
            <div
              className="product-image-upload__image"
              key={image.id}
            >
              <img
                src={image.preview}
                alt="Product preview"
              />

              <button
                type="button"
                onClick={() => removeImage(image.id)}
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;