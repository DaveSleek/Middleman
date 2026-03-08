import Link from "next/link";
import { stores } from "@/data/mock-data";
import StoreCard from "@/components/StoreCard";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-100">
            Grocery delivery for Nigeria
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Order foodstuff, groceries, and household essentials with Middleman
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-green-50">
            Plantain, Maggi, onions, water, soap, rice, chicken and daily home
            needs delivered fast.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/stores"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700"
            >
              Start shopping
            </Link>
            <Link
              href="/cart"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white"
            >
              View cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular stores</h2>
          <Link href="/stores" className="font-medium text-green-700">
            See all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>
    </main>
  );
}

