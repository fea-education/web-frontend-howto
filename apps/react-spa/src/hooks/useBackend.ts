import { useQuery } from "@tanstack/react-query";
import { mockBackendClient } from "../../../backend/src/client/mock/MockBackendClient";
import type { Filter, SortOption } from "@domain/catalog";

// Catalog hooks
export function useBrowseProducts(filters?: Filter[], sort?: SortOption) {
  return useQuery({
    queryKey: ["products", filters, sort],
    queryFn: () => mockBackendClient.catalog.browseProducts(filters, sort),
  });
}

export function useGetProductById(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => mockBackendClient.catalog.getProductById(id),
    enabled: !!id,
  });
}

export function useListCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => mockBackendClient.catalog.listCategories(),
  });
}

export function useListBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => mockBackendClient.catalog.listBrands(),
  });
}

// Featured products - using filters to get featured products
export function useBrowseFeaturedProducts() {
  // Use the backend's filtering capability instead of client-side filtering
  return useBrowseProducts([], "featured");
}

// Cart hooks
export function useGetCart(cartId: string) {
  return useQuery({
    queryKey: ["cart", cartId],
    queryFn: () => mockBackendClient.cart.getCart(cartId),
    enabled: !!cartId,
  });
}

export function useGetCartSummary(cartId: string) {
  return useQuery({
    queryKey: ["cart-summary", cartId],
    queryFn: () => mockBackendClient.cart.getSummary(cartId),
    enabled: !!cartId,
  });
}

// Pricing hooks
export function useCalculatePrice(productId: string) {
  return useQuery({
    queryKey: ["price", productId],
    queryFn: () => mockBackendClient.pricing.calculatePrice(productId),
    enabled: !!productId,
  });
}

export function useCalculateAllPrices(productIds: string[]) {
  return useQuery({
    queryKey: ["prices", productIds],
    queryFn: async () => {
      // Calculate prices for the specified products
      const prices = await Promise.all(
        productIds.map(async (productId) => {
          try {
            return await mockBackendClient.pricing.calculatePrice(productId);
          } catch {
            return null;
          }
        })
      );
      return prices.filter(Boolean);
    },
    enabled: productIds.length > 0,
  });
}

export function useListCampaigns() {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: () => mockBackendClient.pricing.listCampaigns(),
  });
}

// Combined hook for products with their prices
export function useBrowseProductsWithPrices(
  filters?: Filter[],
  sort?: SortOption
) {
  const { data: products, ...productsQuery } = useBrowseProducts(filters, sort);

  return useQuery({
    queryKey: ["products-with-prices", filters, sort],
    queryFn: async () => {
      if (!products) return [];

      const productsWithPrices = await Promise.all(
        products.map(async (product: any) => {
          try {
            const price = await mockBackendClient.pricing.calculatePrice(
              product.id
            );
            return { ...product, price };
          } catch {
            return { ...product, price: null };
          }
        })
      );

      return productsWithPrices;
    },
    enabled: !!products,
    ...productsQuery,
  });
}
