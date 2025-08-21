# E-commerce Domain Model

This domain models the core business logic of a modern e-commerce platform, focusing on product discovery, cart management, and the checkout process. The system is organized into clearly defined bounded contexts, each owning its business capabilities and models.

## Bounded Contexts

### 1. Catalog Context
- **Business Capabilities:**
  - Product browsing and discovery
  - Product filtering and sorting
- **Owned Models:**
  - `Product`
  - `Category`
  - `Brand`
  - `Filter`
  - `SortOption`

### 2. Cart Context
- **Business Capabilities:**
  - Shopping cart management (add, remove, update items; view cart summary)
- **Owned Models:**
  - `Cart`
  - `CartItem`
  - `CartSummary`

### 3. Checkout Context
- **Business Capabilities:**
  - Multi-step checkout (shipping, payment, confirmation)
  - Collect shipping and payment information
  - Place order
- **Owned Models:**
  - `Checkout`
  - `ShippingInfo`
  - `PaymentInfo`
  - `Order`
  - `OrderItem`
  - `OrderSummary`

### 4. Pricing Context
- **Business Capabilities:**
  - Price calculation and management
  - Campaign and discount application
  - Voucher handling
  - Price versioning
- **Owned Models:**
  - `Price`
  - `Discount`
  - `Campaign`
  - `Voucher`
