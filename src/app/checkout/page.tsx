"use client";

import { useMemo, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { formatNaira } from "@/lib/utils";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = useCartStore((state) => state.subtotal());

  const [placed, setPlaced] = useState(false);

  const deliveryFee = items.length ? 2500 : 0;
  const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-green-700">
            Order placed successfully
          </h1>
          <p className="mt-4 text-gray-600">
            A Middleman shopper will get the alert, shop your items, and deliver
            them to your address.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <form
          onSubmit={handlePlaceOrder}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xl font-semibold">Delivery details</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border p-3"
              placeholder="Full name"
              required
            />
            <input
              className="rounded-xl border p-3"
              placeholder="Phone number"
              required
            />
            <input
              className="rounded-xl border p-3 md:col-span-2"
              placeholder="Street address"
              required
            />
            <input
              className="rounded-xl border p-3"
              placeholder="Area / Landmark"
              required
            />
            <input
              className="rounded-xl border p-3"
              placeholder="City"
              defaultValue="Lagos"
              required
            />
            <textarea
              className="rounded-xl border p-3 md:col-span-2"
              placeholder="Order note e.g. green plantain, medium onions, allow substitutions"
              rows={4}
            />
          </div>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Payment method</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3 rounded-xl border p-4">
              <input type="radio" name="payment" defaultChecked />
              <span>Pay on delivery</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border p-4">
              <input type="radio" name="payment" />
              <span>Bank transfer</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border p-4">
              <input type="radio" name="payment" />
              <span>Card payment</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-green-700 px-4 py-4 font-semibold text-white hover:bg-green-800"
            disabled={items.length === 0}
          >
            Place order
          </button>
        </form>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Your order</h2>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between gap-4 text-sm"
              >
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>{formatNaira(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t pt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{formatNaira(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span>{formatNaira(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

