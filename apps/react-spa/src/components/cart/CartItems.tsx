import { useGetCart } from "../../hooks/useBackend";

export default function CartItems() {
  // Using the demo cart ID from our mock state
  const { data: cart, isLoading, error } = useGetCart("demo-cart");

  if (isLoading) return <div>Loading cart...</div>;
  if (error) return <div>Error loading cart</div>;

  const cartItems = cart?.items || [];

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="card mb-8">
      <div className="card-header">
        <h2 className="text-xl font-weight-600 mb-0">
          Your Items ({cartItems.length})
        </h2>
      </div>
      <div className="card-body p-0">
        {cartItems.map((item: any) => (
          <div key={item.productId} className="cart-item">
            <div className="cart-item-image bg-gray-100 flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.variant}</p>
              <div className="cart-item-price">{formatPrice(item.price)}</div>
            </div>
            <div className="quantity-selector">
              <button className="quantity-btn">-</button>
              <input
                type="number"
                value={item.quantity}
                className="quantity-input"
                readOnly
              />
              <button className="quantity-btn">+</button>
            </div>
            <div className="text-right ml-4">
              <div className="font-weight-600">
                {formatPrice(item.price * item.quantity)}
              </div>
              <button className="text-error text-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
