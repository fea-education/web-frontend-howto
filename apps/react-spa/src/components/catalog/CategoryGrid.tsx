import { Link } from '@tanstack/react-router'

export default function CategoryGrid() {
  const categories = [
    { emoji: '📱', title: 'Electronics', description: 'Latest gadgets and tech' },
    { emoji: '👕', title: 'Fashion', description: 'Trendy clothing & accessories' },
    { emoji: '🏠', title: 'Home & Garden', description: 'Beautiful home essentials' },
    { emoji: '⚽', title: 'Sports', description: 'Gear for active lifestyle' },
  ]

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
          {categories.map((category, index) => (
            <div key={index} className="card">
              <div className="card-body text-center">
                <div className="product-image bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-4xl">{category.emoji}</span>
                </div>
                <h3 className="product-title">{category.title}</h3>
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
  )
}
