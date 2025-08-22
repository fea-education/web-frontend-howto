import { useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback, useMemo } from "react";
import type { Filter, SortOption } from "@domain/catalog";
import { useBrowseProducts } from "./useBackend";

export interface ProductFilterState {
  categoryIds?: string[];
  brandIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: SortOption;
}

export function useProductFilters() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/browse" }) as ProductFilterState;

  // Convert URL search params to Filter array for the backend
  const filters = useMemo((): Filter[] => {
    const filterArray: Filter[] = [];

    if (
      search.categoryIds?.length ||
      search.brandIds?.length ||
      search.minPrice !== undefined ||
      search.maxPrice !== undefined ||
      search.minRating !== undefined
    ) {
      filterArray.push({
        categoryIds: search.categoryIds,
        brandIds: search.brandIds,
        minPrice: search.minPrice,
        maxPrice: search.maxPrice,
        minRating: search.minRating,
      });
    }

    return filterArray;
  }, [search]);

  // Get products with current filters
  const productsQuery = useBrowseProducts(filters, search.sort);

  // Update filters in URL
  const updateFilters = useCallback(
    (newFilters: Partial<ProductFilterState>) => {
      navigate({
        to: "/browse",
        search: (prev) => ({
          categoryIds: prev.categoryIds,
          brandIds: prev.brandIds,
          minPrice: prev.minPrice,
          maxPrice: prev.maxPrice,
          minRating: prev.minRating,
          sort: prev.sort,
          ...newFilters,
        }),
      });
    },
    [navigate]
  );

  // Set specific filter
  const setCategory = useCallback(
    (categoryId: string | undefined) => {
      updateFilters({
        categoryIds: categoryId ? [categoryId] : undefined,
      });
    },
    [updateFilters]
  );

  const setBrands = useCallback(
    (brandIds: string[]) => {
      updateFilters({
        brandIds: brandIds.length > 0 ? brandIds : undefined,
      });
    },
    [updateFilters]
  );

  const setPriceRange = useCallback(
    (minPrice?: number, maxPrice?: number) => {
      updateFilters({ minPrice, maxPrice });
    },
    [updateFilters]
  );

  const setMinRating = useCallback(
    (minRating?: number) => {
      updateFilters({ minRating });
    },
    [updateFilters]
  );

  const setSort = useCallback(
    (sort?: SortOption) => {
      updateFilters({ sort });
    },
    [updateFilters]
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    navigate({
      to: "/browse",
      search: {
        categoryIds: undefined,
        brandIds: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        minRating: undefined,
        sort: undefined,
      },
    });
  }, [navigate]);

  return {
    // Current state
    filters: search,
    products: productsQuery.data,
    isLoading: productsQuery.isLoading,
    error: productsQuery.error,

    // Actions
    setCategory,
    setBrands,
    setPriceRange,
    setMinRating,
    setSort,
    clearFilters,
    updateFilters,
  };
}
