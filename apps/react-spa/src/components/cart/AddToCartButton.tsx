import { useState } from "react";
import { useCalculatePrice, useAddToCart } from "../../hooks/useBackend";
import type { CartItem } from "@domain/cart";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  productImageUrl?: string;
  variant?: string;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  cartId?: string; // If not provided, will use "demo-cart"
}

export default function AddToCartButton({
  productId,
  productName,
  productImageUrl,
  variant,
  quantity = 1,
  className = "",
  children,
  disabled = false,
  size = "md",
  fullWidth = false,
  cartId = "demo-cart",
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { data: priceData } = useCalculatePrice(productId);
  const addToCartMutation = useAddToCart();

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (disabled || isAdding || !priceData) return;

    setIsAdding(true);

    try {
      // Ensure cart exists by accessing the mock state directly
      const mockClient = (
        await import("../../../../backend/src/client/mock/MockBackendClient")
      ).mockBackendClient;
      const state = (mockClient as any).state;

      // Check if cart exists, if not create it
      let cart = state.carts.find((c: any) => c.id === cartId);
      if (!cart) {
        cart = {
          id: cartId,
          items: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.carts.push(cart);
      }

      const cartItem: CartItem = {
        productId,
        quantity,
        price: priceData.amount,
        name: productName,
        imageUrl: productImageUrl,
        variant,
      };

      await addToCartMutation.mutateAsync({ cartId, item: cartItem });
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "btn-sm";
      case "lg":
        return "btn-lg";
      default:
        return "";
    }
  };

  const buttonClasses = [
    "btn",
    "btn-primary",
    getSizeClass(),
    fullWidth ? "btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled =
    disabled || isAdding || !priceData || addToCartMutation.isPending;

  return (
    <button
      className={buttonClasses}
      onClick={handleAddToCart}
      disabled={isDisabled}
    >
      {isAdding || addToCartMutation.isPending ? (
        <>Adding...</>
      ) : (
        children || "Add to Cart"
      )}
    </button>
  );
}
