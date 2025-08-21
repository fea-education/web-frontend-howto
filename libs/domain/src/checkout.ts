// Checkout Context Models

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export type PaymentMethod = "card" | "paypal" | "apple";

export interface PaymentInfo {
  method: PaymentMethod;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  cardholderName?: string;
  paypalEmail?: string;
  appleId?: string;
  billingSameAsShipping?: boolean;
}

export interface Checkout {
  cartId: string;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  promoCode?: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  discounts?: number;
}

export interface Order {
  id: string;
  userId?: string;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
    imageUrl?: string;
    variant?: string;
  }>;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  summary: OrderSummary;
  status:
    | "pending"
    | "paid"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded";
  createdAt: string;
  updatedAt: string;
}
