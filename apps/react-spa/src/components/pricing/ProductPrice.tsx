import { useCalculateAllPrices } from "../../hooks/useBackend";

interface ProductPriceProps {
  productId: string;
  size?: "small" | "medium" | "large";
  showSaleBadge?: boolean;
  className?: string;
}

export default function ProductPrice({
  productId,
  size = "medium",
  showSaleBadge = true,
  className = "",
}: ProductPriceProps) {
  const { data: prices } = useCalculateAllPrices([productId]);
  const price = prices?.find((p: any) => p.productId === productId);

  if (!price) {
    return null;
  }

  const sizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-3xl",
  };

  const fontWeightClass =
    size === "large" ? "font-weight-600" : "font-weight-500";

  return (
    <div className={className}>
      {price.isOnSale ? (
        <div className="flex items-center flex-wrap gap-2">
          <span
            className={`${sizeClasses[size]} ${fontWeightClass} text-red-600`}
          >
            ${price.saleAmount?.toFixed(2)}
          </span>
          <span
            className={`${size === "large" ? "text-lg" : "text-base"} text-gray-500 line-through`}
          >
            ${price.amount.toFixed(2)}
          </span>
          {showSaleBadge && <span className="badge badge-success">Sale</span>}
        </div>
      ) : (
        <span className={`${sizeClasses[size]} ${fontWeightClass}`}>
          ${price.amount.toFixed(2)}
        </span>
      )}
    </div>
  );
}
