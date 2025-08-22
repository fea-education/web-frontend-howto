// Catalog Context Models

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  categoryId: string;
  brandId: string;
  tags?: string[];
  rating?: number;
  reviewCount?: number;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  parentId?: string;
}

export interface Brand {
  id: string;
  name: string;
  description?: string;
}

export interface Filter {
  categoryIds?: string[];
  brandIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  tags?: string[];
}

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "newest"
  | "best-selling";
