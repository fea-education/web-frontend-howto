import { describe, it, expect, beforeEach, Mock } from "vitest";
import {
  MockBackendClient,
  MockBackendState,
} from "../src/client/mock/MockBackendClient";
import type { ShippingInfo, PaymentInfo } from "@domain/checkout";

const initialState = {
  products: [
    {
      id: "p1",
      name: "A",
      description: "",
      categoryId: "c1",
      brandId: "b1",
      rating: 4,
      tags: ["t1"],
      isFeatured: true,
    },
    {
      id: "p2",
      name: "B",
      description: "",
      categoryId: "c2",
      brandId: "b2",
      rating: 5,
      tags: ["t2"],
      isFeatured: false,
    },
  ],
  categories: [
    { id: "c1", name: "Cat1", imageUrl: "https://example.com/cat1.jpg" },
    { id: "c2", name: "Cat2", imageUrl: "https://example.com/cat2.jpg" },
  ],
  brands: [
    { id: "b1", name: "Brand1" },
    { id: "b2", name: "Brand2" },
  ],
  carts: [{ id: "cart1", items: [], createdAt: "", updatedAt: "" }],
  checkouts: [],
  orders: [],
  prices: [
    { id: "pr1", productId: "p1", amount: 10, currency: "USD" },
    { id: "pr2", productId: "p2", amount: 20, currency: "USD" },
  ],
  campaigns: [{ id: "camp1", name: "Campaign1", active: true }],
} as const satisfies MockBackendState;

describe("MockBackendClient", () => {
  let client: MockBackendClient;
  beforeEach(() => {
    client = new MockBackendClient(initialState);
  });

  describe("catalog", () => {
    it("filters by category", async () => {
      const result = await client.catalog.browseProducts([
        { categoryIds: ["c1"] },
      ]);
      expect(result.length).toBe(1);
      expect(result[0].id).toBe("p1");
    });

    it("sorts by price-desc", async () => {
      const result = await client.catalog.browseProducts([], "price-desc");
      expect(result[0].id).toBe("p2");
    });

    it("gets product by id", async () => {
      const prod = await client.catalog.getProductById("p2");
      expect(prod?.name).toBe("B");
    });

    it("lists categories and brands", async () => {
      const cats = await client.catalog.listCategories();
      const brands = await client.catalog.listBrands();
      expect(cats.length).toBe(2);
      expect(brands.length).toBe(2);
    });
  });

  describe("cart", () => {
    it("adds, updates, removes items and gets summary", async () => {
      await client.cart.addItem("cart1", {
        productId: "p1",
        quantity: 2,
        price: 10,
        name: "A",
      });

      let cart = await client.cart.getCart("cart1");
      expect(cart.items.length).toBe(1);

      await client.cart.updateItem("cart1", {
        productId: "p1",
        quantity: 3,
        price: 10,
        name: "A",
      });
      cart = await client.cart.getCart("cart1");
      expect(cart.items[0].quantity).toBe(3);

      await client.cart.removeItem("cart1", "p1");
      cart = await client.cart.getCart("cart1");
      expect(cart.items.length).toBe(0);

      await client.cart.addItem("cart1", {
        productId: "p2",
        quantity: 1,
        price: 20,
        name: "B",
      });
      const summary = await client.cart.getSummary("cart1");
      expect(summary.total).toBe(20);
    });
  });

  describe("checkout", () => {
    it("enforces in-progress and final checkout distinction", async () => {
      await client.cart.addItem("cart1", {
        productId: "p1",
        quantity: 1,
        price: 10,
        name: "A",
      });

      const cart = await client.cart.getCart("cart1");
      const checkout = await client.checkout.startCheckout(cart);
      expect(checkout.cartId).toBe("cart1");
      expect(checkout.shipping).toBeUndefined();
      expect(checkout.payment).toBeUndefined();

      // Should not be able to place order yet
      await expect(client.checkout.placeOrder(checkout.id)).rejects.toThrow();

      // Set only shipping
      const shipping: ShippingInfo = {
        firstName: "John",
        lastName: "Doe",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      };
      const withShipping = await client.checkout.setShippingInfo(
        checkout.id,
        shipping
      );
      expect(withShipping.shipping).toEqual(shipping);
      expect(withShipping.payment).toBeUndefined();
      await expect(client.checkout.placeOrder(checkout.id)).rejects.toThrow();

      // Set only payment
      const payment: PaymentInfo = { method: "card" };
      const withPayment = await client.checkout.setPaymentInfo(
        checkout.id,
        payment
      );
      expect(withPayment.payment).toEqual(payment);
      // Now both shipping and payment are set
      expect(withPayment.shipping).toEqual(shipping);

      // Now placing order should succeed
      const order = await client.checkout.placeOrder(checkout.id);
      expect(order.shipping.firstName).toBe("John");

      const summary = await client.checkout.getOrderSummary(order.id);
      expect(summary).toBeDefined();
    });
  });

  describe("pricing", () => {
    it("calculates price and lists campaigns", async () => {
      const price = await client.pricing.calculatePrice("p1");
      expect(price.amount).toBe(10);

      const campaigns = await client.pricing.listCampaigns();
      expect(campaigns.length).toBe(1);
    });
  });
});
