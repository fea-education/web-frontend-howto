import { MockBackendState } from "./MockBackendClient";

export const mockState: MockBackendState = {
  // Categories extracted from CategoryGrid component
  categories: [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and tech",
      imageUrl:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Trendy clothing & accessories",
      imageUrl:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      description: "Beautiful home essentials",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    },
    {
      id: "sports",
      name: "Sports",
      description: "Gear for active lifestyle",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
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
    // Electronics - Apple
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      description: "Latest smartphone with advanced features",
      imageUrl:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=300&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "apple",
      rating: 5.0,
      reviewCount: 332,
      isFeatured: true,
      tags: ["smartwatch", "fitness", "bestseller"],
    },

    // Electronics - Samsung
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24",
      description: "Flagship Android smartphone with AI features",
      imageUrl:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "samsung",
      rating: 4.5,
      reviewCount: 312,
      isFeatured: false,
      tags: ["smartphone", "android", "ai"],
    },
    {
      id: "samsung-tv-65",
      name: 'Samsung 65" QLED TV',
      description: "4K Smart TV with quantum dot technology",
      imageUrl:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "samsung",
      rating: 4.0,
      reviewCount: 128,
      isFeatured: false,
      tags: ["tv", "smart", "4k"],
    },

    // Electronics - Sony
    {
      id: "sony-wh-1000xm5",
      name: "Sony WH-1000XM5",
      description: "Premium noise-canceling headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "sony",
      rating: 4.5,
      reviewCount: 456,
      isFeatured: true,
      tags: ["headphones", "noise-canceling", "premium"],
    },
    {
      id: "sony-camera-a7iv",
      name: "Sony A7 IV Camera",
      description: "Professional mirrorless camera for content creators",
      imageUrl:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "sony",
      rating: 5.0,
      reviewCount: 89,
      isFeatured: false,
      tags: ["camera", "mirrorless", "professional"],
    },

    // Electronics - Generic
    {
      id: "4k-monitor-27",
      name: '4K Monitor 27"',
      description: "Ultra HD display for professionals",
      imageUrl:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 156,
      isFeatured: false,
      tags: ["monitor", "4k", "professional"],
    },
    {
      id: "gaming-laptop",
      name: "Gaming Laptop",
      description: "High-performance laptop for gaming",
      imageUrl:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      categoryId: "electronics",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 156,
      isFeatured: true,
      tags: ["laptop", "gaming", "new"],
    },

    // Fashion - Nike
    {
      id: "nike-air-max-90",
      name: "Nike Air Max 90",
      description: "Classic sneakers with air cushioning",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "nike",
      rating: 4.5,
      reviewCount: 892,
      isFeatured: true,
      tags: ["sneakers", "classic", "comfort"],
    },
    {
      id: "nike-dri-fit-shirt",
      name: "Nike Dri-FIT Training Shirt",
      description: "Moisture-wicking athletic shirt",
      imageUrl:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "nike",
      rating: 4.0,
      reviewCount: 234,
      isFeatured: false,
      tags: ["shirt", "athletic", "moisture-wicking"],
    },

    // Fashion - Adidas
    {
      id: "adidas-ultraboost-22",
      name: "Adidas Ultraboost 22",
      description: "Premium running shoes with boost technology",
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "adidas",
      rating: 4.5,
      reviewCount: 567,
      isFeatured: true,
      tags: ["running", "boost", "premium"],
    },
    {
      id: "adidas-hoodie",
      name: "Adidas Essential Hoodie",
      description: "Comfortable cotton hoodie for everyday wear",
      imageUrl:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "adidas",
      rating: 3.5,
      reviewCount: 145,
      isFeatured: false,
      tags: ["hoodie", "cotton", "casual"],
    },

    // Fashion - Generic
    {
      id: "denim-jacket",
      name: "Classic Denim Jacket",
      description: "Timeless denim jacket for any occasion",
      imageUrl:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 78,
      isFeatured: false,
      tags: ["denim", "classic", "versatile"],
    },
    {
      id: "leather-boots",
      name: "Leather Ankle Boots",
      description: "Stylish leather boots for winter",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      categoryId: "fashion",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 234,
      isFeatured: true,
      tags: ["boots", "leather", "winter"],
    },

    // Sports - Nike
    {
      id: "nike-basketball",
      name: "Nike Basketball",
      description: "Official size basketball for indoor/outdoor play",
      imageUrl:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "nike",
      rating: 4.0,
      reviewCount: 156,
      isFeatured: false,
      tags: ["basketball", "indoor", "outdoor"],
    },
    {
      id: "nike-gym-bag",
      name: "Nike Training Gym Bag",
      description: "Spacious gym bag with multiple compartments",
      imageUrl:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "nike",
      rating: 4.5,
      reviewCount: 89,
      isFeatured: false,
      tags: ["gym", "bag", "training"],
    },

    // Sports - Adidas
    {
      id: "adidas-soccer-ball",
      name: "Adidas UEFA Champions League Ball",
      description: "Official match ball with premium construction",
      imageUrl:
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "adidas",
      rating: 5.0,
      reviewCount: 312,
      isFeatured: true,
      tags: ["soccer", "official", "champions-league"],
    },
    {
      id: "adidas-yoga-mat",
      name: "Adidas Premium Yoga Mat",
      description: "High-quality yoga mat with excellent grip",
      imageUrl:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "adidas",
      rating: 4.0,
      reviewCount: 167,
      isFeatured: false,
      tags: ["yoga", "mat", "premium"],
    },

    // Sports - Generic
    {
      id: "dumbbells-set",
      name: "Adjustable Dumbbells Set",
      description: "Space-saving adjustable dumbbells for home gym",
      imageUrl:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 234,
      isFeatured: true,
      tags: ["dumbbells", "adjustable", "home-gym"],
    },
    {
      id: "resistance-bands",
      name: "Resistance Bands Set",
      description: "Complete resistance training system",
      imageUrl:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      categoryId: "sports",
      brandId: "generic",
      rating: 3.5,
      reviewCount: 89,
      isFeatured: false,
      tags: ["resistance", "bands", "training"],
    },

    // Home & Garden - Generic
    {
      id: "coffee-maker",
      name: "Premium Coffee Maker",
      description: "Programmable coffee maker with thermal carafe",
      imageUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      categoryId: "home-garden",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 145,
      isFeatured: false,
      tags: ["coffee", "programmable", "thermal"],
    },
    {
      id: "dining-table",
      name: "Wooden Dining Table",
      description: "Solid wood dining table seats 6 people",
      imageUrl:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      categoryId: "home-garden",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 67,
      isFeatured: true,
      tags: ["dining", "wood", "furniture"],
    },
    {
      id: "garden-tools",
      name: "Garden Tools Set",
      description: "Complete gardening toolkit with carrying case",
      imageUrl:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      categoryId: "home-garden",
      brandId: "generic",
      rating: 4.0,
      reviewCount: 123,
      isFeatured: false,
      tags: ["garden", "tools", "complete"],
    },
    {
      id: "vintage-typewriter",
      name: "Vintage Typewriter",
      description: "Classic mechanical typewriter for writing enthusiasts",
      imageUrl:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=300&fit=crop",
      categoryId: "home-garden",
      brandId: "generic",
      rating: 4.5,
      reviewCount: 289,
      isFeatured: true,
      tags: ["typewriter", "vintage", "writing"],
    },
  ],

  // Prices extracted from product components (converting string prices to numbers)
  prices: [
    // Electronics - Apple
    {
      id: "price-iphone-15-pro",
      productId: "iphone-15-pro",
      amount: 999.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 899.99,
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
      saleAmount: 179.99,
      priceType: "sale",
    },
    {
      id: "price-apple-watch-series-9",
      productId: "apple-watch-series-9",
      amount: 399.99,
      currency: "USD",
      priceType: "regular",
    },

    // Electronics - Samsung
    {
      id: "price-samsung-galaxy-s24",
      productId: "samsung-galaxy-s24",
      amount: 849.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-samsung-tv-65",
      productId: "samsung-tv-65",
      amount: 1299.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 1099.99,
      priceType: "sale",
    },

    // Electronics - Sony
    {
      id: "price-sony-wh-1000xm5",
      productId: "sony-wh-1000xm5",
      amount: 349.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-sony-camera-a7iv",
      productId: "sony-camera-a7iv",
      amount: 2499.99,
      currency: "USD",
      priceType: "regular",
    },

    // Electronics - Generic
    {
      id: "price-4k-monitor-27",
      productId: "4k-monitor-27",
      amount: 599.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-gaming-laptop",
      productId: "gaming-laptop",
      amount: 1299.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 1149.99,
      priceType: "sale",
    },

    // Fashion - Nike
    {
      id: "price-nike-air-max-90",
      productId: "nike-air-max-90",
      amount: 129.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-nike-dri-fit-shirt",
      productId: "nike-dri-fit-shirt",
      amount: 39.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 29.99,
      priceType: "sale",
    },

    // Fashion - Adidas
    {
      id: "price-adidas-ultraboost-22",
      productId: "adidas-ultraboost-22",
      amount: 179.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-adidas-hoodie",
      productId: "adidas-hoodie",
      amount: 69.99,
      currency: "USD",
      priceType: "regular",
    },

    // Fashion - Generic
    {
      id: "price-denim-jacket",
      productId: "denim-jacket",
      amount: 89.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-leather-boots",
      productId: "leather-boots",
      amount: 159.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 129.99,
      priceType: "sale",
    },

    // Sports - Nike
    {
      id: "price-nike-basketball",
      productId: "nike-basketball",
      amount: 24.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-nike-gym-bag",
      productId: "nike-gym-bag",
      amount: 49.99,
      currency: "USD",
      priceType: "regular",
    },

    // Sports - Adidas
    {
      id: "price-adidas-soccer-ball",
      productId: "adidas-soccer-ball",
      amount: 149.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-adidas-yoga-mat",
      productId: "adidas-yoga-mat",
      amount: 79.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 59.99,
      priceType: "sale",
    },

    // Sports - Generic
    {
      id: "price-dumbbells-set",
      productId: "dumbbells-set",
      amount: 199.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-resistance-bands",
      productId: "resistance-bands",
      amount: 29.99,
      currency: "USD",
      priceType: "regular",
    },

    // Home & Garden - Generic
    {
      id: "price-coffee-maker",
      productId: "coffee-maker",
      amount: 119.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-dining-table",
      productId: "dining-table",
      amount: 899.99,
      currency: "USD",
      isOnSale: true,
      saleAmount: 749.99,
      priceType: "sale",
    },
    {
      id: "price-garden-tools",
      productId: "garden-tools",
      amount: 79.99,
      currency: "USD",
      priceType: "regular",
    },
    {
      id: "price-vintage-typewriter",
      productId: "vintage-typewriter",
      amount: 249.99,
      currency: "USD",
      priceType: "regular",
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
