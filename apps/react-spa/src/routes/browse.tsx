import { createFileRoute } from "@tanstack/react-router";
import ProductGrid from "@/components/catalog/ProductGrid";
import ProductFilters from "@/components/catalog/ProductFilters";

export const Route = createFileRoute("/browse")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      categoryIds: Array.isArray(search.categoryIds)
        ? (search.categoryIds as string[])
        : undefined,
      brandIds: Array.isArray(search.brandIds)
        ? (search.brandIds as string[])
        : undefined,
      minPrice:
        typeof search.minPrice === "number" ? search.minPrice : undefined,
      maxPrice:
        typeof search.maxPrice === "number" ? search.maxPrice : undefined,
      minRating:
        typeof search.minRating === "number" ? search.minRating : undefined,
      sort: typeof search.sort === "string" ? (search.sort as any) : undefined,
    };
  },
  component: Browse,
});

function Browse() {
  return (
    <>
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">All Products</h1>
            <p className="section-subtitle">
              Discover our complete collection of quality products
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid"
            style={{ gridTemplateColumns: "250px 1fr", gap: "2rem" }}
          >
            <ProductFilters />
            <ProductGrid />
          </div>
        </div>
      </section>
    </>
  );
}
