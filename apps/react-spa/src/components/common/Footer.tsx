export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4">
          <div>
            <h3>ShopHub</h3>
            <p className="text-gray-300 mb-4">
              Your trusted online shopping destination for quality products at
              great prices.
            </p>
            <div className="flex">
              <a href="#" className="btn btn-secondary btn-sm">
                Facebook
              </a>
              <a href="#" className="btn btn-secondary btn-sm">
                Twitter
              </a>
              <a href="#" className="btn btn-secondary btn-sm">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/browse">Products</a>
              </li>
              <li className="mb-2">
                <a href="#categories">Categories</a>
              </li>
              <li className="mb-2">
                <a href="#about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Customer Service</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-2">
                <a href="#">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#">Size Guide</a>
              </li>
              <li className="mb-2">
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact Info</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-2">📞 1-800-SHOPHUB</li>
              <li className="mb-2">✉️ support@shophub.com</li>
              <li className="mb-2">
                📍 123 Commerce St<br />
                Shopping City, SC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 ShopHub. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
