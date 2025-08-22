import { Link } from "@tanstack/react-router";
import { useBrowseProductsWithPrices } from "../../hooks/useBackend";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const { data: allProducts, isLoading, error } = useBrowseProductsWithPrices();

  if (isLoading) return <div>Loading featured products...</div>;
  if (error) return <div>Error loading featured products</div>;

  // Filter for featured products
  const featuredProducts =
    allProducts?.filter((product: any) => product.isFeatured) || [];

  return (
    <section className="section bg-gray-50" id="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked products just for you</p>
        </div>

        <div className="grid grid-cols-4">
          {featuredProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              linkTo="/browse"
              buttonText="Add to Cart"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/browse"
            search={{
              categoryIds: undefined,
              brandIds: undefined,
              minPrice: undefined,
              maxPrice: undefined,
              minRating: undefined,
              sort: undefined,
            }}
            className="btn btn-secondary btn-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
