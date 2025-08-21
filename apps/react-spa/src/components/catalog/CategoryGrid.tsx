import { Link } from "@tanstack/react-router";
import { useCategories } from "../../hooks/useBackend";

export default function CategoryGrid() {
  const { data: categories, isLoading, error } = useCategories();

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
            <div key={category.id} className="card">
              <div className="card-body text-center">
                <div className="product-image bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <h3 className="product-title">{category.name}</h3>
                <p className="text-secondary">{category.description}</p>
                <Link to="/browse" className="btn btn-primary btn-sm mt-4">
                  Browse
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
