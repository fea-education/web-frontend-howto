import { Link } from "@tanstack/react-router";
import { useProductsWithPrices } from "../../hooks/useBackend";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useProductsWithPrices();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  const formatPrice = (
    amount: number,
    isOnSale?: boolean,
    saleAmount?: number
  ) => {
    const displayPrice = `$${amount.toFixed(2)}`;
    const originalPrice =
      isOnSale && saleAmount && saleAmount !== amount
        ? `$${saleAmount.toFixed(2)}`
        : undefined;
    return { displayPrice, originalPrice };
  };

  const formatRating = (rating?: number) => {
    if (!rating) return "⭐⭐⭐⭐⭐";
    const stars = Math.round(rating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  const getBadges = (product: any) => {
    const badges = [];
    if (product.price?.isOnSale) badges.push({ text: "Sale", type: "success" });
    if (product.tags?.includes("new"))
      badges.push({ text: "New", type: "primary" });
    if (product.tags?.includes("limited"))
      badges.push({ text: "Limited", type: "warning" });
    if (product.tags?.includes("bestseller"))
      badges.push({ text: "Best Seller", type: "success" });
    if (product.tags?.includes("professional"))
      badges.push({ text: "Professional", type: "primary" });
    return badges;
  };

  return (
    <div>
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">
            Showing 1-{products?.length || 0} of {products?.length || 0} results
          </span>
        </div>

        <div className="flex items-center">
          <label className="form-label mr-2 mb-0">Sort by:</label>
          <select className="form-select" style={{ width: "auto" }}>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest</option>
            <option>Best Selling</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3" style={{ gap: "1.5rem" }}>
        {products?.map((product: any) => {
          const { displayPrice, originalPrice } = formatPrice(
            product.price?.amount || 0,
            product.price?.isOnSale,
            product.price?.saleAmount
          );
          const badges = getBadges(product);

          return (
            <div key={product.id} className="product-card">
              <div className="product-image bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="product-price">
                  {displayPrice}
                  {originalPrice && (
                    <span className="product-price-original">
                      {originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center mb-3">
                  <span className="text-sm mr-2">
                    {formatRating(product.rating)}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount || 0} reviews)
                  </span>
                </div>
                {badges.length > 0 && (
                  <div className="flex items-center mb-3">
                    {badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className={`badge badge-${badge.type}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                )}
                <Link to="/checkout" className="btn btn-primary btn-full">
                  Add to Cart
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center">
          <button className="btn btn-secondary mr-2" disabled>
            Previous
          </button>
          <button className="btn btn-primary mx-1">1</button>
          <button className="btn btn-secondary mx-1">2</button>
          <button className="btn btn-secondary mx-1">3</button>
          <span className="mx-2">...</span>
          <button className="btn btn-secondary mx-1">7</button>
          <button className="btn btn-secondary ml-2">Next</button>
        </div>
      </div>
    </div>
  );
}
