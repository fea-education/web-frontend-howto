import { createFileRoute } from "@tanstack/react-router";
import { useGetProductDetailById } from "../hooks/useBackend";
import ProductPrice from "../components/pricing/ProductPrice";

export const Route = createFileRoute("/product/$productId")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailById(productId);

  if (isLoading) {
    return (
      <div className="container">
        <div className="section">
          <div>Loading product details...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container">
        <div className="section">
          <div>Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="section">
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem" }}
        >
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full rounded-lg"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
              />
            </div>
            {product.imageUrls && product.imageUrls.length > 1 && (
              <div className="grid grid-cols-3" style={{ gap: "0.5rem" }}>
                {product.imageUrls.slice(1).map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full rounded border"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-weight-600 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {"⭐".repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && "⭐"}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <ProductPrice
                productId={product.id}
                size="large"
                className="mb-6"
              />

              {/* Availability */}
              <div className="mb-6">
                <span
                  className={`badge ${
                    product.availability === "in-stock"
                      ? "badge-success"
                      : product.availability === "limited"
                        ? "badge-warning"
                        : product.availability === "pre-order"
                          ? "badge-secondary"
                          : "badge-danger"
                  }`}
                >
                  {product.availability === "in-stock"
                    ? "In Stock"
                    : product.availability === "limited"
                      ? "Limited Stock"
                      : product.availability === "pre-order"
                        ? "Pre-Order"
                        : "Out of Stock"}
                </span>
                {product.stockQuantity && (
                  <span className="text-sm text-gray-500 ml-2">
                    {product.stockQuantity} available
                  </span>
                )}
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-6">
                  {product.tags.map((tag) => (
                    <span key={tag} className="badge badge-secondary mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                className="btn btn-primary btn-lg btn-full mb-4"
                disabled={product.availability === "out-of-stock"}
              >
                {product.availability === "pre-order"
                  ? "Pre-Order Now"
                  : "Add to Cart"}
              </button>

              {/* Warranty */}
              {product.warranty && (
                <p className="text-sm text-gray-600 mb-4">
                  🛡️ {product.warranty}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b mb-6">
            <div className="flex">
              <button className="btn btn-secondary mr-4">Description</button>
              <button className="btn btn-secondary mr-4">Specifications</button>
              <button className="btn btn-secondary mr-4">Features</button>
              {product.dimensions && (
                <button className="btn btn-secondary">Dimensions</button>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-weight-600 mb-4">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Specifications */}
          {product.specifications &&
            Object.keys(product.specifications).length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-weight-600 mb-4">Specifications</h3>
                <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="border-b pb-2">
                        <span className="font-weight-500">{key}:</span>
                        <span className="ml-2 text-gray-700">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-weight-600 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dimensions */}
          {product.dimensions && (
            <div className="mb-8">
              <h3 className="text-xl font-weight-600 mb-4">Dimensions</h3>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                <div>
                  <span className="font-weight-500">Width:</span>
                  <span className="ml-2">
                    {product.dimensions.width}{" "}
                    {product.dimensions.unit.split("/")[0]}
                  </span>
                </div>
                <div>
                  <span className="font-weight-500">Height:</span>
                  <span className="ml-2">
                    {product.dimensions.height}{" "}
                    {product.dimensions.unit.split("/")[0]}
                  </span>
                </div>
                <div>
                  <span className="font-weight-500">Depth:</span>
                  <span className="ml-2">
                    {product.dimensions.depth}{" "}
                    {product.dimensions.unit.split("/")[0]}
                  </span>
                </div>
                <div>
                  <span className="font-weight-500">Weight:</span>
                  <span className="ml-2">
                    {product.dimensions.weight}{" "}
                    {product.dimensions.unit.split("/")[1]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
