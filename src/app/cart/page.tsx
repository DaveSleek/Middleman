"use client";

import Link from "next/link";
import CartSummary from "@/components/CartSummary";
import { formatNaira } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
          <p className="mb-4 text-lg">Your cart is empty.</p>
          <Link
            href="/stores"
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white"
          >
            Browse stores
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-2xl border bg-white p-4 shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.product.description}
                  </p>
                  <p className="mt-2 font-bold">
                    {formatNaira(item.product.price)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.product.id)}
                      className="h-9 w-9 rounded-lg border"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.product.id)}
                      className="h-9 w-9 rounded-lg border"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-sm text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <CartSummary />
        </div>
      )}
    </main>
  );
}

