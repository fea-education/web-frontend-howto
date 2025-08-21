import { Link } from "@tanstack/react-router";
import { useProductsWithPrices } from "../../hooks/useBackend";

export default function FeaturedProducts() {
  const { data: allProducts, isLoading, error } = useProductsWithPrices();

  if (isLoading) return <div>Loading featured products...</div>;
  if (error) return <div>Error loading featured products</div>;

  // Filter for featured products
  const featuredProducts =
    allProducts?.filter((product: any) => product.isFeatured) || [];

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

  const getBadges = (product: any) => {
    const badges = [];
    if (product.price?.isOnSale) badges.push({ text: "Sale", type: "success" });
    if (product.tags?.includes("new"))
      badges.push({ text: "New", type: "primary" });
    if (product.tags?.includes("limited"))
      badges.push({ text: "Limited", type: "warning" });
    if (product.tags?.includes("bestseller"))
      badges.push({ text: "Best Seller", type: "success" });
    return badges;
  };

  return (
    <section className="section bg-gray-50" id="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked products just for you</p>
        </div>

        <div className="grid grid-cols-4">
          {featuredProducts.map((product: any) => {
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
                  <div className="product-price">
                    {displayPrice}
                    {originalPrice && (
                      <span className="product-price-original">
                        {originalPrice}
                      </span>
                    )}
                  </div>
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
                  <Link to="/browse" className="btn btn-primary btn-full">
                    Add to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/browse" className="btn btn-secondary btn-lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
