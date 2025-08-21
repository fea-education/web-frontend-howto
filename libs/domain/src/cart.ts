// Cart Context Models

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  imageUrl?: string;
  variant?: string;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  discounts?: number;
  shipping?: number;
  tax?: number;
  total: number;
}
