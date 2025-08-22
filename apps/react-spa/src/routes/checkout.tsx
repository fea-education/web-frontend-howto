import { createFileRoute } from "@tanstack/react-router";
import CartItems from "@/components/cart/CartItems";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 400px", gap: "3rem" }}
        >
          <div>
            <h1 className="text-3xl font-weight-600 mb-8">Checkout</h1>
            <CartItems />
            <ShippingForm />
            <PaymentForm />
          </div>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}
