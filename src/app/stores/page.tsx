import { stores } from "@/data/mock-data";
import StoreCard from "@/components/StoreCard";

export default function StoresPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Stores</h1>
        <p className="mt-2 text-gray-600">
          Browse markets and household essentials near you.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </main>
  );
}

