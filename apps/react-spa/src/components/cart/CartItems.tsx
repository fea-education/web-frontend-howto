export default function CartItems() {
  const cartItems = [
    {
      emoji: '📱',
      title: 'iPhone 15 Pro',
      description: 'Space Black, 256GB',
      price: '$999.99',
      quantity: 1,
      total: '$999.99',
    },
    {
      emoji: '🎧',
      title: 'AirPods Pro',
      description: '2nd Generation',
      price: '$199.99',
      quantity: 2,
      total: '$399.98',
    },
    {
      emoji: '⌚',
      title: 'Apple Watch Series 9',
      description: 'Midnight, 45mm',
      price: '$399.99',
      quantity: 1,
      total: '$399.99',
    },
  ]

  return (
    <div className="card mb-8">
      <div className="card-header">
        <h2 className="text-xl font-weight-600 mb-0">Your Items (3)</h2>
      </div>
      <div className="card-body p-0">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-image bg-gray-100 flex items-center justify-center">
              <span className="text-2xl">{item.emoji}</span>
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="cart-item-price">{item.price}</div>
            </div>
            <div className="quantity-selector">
              <button className="quantity-btn">-</button>
              <input type="number" value={item.quantity} className="quantity-input" readOnly />
              <button className="quantity-btn">+</button>
            </div>
            <div className="text-right ml-4">
              <div className="font-weight-600">{item.total}</div>
              <button className="text-error text-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
