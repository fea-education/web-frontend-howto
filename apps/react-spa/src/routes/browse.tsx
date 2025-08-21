import { createFileRoute } from "@tanstack/react-router";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";

export const Route = createFileRoute("/browse")({
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
