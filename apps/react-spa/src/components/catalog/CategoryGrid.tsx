import { Link } from "@tanstack/react-router";
import { useListCategories } from "../../hooks/useBackend";
import Card from "../common/Card";

export default function CategoryGrid() {
  const { data: categories, isLoading, error } = useListCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Explore our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-4">
          {categories?.map((category) => (
            <Card
              key={category.id}
              className="text-center"
              imageUrl={category.imageUrl}
              imageAlt={category.name}
            >
              <h3 className="product-title">{category.name}</h3>
              <p className="text-secondary">{category.description}</p>
              <Link
                to="/browse"
                search={{
                  categoryIds: [category.id],
                  brandIds: undefined,
                  minPrice: undefined,
                  maxPrice: undefined,
                  minRating: undefined,
                  sort: undefined,
                }}
                className="btn btn-primary btn-sm mt-4"
              >
                Browse
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
