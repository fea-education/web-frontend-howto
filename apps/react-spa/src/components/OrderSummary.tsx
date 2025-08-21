export default function OrderSummary() {
  const orderDetails = {
    subtotal: '$1,799.96',
    shipping: '$9.99',
    tax: '$144.00',
    total: '$1,953.95',
  }

  return (
    <div className="card" style={{ height: 'fit-content' }}>
      <div className="card-header">
        <h2 className="text-xl font-weight-600 mb-0">Order Summary</h2>
      </div>
      <div className="card-body">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{orderDetails.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{orderDetails.shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{orderDetails.tax}</span>
          </div>
          <hr />
          <div className="flex justify-between font-weight-600 text-lg">
            <span>Total</span>
            <span>{orderDetails.total}</span>
          </div>
        </div>

        <button className="btn btn-primary btn-full btn-lg mt-6">
          Place Order
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            By placing your order, you agree to our{' '}
            <a href="#" className="text-primary">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-weight-600 mb-3">We Accept</h3>
          <div className="flex">
            <span className="text-2xl mr-2">💳</span>
            <span className="text-2xl mr-2">🅿️</span>
            <span className="text-2xl mr-2">📱</span>
          </div>
        </div>
      </div>
    </div>
  )
}
