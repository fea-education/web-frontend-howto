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

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  validFrom?: string;
  validTo?: string;
}
