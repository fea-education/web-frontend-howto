export default function ProductFilters() {
  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas']
  const ratings = [
    { stars: '⭐⭐⭐⭐⭐', label: '5 Stars' },
    { stars: '⭐⭐⭐⭐', label: '4+ Stars' },
    { stars: '⭐⭐⭐', label: '3+ Stars' },
  ]

  return (
    <div className="bg-white border rounded-lg p-6" style={{ height: 'fit-content' }}>
      <h3 className="mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="form-group">
        <label className="form-label">Category</label>
        <select className="form-select">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Garden</option>
          <option>Sports</option>
          <option>Books</option>
          <option>Toys</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="form-group">
        <label className="form-label">Price Range</label>
        <div className="flex items-center">
          <input
            type="number"
            className="form-input"
            placeholder="Min"
            style={{ width: '80px' }}
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            className="form-input"
            placeholder="Max"
            style={{ width: '80px' }}
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div className="form-group">
        <label className="form-label">Brand</label>
        <div className="space-y-2">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" /> {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="form-group">
        <label className="form-label">Customer Rating</label>
        <div className="space-y-2">
          {ratings.map((rating, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" /> {rating.stars} {rating.label}
            </label>
          ))}
        </div>
      </div>

      <button className="btn btn-primary btn-full mt-4">Apply Filters</button>
      <button className="btn btn-secondary btn-full mt-2">Clear All</button>
    </div>
  )
}
