"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

export default function Navbar() {
  const itemCount = useCartStore((state) => state.itemCount());

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Middleman
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/stores" className="hover:text-green-700">
            Stores
          </Link>
          <Link
            href="/cart"
            className="rounded-full bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

