import { notFound } from "next/navigation";
import { getProductsByStoreId, getStoreById } from "@/data/mock-data";
import ProductCard from "@/components/ProductCard";
import { formatNaira } from "@/lib/utils";

export default function StoreDetailPage({
  params,
}: {
  params: { storeId: string };
}) {
  const { storeId } = params;
  const store = getStoreById(storeId);

  if (!store) return notFound();

  const storeProducts = getProductsByStoreId(storeId);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <img
          src={store.image}
          alt={store.name}
          className="h-72 w-full object-cover"
        />
        <div className="space-y-3 p-6">
          <h1 className="text-3xl font-bold">{store.name}</h1>
          <p className="text-gray-600">{store.location}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <span>⭐ {store.rating}</span>
            <span>{store.eta}</span>
            <span>{formatNaira(store.deliveryFee)} delivery</span>
            <span>Min order {formatNaira(store.minOrder)}</span>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">Products</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {storeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

