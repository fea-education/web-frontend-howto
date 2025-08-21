export default function PaymentForm() {
  const paymentMethods = [
    { id: 'card', emoji: '💳', label: 'Credit Card' },
    { id: 'paypal', emoji: '🅿️', label: 'PayPal' },
    { id: 'apple', emoji: '📱', label: 'Apple Pay' },
  ]

  return (
    <div className="card mb-8">
      <div className="card-header">
        <h2 className="text-xl font-weight-600 mb-0">Payment Information</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div className="grid grid-cols-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-center p-4 border rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  className="mr-3"
                  defaultChecked={method.id === 'card'}
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">{method.emoji}</div>
                  <div className="text-sm font-weight-500">{method.label}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-input"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="grid grid-cols-2">
          <div className="form-group">
            <label className="form-label">Expiry Date</label>
            <input type="text" className="form-input" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label className="form-label">CVV</label>
            <input type="text" className="form-input" placeholder="123" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Cardholder Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Billing address same as shipping address
          </label>
        </div>
      </div>
    </div>
  )
}
