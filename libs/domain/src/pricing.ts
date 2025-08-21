// Pricing Context Models

export interface Price {
  id: string;
  productId: string;
  amount: number;
  currency: string;
  validFrom?: string;
  validTo?: string;
  campaignId?: string;
  isOnSale?: boolean;
  saleAmount?: number;
  priceType?: "regular" | "sale" | "campaign" | "voucher";
}

export interface Discount {
  id: string;
  type: "percentage" | "fixed" | "voucher" | "campaign";
  value: number;
  description?: string;
  validFrom?: string;
  validTo?: string;
  campaignId?: string;
  voucherCode?: string;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  discount: Discount;
  active: boolean;
  validFrom?: string;
  validTo?: string;
}

export interface Voucher {
  code: string;
  discount: Discount;
  validFrom?: string;
  validTo?: string;
  usageLimit?: number;
  usedCount?: number;
}
