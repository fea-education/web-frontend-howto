import { Link } from "@tanstack/react-router";
import Card from "../common/Card";

interface Badge {
  text: string;
  type: string;
}

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description?: string;
    imageUrl?: string;
    rating?: number;
    reviewCount?: number;
    price?: {
      amount: number;
      isOnSale?: boolean;
      saleAmount?: number;
    };
    tags?: string[];
  };
  showDescription?: boolean;
  showRating?: boolean;
  linkTo?: string;
  buttonText?: string;
}

export default function ProductCard({
  product,
  showRating = false,
  linkTo = "/checkout",
  buttonText = "Add to Cart",
}: ProductCardProps) {
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

  const getBadges = (product: any): Badge[] => {
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

  const { displayPrice, originalPrice } = formatPrice(
    product.price?.amount || 0,
    product.price?.isOnSale,
    product.price?.saleAmount
  );
  const badges = getBadges(product);

  return (
    <Link
      to="/product/$productId"
      params={{ productId: product.id }}
      className="btn btn-secondary btn-full"
    >
      <Card
        className="product-card"
        imageUrl={product.imageUrl}
        imageAlt={product.name}
        fallbackIcon="📦"
      >
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-price">
            {displayPrice}
            {originalPrice && (
              <span className="product-price-original">{originalPrice}</span>
            )}
          </div>
          {showRating && (
            <div className="flex items-center mb-3">
              <span className="text-sm mr-2">
                {formatRating(product.rating)}
              </span>
              <span className="text-sm text-gray-500">
                ({product.reviewCount || 0} reviews)
              </span>
            </div>
          )}
          {badges.length > 0 && (
            <div className="flex items-center mb-3">
              {badges.map((badge, badgeIndex) => (
                <span key={badgeIndex} className={`badge badge-${badge.type}`}>
                  {badge.text}
                </span>
              ))}
            </div>
          )}
          <Link to={linkTo} className="btn btn-primary btn-full">
            {buttonText}
          </Link>
        </div>
      </Card>
    </Link>
  );
}
