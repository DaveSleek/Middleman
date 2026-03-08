import Link from "next/link";
import type { Store } from "@/types";
import { formatNaira } from "@/lib/utils";

export default function StoreCard({ store }: { store: Store }) {
  return (
    <Link
      href={`/stores/${store.id}`}
      className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={store.image}
        alt={store.name}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{store.name}</h3>
          <span className="rounded-full bg-green-50 px-2 py-1 text-sm text-green-700">
            ⭐ {store.rating}
          </span>
        </div>

        <p className="text-sm text-gray-600">{store.location}</p>

        <div className="flex flex-wrap gap-2 text-xs">
          {store.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-gray-100 px-2 py-1 text-gray-700"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 text-sm text-gray-700">
          <span>{store.eta}</span>
          <span>{formatNaira(store.deliveryFee)} delivery</span>
        </div>
      </div>
    </Link>
  );
}

