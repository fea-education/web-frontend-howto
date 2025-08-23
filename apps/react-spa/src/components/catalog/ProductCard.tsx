import { Link } from "@tanstack/react-router";
import Card from "../common/Card";
import ProductPrice from "../pricing/ProductPrice";
import AddToCartButton from "../cart/AddToCartButton";

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
    tags?: string[];
  };
  showDescription?: boolean;
  showRating?: boolean;
  buttonText?: string;
}

export default function ProductCard({
  product,
  showRating = false,
  buttonText = "Add to Cart",
}: ProductCardProps) {
  const formatRating = (rating?: number) => {
    if (!rating) return "⭐⭐⭐⭐⭐";
    const stars = Math.round(rating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  const getBadges = (product: any): Badge[] => {
    const badges = [];
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
          <ProductPrice
            productId={product.id}
            size="medium"
            className="product-price mb-3"
          />
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
          <AddToCartButton
            productId={product.id}
            productName={product.name}
            productImageUrl={product.imageUrl}
            fullWidth
          >
            {buttonText}
          </AddToCartButton>
        </div>
      </Card>
    </Link>
  );
}
