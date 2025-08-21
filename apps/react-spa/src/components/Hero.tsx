import { Link } from '@tanstack/react-router'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Discover Amazing Products</h1>
        <p>Shop from thousands of high-quality products at unbeatable prices</p>
        <div className="flex justify-center">
          <Link to="/browse" className="btn btn-accent btn-lg">
            Shop Now
          </Link>
          <a href="#featured" className="btn btn-secondary btn-lg">
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  )
}
