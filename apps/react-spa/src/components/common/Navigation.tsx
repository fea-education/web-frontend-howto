import { Link } from "@tanstack/react-router";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="navbar-brand">
            ShopHub
          </Link>

          <ul className="navbar-nav hidden-mobile">
            <li>
              <Link
                to="/"
                className="[&.active]:text-primary-color"
                activeOptions={{
                  includeHash: true,
                }}
              >
                Home
              </Link>
            </li>
            <li>
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
                className="[&.active]:text-primary-color"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="categories"
                className="[&.active]:text-primary-color"
                activeOptions={{
                  includeHash: true,
                }}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="about"
                className="[&.active]:text-primary-color"
                activeOptions={{
                  includeHash: true,
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="contact"
                className="[&.active]:text-primary-color"
                activeOptions={{
                  includeHash: true,
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <a href="#search" className="btn btn-secondary btn-sm">
              Search
            </a>
            <Link to="/checkout" className="btn btn-primary btn-sm">
              Cart (3)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
