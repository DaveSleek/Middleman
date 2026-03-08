"use client";

import type { Product } from "@/types";
import { formatNaira } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="text-sm text-gray-500">{product.unit}</span>
        </div>

        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-lg font-bold">{formatNaira(product.price)}</p>

        <button
          onClick={() => addItem(product)}
          className="w-full rounded-xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

