import { useState } from "react";
import { useListCategories, useListBrands } from "../../hooks/useBackend";
import { useProductFilters } from "../../hooks/useProductFilters";

export default function ProductFilters() {
  const { data: categories } = useListCategories();
  const { data: brands } = useListBrands();
  const {
    filters,
    setCategory,
    setBrands,
    setPriceRange,
    setMinRating,
    clearFilters,
  } = useProductFilters();

  // Local state for form inputs
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    filters.brandIds || []
  );
  const [minPrice, setMinPrice] = useState<string>(
    filters.minPrice?.toString() || ""
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    filters.maxPrice?.toString() || ""
  );

  const ratings = [
    { value: 5, stars: "⭐⭐⭐⭐⭐", label: "5 Stars" },
    { value: 4, stars: "⭐⭐⭐⭐", label: "4+ Stars" },
    { value: 3, stars: "⭐⭐⭐", label: "3+ Stars" },
  ];

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setCategory(value === "" ? undefined : value);
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    const newBrands = checked
      ? [...selectedBrands, brandId]
      : selectedBrands.filter((id) => id !== brandId);

    setSelectedBrands(newBrands);
    setBrands(newBrands);
  };

  const handlePriceChange = () => {
    const min = minPrice ? parseFloat(minPrice) : undefined;
    const max = maxPrice ? parseFloat(maxPrice) : undefined;
    setPriceRange(min, max);
  };

  const handleRatingChange = (rating: number, checked: boolean) => {
    setMinRating(checked ? rating : undefined);
  };

  const handleClearAll = () => {
    setSelectedBrands([]);
    setMinPrice("");
    setMaxPrice("");
    clearFilters();
  };

  return (
    <div
      className="bg-white border rounded-lg p-6"
      style={{ height: "fit-content" }}
    >
      <h3 className="mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="form-group">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={filters.categoryIds?.[0] || ""}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
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
            style={{ width: "80px" }}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handlePriceChange}
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            className="form-input"
            placeholder="Max"
            style={{ width: "80px" }}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handlePriceChange}
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div className="form-group">
        <label className="form-label">Brand</label>
        <div className="space-y-2">
          {brands?.map((brand) => (
            <label key={brand.id} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedBrands.includes(brand.id)}
                onChange={(e) => handleBrandChange(brand.id, e.target.checked)}
              />
              {brand.name}
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="form-group">
        <label className="form-label">Customer Rating</label>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating.value} className="flex items-center">
              <input
                type="radio"
                name="rating"
                className="mr-2"
                checked={filters.minRating === rating.value}
                onChange={(e) =>
                  handleRatingChange(rating.value, e.target.checked)
                }
              />
              {rating.stars} {rating.label}
            </label>
          ))}
        </div>
      </div>

      <button
        className="btn btn-secondary btn-full mt-4"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}
