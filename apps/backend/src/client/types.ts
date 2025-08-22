import type {
  Product,
  Category,
  Brand,
  Filter,
  SortOption,
} from "@domain/catalog";
import type { Cart, CartItem, CartSummary } from "@domain/cart";
import type {
  CheckoutInProgress,
  ShippingInfo,
  PaymentInfo,
  Order,
  OrderSummary,
} from "@domain/checkout";
import type { Price, Campaign } from "@domain/pricing";

// Catalog Context
export interface CatalogClient {
  browseProducts(filters?: Filter[], sort?: SortOption): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  listCategories(): Promise<Category[]>;
  listBrands(): Promise<Brand[]>;
}

// Cart Context
export interface CartClient {
  getCart(cartId: string): Promise<Cart>;
  addItem(cartId: string, item: CartItem): Promise<Cart>;
  removeItem(cartId: string, itemId: string): Promise<Cart>;
  updateItem(cartId: string, item: CartItem): Promise<Cart>;
  getSummary(cartId: string): Promise<CartSummary>;
}

// Checkout Context
export interface CheckoutClient {
  startCheckout(cart: Cart): Promise<CheckoutInProgress>;
  setShippingInfo(
    checkoutId: string,
    info: ShippingInfo
  ): Promise<CheckoutInProgress>;
  setPaymentInfo(
    checkoutId: string,
    info: PaymentInfo
  ): Promise<CheckoutInProgress>;
  placeOrder(checkoutId: string): Promise<Order>;
  getOrderSummary(orderId: string): Promise<OrderSummary>;
}

// Pricing Context
export interface PricingClient {
  calculatePrice(productId: string): Promise<Price>;
  listCampaigns(): Promise<Campaign[]>;
}

// Main Backend Client
export interface BackendClient {
  catalog: CatalogClient;
  cart: CartClient;
  checkout: CheckoutClient;
  pricing: PricingClient;
}
