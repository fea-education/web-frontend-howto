export default function ShippingForm() {
  return (
    <div className="card mb-8">
      <div className="card-header">
        <h2 className="text-xl font-weight-600 mb-0">Shipping Information</h2>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-2">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input type="text" className="form-input" placeholder="John" />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-input" placeholder="Doe" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            placeholder="john.doe@example.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-input"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-input"
            placeholder="123 Main Street"
          />
        </div>

        <div className="grid grid-cols-3">
          <div className="form-group">
            <label className="form-label">City</label>
            <input type="text" className="form-input" placeholder="New York" />
          </div>
          <div className="form-group">
            <label className="form-label">State</label>
            <select className="form-select">
              <option>Select State</option>
              <option>New York</option>
              <option>California</option>
              <option>Texas</option>
              <option>Florida</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">ZIP Code</label>
            <input type="text" className="form-input" placeholder="10001" />
          </div>
        </div>
      </div>
    </div>
  )
}
