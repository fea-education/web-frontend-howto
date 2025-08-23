import {
  Product,
  Category,
  Brand,
  Filter,
  SortOption,
  ProductDetail,
} from "@domain/catalog";
import { Cart, CartItem, CartSummary } from "@domain/cart";
import {
  CheckoutInProgress,
  ShippingInfo,
  PaymentInfo,
  Order,
  OrderSummary,
  isCheckoutFinalized,
} from "@domain/checkout";
import { Price, Campaign } from "@domain/pricing";
import type {
  CatalogClient,
  CartClient,
  CheckoutClient,
  PricingClient,
  BackendClient,
} from "../types";
import { mockState } from "./state";

export interface MockBackendState {
  products: Product[];
  productDetails: ProductDetail[];
  categories: Category[];
  brands: Brand[];
  carts: Cart[];
  checkouts: CheckoutInProgress[];
  orders: Order[];
  prices: Price[];
  campaigns: Campaign[];
}

export class MockBackendClient implements BackendClient {
  public catalog: CatalogClient;
  public cart: CartClient;
  public checkout: CheckoutClient;
  public pricing: PricingClient;

  private state: MockBackendState;

  constructor(initialState: MockBackendState) {
    this.state = JSON.parse(JSON.stringify(initialState)); // Deep copy

    this.catalog = this.createCatalogClient();
    this.cart = this.createCartClient();
    this.checkout = this.createCheckoutClient();
    this.pricing = this.createPricingClient();
  }

  private createCatalogClient(): CatalogClient {
    return {
      browseProducts: async (
        filters?: Filter[],
        sort?: SortOption
      ): Promise<Product[]> => {
        let products = [...this.state.products];

        // Apply filters
        if (filters && filters.length > 0) {
          for (const filter of filters) {
            if (filter.categoryIds && filter.categoryIds.length > 0) {
              products = products.filter((p) =>
                filter.categoryIds!.includes(p.categoryId)
              );
            }

            if (filter.brandIds && filter.brandIds.length > 0) {
              products = products.filter((p) =>
                filter.brandIds!.includes(p.brandId)
              );
            }

            if (filter.minPrice !== undefined) {
              products = products.filter((p) => {
                // Find price for this product
                const price = this.state.prices.find(
                  (pr) => pr.productId === p.id
                );
                return price ? price.amount >= filter.minPrice! : true;
              });
            }

            if (filter.maxPrice !== undefined) {
              products = products.filter((p) => {
                const price = this.state.prices.find(
                  (pr) => pr.productId === p.id
                );
                return price ? price.amount <= filter.maxPrice! : true;
              });
            }

            if (filter.minRating !== undefined) {
              products = products.filter(
                (p) => (p.rating ?? 0) >= filter.minRating!
              );
            }

            if (filter.tags && filter.tags.length > 0) {
              products = products.filter(
                (p) =>
                  p.tags && filter.tags!.every((tag) => p.tags!.includes(tag))
              );
            }
          }
        }

        // Apply sorting
        if (sort) {
          switch (sort) {
            case "price-asc":
              products.sort((a, b) => {
                const pa =
                  this.state.prices.find((pr) => pr.productId === a.id)
                    ?.amount ?? 0;
                const pb =
                  this.state.prices.find((pr) => pr.productId === b.id)
                    ?.amount ?? 0;
                return pa - pb;
              });
              break;
            case "price-desc":
              products.sort((a, b) => {
                const pa =
                  this.state.prices.find((pr) => pr.productId === a.id)
                    ?.amount ?? 0;
                const pb =
                  this.state.prices.find((pr) => pr.productId === b.id)
                    ?.amount ?? 0;
                return pb - pa;
              });
              break;
            case "featured":
              products.sort(
                (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
              );
              break;
            default:
              // Add more sort options as needed
              break;
          }
        }

        return products;
      },

      getProductById: async (id: string): Promise<Product | undefined> => {
        return this.state.products.find((p) => p.id === id);
      },

      getProductDetailById: async (
        id: string
      ): Promise<ProductDetail | undefined> => {
        return this.state.productDetails.find((p) => p.id === id);
      },

      listCategories: async (): Promise<Category[]> => {
        return this.state.categories;
      },

      listBrands: async (): Promise<Brand[]> => {
        return this.state.brands;
      },
    };
  }

  private createCartClient(): CartClient {
    return {
      getCart: async (cartId: string): Promise<Cart> => {
        const cart = this.state.carts.find((c) => c.id === cartId);
        if (!cart) throw new Error("Cart not found");

        return cart;
      },
      addItem: async (cartId: string, item: CartItem): Promise<Cart> => {
        const cart = this.state.carts.find((c) => c.id === cartId);
        if (!cart) throw new Error("Cart not found");

        const existing = cart.items.find((i) => i.productId === item.productId);
        if (existing) {
          existing.quantity += item.quantity;
        } else {
          cart.items.push({ ...item });
        }

        return cart;
      },
      removeItem: async (cartId: string, itemId: string): Promise<Cart> => {
        const cart = this.state.carts.find((c) => c.id === cartId);
        if (!cart) throw new Error("Cart not found");
        cart.items = cart.items.filter((i) => i.productId !== itemId);
        return cart;
      },
      updateItem: async (cartId: string, item: CartItem): Promise<Cart> => {
        const cart = this.state.carts.find((c) => c.id === cartId);
        if (!cart) throw new Error("Cart not found");

        const idx = cart.items.findIndex((i) => i.productId === item.productId);
        if (idx !== -1) {
          cart.items[idx] = { ...item };
        } else {
          cart.items.push({ ...item });
        }

        return cart;
      },
      getSummary: async (cartId: string): Promise<CartSummary> => {
        const cart = this.state.carts.find((c) => c.id === cartId);
        if (!cart) throw new Error("Cart not found");

        const subtotal = cart.items.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        return {
          itemCount: cart.items.reduce((sum, i) => sum + i.quantity, 0),
          subtotal,
          total: subtotal,
        };
      },
    };
  }

  private createCheckoutClient(): CheckoutClient {
    return {
      // Start a new checkout in progress (shipping/payment optional)
      startCheckout: async (cart: Cart): Promise<CheckoutInProgress> => {
        const checkout: CheckoutInProgress = {
          id: `checkout_${Date.now()}`,
          cartId: cart.id,
        };
        this.state.checkouts.push(checkout);
        return checkout;
      },

      // Set shipping info on a checkout in progress
      setShippingInfo: async (
        checkoutId: string,
        info: ShippingInfo
      ): Promise<CheckoutInProgress> => {
        const checkout = this.state.checkouts.find((c) => c.id === checkoutId);
        if (!checkout) throw new Error("Checkout not found");

        checkout.shipping = info;
        return checkout;
      },

      // Set payment info on a checkout in progress
      setPaymentInfo: async (
        checkoutId: string,
        info: PaymentInfo
      ): Promise<CheckoutInProgress> => {
        const checkout = this.state.checkouts.find((c) => c.id === checkoutId);
        if (!checkout) throw new Error("Checkout not found");

        checkout.payment = info;
        return checkout;
      },

      // Place order: only allowed if both shipping and payment are set
      placeOrder: async (checkoutId: string): Promise<Order> => {
        const checkout = this.state.checkouts.find((c) => c.id === checkoutId);
        if (!checkout) throw new Error("Checkout not found");

        if (!isCheckoutFinalized(checkout)) {
          throw new Error("Cannot place order: The Checkout isn't finalized");
        }

        const order: Order = {
          id: `order_${Date.now()}`,
          items: [],
          shipping: checkout.shipping,
          payment: checkout.payment,
          summary: {} as OrderSummary,
          status: "pending",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        this.state.orders.push(order);
        return order;
      },

      getOrderSummary: async (orderId: string): Promise<OrderSummary> => {
        const order = this.state.orders.find((o) => o.id === orderId);
        if (!order) throw new Error("Order not found");

        return order.summary;
      },
    };
  }

  private createPricingClient(): PricingClient {
    return {
      calculatePrice: async (productId: string): Promise<Price> => {
        const price = this.state.prices.find((p) => p.productId === productId);
        if (!price) throw new Error("Price not found");

        return price;
      },
      listCampaigns: async (): Promise<Campaign[]> => {
        return this.state.campaigns;
      },
    };
  }
}

// Singleton instance initialized with mock state
export const mockBackendClient = new MockBackendClient(mockState);
