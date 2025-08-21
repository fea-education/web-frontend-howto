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
              <Link to="/" className="[&.active]:text-primary-color">
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse" className="[&.active]:text-primary-color">
                Products
              </Link>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
