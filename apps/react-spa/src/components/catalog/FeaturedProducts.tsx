import { Link } from '@tanstack/react-router'

export default function FeaturedProducts() {
  const products = [
    {
      emoji: '📱',
      title: 'Latest Smartphone',
      price: '$699.99',
      originalPrice: '$799.99',
      badges: [
        { text: 'Sale', type: 'success' },
        { text: 'Free Shipping', type: 'secondary' },
      ],
    },
    {
      emoji: '💻',
      title: 'Gaming Laptop',
      price: '$1,299.99',
      badges: [{ text: 'New', type: 'primary' }],
    },
    {
      emoji: '🎧',
      title: 'Wireless Headphones',
      price: '$199.99',
      originalPrice: '$249.99',
      badges: [{ text: 'Limited', type: 'warning' }],
    },
    {
      emoji: '⌚',
      title: 'Smart Watch',
      price: '$399.99',
      badges: [{ text: 'Best Seller', type: 'success' }],
    },
  ]

  return (
    <section className="section bg-gray-50" id="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked products just for you</p>
        </div>

        <div className="grid grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">{product.emoji}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                  {product.price}
                  {product.originalPrice && (
                    <span className="product-price-original">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center mb-3">
                  {product.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className={`badge badge-${badge.type}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
                <Link to="/browse" className="btn btn-primary btn-full">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/browse" className="btn btn-secondary btn-lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
