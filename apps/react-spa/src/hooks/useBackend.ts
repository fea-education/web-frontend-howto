import { useQuery } from "@tanstack/react-query";
import { mockBackendClient } from "../../../backend/src/client/mock/MockBackendClient";
import type { Filter, SortOption } from "@domain/catalog";

// Catalog hooks
export function useProducts(filters?: Filter[], sort?: SortOption) {
  return useQuery({
    queryKey: ["products", filters, sort],
    queryFn: () => mockBackendClient.catalog.browseProducts(filters, sort),
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => mockBackendClient.catalog.getProductById(id),
    enabled: !!id,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => mockBackendClient.catalog.listCategories(),
  });
}

export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => mockBackendClient.catalog.listBrands(),
  });
}

// Featured products - using filters to get featured products
export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const products = await mockBackendClient.catalog.browseProducts();
      return products.filter((product: any) => product.isFeatured);
    },
  });
}

// Cart hooks
export function useCart(cartId: string) {
  return useQuery({
    queryKey: ["cart", cartId],
    queryFn: () => mockBackendClient.cart.getCart(cartId),
    enabled: !!cartId,
  });
}

export function useCartSummary(cartId: string) {
  return useQuery({
    queryKey: ["cart-summary", cartId],
    queryFn: () => mockBackendClient.cart.getSummary(cartId),
    enabled: !!cartId,
  });
}

// Pricing hooks
export function useProductPrice(productId: string) {
  return useQuery({
    queryKey: ["price", productId],
    queryFn: () => mockBackendClient.pricing.calculatePrice(productId),
    enabled: !!productId,
  });
}

export function useCampaigns() {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: () => mockBackendClient.pricing.listCampaigns(),
  });
}

// Combined hook for products with their prices
export function useProductsWithPrices(filters?: Filter[], sort?: SortOption) {
  const { data: products, ...productsQuery } = useProducts(filters, sort);

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
