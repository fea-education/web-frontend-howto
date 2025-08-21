import { MockBackendState } from "./MockBackendClient";

export const mockState: MockBackendState = {
  // Categories extracted from CategoryGrid component
  categories: [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and tech",
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Trendy clothing & accessories",
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      description: "Beautiful home essentials",
    },
    {
      id: "sports",
      name: "Sports",
      description: "Gear for active lifestyle",
    },
  ],

  // Brands extracted from ProductFilters component and inferred from products
  brands: [
    {
      id: "apple",
      name: "Apple",
      description: "Technology company known for innovation",
    },
    {
      id: "samsung",
      name: "Samsung",
      description: "Global technology leader",
    },
    {
      id: "sony",
      name: "Sony",
      description: "Electronics and entertainment",
    },
    {
      id: "nike",
      name: "Nike",
      description: "Athletic footwear and apparel",
    },
    {
      id: "adidas",
      name: "Adidas",
      description: "Sports clothing and accessories",
    },
    {
      id: "generic",
      name: "Generic",
      description: "Various manufacturers",
    },
  ],

  // Products extracted from FeaturedProducts and ProductGrid components
  products: [
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      description: "Latest smartphone with advanced features",
      categoryId: "electronics",
      brandId: "apple",
      rating: 5.0,
      reviewCount: 245,
      isFeatured: true,
      tags: ["smartphone", "latest", "premium"],
    },
    {
      id: "macbook-pro-16",
      name: 'MacBook Pro 16"',
      description: "Professional laptop for creators",
      categoryId: "electronics",
      brandId: "apple",
      rating: 5.0,
      reviewCount: 189,
      isFeatured: true,
      tags: ["laptop", "professional", "new"],
    },
    {
      id: "airpods-pro",
      name: "AirPods Pro",
      description: "Premium wireless earbuds",
      categoryId: "electronics",
      brandId: "apple",
      rating: 4.0,
      reviewCount: 512,
      isFeatured: true,
      tags: ["wireless", "earbuds", "limited"],
    },
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9",
      description: "Advanced fitness and health tracking",
      categoryId: "electronics",
      brandId: "apple",
      rating: 5.0,
      reviewCount: 332,
      isFeatured: true,
      tags: ["smartwatch", "fitness", "bestseller"],
    },
    {
      id: "4k-monitor-27",
      name: '4K Monitor 27"',
      description: "Ultra HD display for professionals",
      categoryId: "electronics",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 156,
      isFeatured: false,
      tags: ["monitor", "4k", "professional"],
    },
    {
      id: "professional-camera",
      name: "Professional Camera",
      description: "High-quality DSLR camera",
      categoryId: "electronics",
      brandId: "generic",
      rating: 5.0,
      reviewCount: 98,
      isFeatured: false,
      tags: ["camera", "dslr", "professional"],
    },
    {
      id: "gaming-laptop",
      name: "Gaming Laptop",
      description: "High-performance laptop for gaming",
      categoryId: "electronics",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 156,
      isFeatured: true,
      tags: ["laptop", "gaming", "new"],
    },
    {
      id: "wireless-headphones",
      name: "Wireless Headphones",
      description: "Premium wireless headphones",
      categoryId: "electronics",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 89,
      isFeatured: true,
      tags: ["headphones", "wireless", "limited"],
    },
  ],

  // Prices extracted from product components (converting string prices to numbers)
  prices: [
    {
      id: "price-iphone-15-pro",
      productId: "iphone-15-pro",
      amount: 999.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 999.99,
      priceType: "sale",
    },
    {
      id: "price-macbook-pro-16",
      productId: "macbook-pro-16",
      amount: 2399.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-airpods-pro",
      productId: "airpods-pro",
      amount: 199.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 199.99,
      priceType: "sale",
    },
    {
      id: "price-apple-watch-series-9",
      productId: "apple-watch-series-9",
      amount: 399.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-4k-monitor-27",
      productId: "4k-monitor-27",
      amount: 599.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-professional-camera",
      productId: "professional-camera",
      amount: 1299.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-gaming-laptop",
      productId: "gaming-laptop",
      amount: 1299.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-wireless-headphones",
      productId: "wireless-headphones",
      amount: 199.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 199.99,
      priceType: "sale",
    },
  ],

  // Campaigns for sales and promotions
  campaigns: [
    {
      id: "summer-sale",
      name: "Summer Sale",
      description: "Limited time summer discounts",
      active: true,
    },
    {
      id: "new-arrivals",
      name: "New Arrivals",
      description: "Latest product launches",
      active: true,
    },
    {
      id: "bestseller-promo",
      name: "Best Seller Promotion",
      description: "Promotion for top-selling items",
      active: true,
    },
  ],

  // Cart data extracted from CartItems component
  carts: [
    {
      id: "demo-cart",
      userId: "demo-user",
      items: [
        {
          productId: "iphone-15-pro",
          quantity: 1,
          price: 999.99,
          name: "iPhone 15 Pro",
          variant: "Space Black, 256GB",
        },
        {
          productId: "airpods-pro",
          quantity: 2,
          price: 199.99,
          name: "AirPods Pro",
          variant: "2nd Generation",
        },
        {
          productId: "apple-watch-series-9",
          quantity: 1,
          price: 399.99,
          name: "Apple Watch Series 9",
          variant: "Midnight, 45mm",
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],

  // Empty arrays for other state - these would be populated by user interactions
  checkouts: [],
  orders: [],
};
