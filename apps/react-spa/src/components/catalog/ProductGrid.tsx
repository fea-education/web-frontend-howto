import { useProductFilters } from "../../hooks/useProductFilters";
import { useCalculateAllPrices } from "../../hooks/useBackend";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { products, isLoading, error, filters, setSort } = useProductFilters();
  const productIds = products?.map((product) => product.id) || [];
  const { data: prices } = useCalculateAllPrices(productIds);

  // Combine products with prices
  const productsWithPrices =
    products?.map((product) => {
      const price = prices?.find((p: any) => p.productId === product.id);
      return {
        ...product,
        price: price
          ? {
              amount: price.amount,
              isOnSale: price.isOnSale,
              saleAmount: price.saleAmount,
            }
          : undefined,
      };
    }) || [];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const sortMap: Record<string, any> = {
      Featured: "featured",
      "Price: Low to High": "price-asc",
      "Price: High to Low": "price-desc",
      "Customer Rating": "rating-desc",
      Newest: "newest",
      "Best Selling": "best-selling",
    };
    setSort(sortMap[value] || undefined);
  };

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">
            Showing 1-{productsWithPrices.length} of {productsWithPrices.length}{" "}
            results
          </span>
        </div>

        <div className="flex items-center">
          <label className="form-label mr-2 mb-0">Sort by:</label>
          <select
            className="form-select"
            style={{ width: "auto" }}
            value={(() => {
              const reverseMap: Record<string, string> = {
                featured: "Featured",
                "price-asc": "Price: Low to High",
                "price-desc": "Price: High to Low",
                "rating-desc": "Customer Rating",
                newest: "Newest",
                "best-selling": "Best Selling",
              };
              return reverseMap[filters.sort || ""] || "Featured";
            })()}
            onChange={handleSortChange}
          >
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
        {productsWithPrices.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showRating={true}
            linkTo="/checkout"
            buttonText="Add to Cart"
          />
        ))}
      </div>
    </div>
  );
}
