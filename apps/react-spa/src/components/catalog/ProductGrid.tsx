import { useProductsWithPrices } from "../../hooks/useBackend";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useProductsWithPrices();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

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
        {products?.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            showRating={true}
            linkTo="/checkout"
            buttonText="Add to Cart"
          />
        ))}
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
