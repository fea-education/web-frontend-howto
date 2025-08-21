export default function Newsletter() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Stay Updated
          </h2>
          <p
            className="section-subtitle"
            style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}
          >
            Subscribe to our newsletter for exclusive deals and new product
            announcements
          </p>

          <div className="flex justify-center">
            <div className="form-group" style={{ maxWidth: '400px', width: '100%' }}>
              <div className="flex">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  style={{ borderRadius: '0.375rem 0 0 0.375rem' }}
                />
                <button
                  className="btn btn-accent"
                  style={{ borderRadius: '0 0.375rem 0.375rem 0' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
