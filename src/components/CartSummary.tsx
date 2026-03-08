"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { formatNaira } from "@/lib/utils";

export default function CartSummary() {
  const subtotal = useCartStore((state) => state.subtotal());
  const deliveryFee = subtotal > 0 ? 2500 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatNaira(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span>{formatNaira(deliveryFee)}</span>
        </div>
        <div className="flex justify-between border-t pt-3 text-base font-semibold">
          <span>Total</span>
          <span>{formatNaira(total)}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-5 block rounded-xl bg-green-700 px-4 py-3 text-center font-semibold text-white hover:bg-green-800"
      >
        Proceed to checkout
      </Link>
    </div>
  );
}

