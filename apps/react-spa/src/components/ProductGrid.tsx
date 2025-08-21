import { Link } from '@tanstack/react-router'

export default function ProductGrid() {
  const products = [
    {
      emoji: '📱',
      title: 'iPhone 15 Pro',
      description: 'Latest smartphone with advanced features',
      price: '$999.99',
      originalPrice: '$1099.99',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 245,
      badges: [
        { text: 'Sale', type: 'success' },
        { text: 'Free Shipping', type: 'secondary' },
      ],
    },
    {
      emoji: '💻',
      title: 'MacBook Pro 16"',
      description: 'Professional laptop for creators',
      price: '$2,399.99',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 189,
      badges: [{ text: 'New', type: 'primary' }],
    },
    {
      emoji: '🎧',
      title: 'AirPods Pro',
      description: 'Premium wireless earbuds',
      price: '$199.99',
      originalPrice: '$249.99',
      rating: '⭐⭐⭐⭐',
      reviews: 512,
      badges: [{ text: 'Limited', type: 'warning' }],
    },
    {
      emoji: '⌚',
      title: 'Apple Watch Series 9',
      description: 'Advanced fitness and health tracking',
      price: '$399.99',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 332,
      badges: [{ text: 'Best Seller', type: 'success' }],
    },
    {
      emoji: '🖥️',
      title: '4K Monitor 27"',
      description: 'Ultra HD display for professionals',
      price: '$599.99',
      rating: '⭐⭐⭐⭐',
      reviews: 156,
      badges: [],
    },
    {
      emoji: '📷',
      title: 'Professional Camera',
      description: 'High-quality DSLR camera',
      price: '$1,299.99',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 98,
      badges: [{ text: 'Professional', type: 'primary' }],
    },
  ]

  return (
    <div>
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">Showing 1-24 of 156 results</span>
        </div>

        <div className="flex items-center">
          <label className="form-label mr-2 mb-0">Sort by:</label>
          <select className="form-select" style={{ width: 'auto' }}>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest</option>
            <option>Best Selling</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image bg-gray-100 flex items-center justify-center">
              <span className="text-6xl">{product.emoji}</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="product-price">
                {product.price}
                {product.originalPrice && (
                  <span className="product-price-original">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center mb-3">
                <span className="text-sm mr-2">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              {product.badges.length > 0 && (
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
              )}
              <Link to="/checkout" className="btn btn-primary btn-full">
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center">
          <button className="btn btn-secondary mr-2" disabled>
            Previous
          </button>
          <button className="btn btn-primary mx-1">1</button>
          <button className="btn btn-secondary mx-1">2</button>
          <button className="btn btn-secondary mx-1">3</button>
          <span className="mx-2">...</span>
          <button className="btn btn-secondary mx-1">7</button>
          <button className="btn btn-secondary ml-2">Next</button>
        </div>
      </div>
    </div>
  )
}
