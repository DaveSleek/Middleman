import type { Product, Store } from "@/types";

export const stores: Store[] = [
  {
    id: "store-1",
    name: "Middleman Market Ikeja",
    slug: "middleman-market-ikeja",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    eta: "25-40 mins",
    deliveryFee: 2500,
    minOrder: 5000,
    rating: 4.7,
    categories: ["Groceries", "Fresh Food", "Household"],
    location: "Ikeja, Lagos",
  },
  {
    id: "store-2",
    name: "Naija Fresh Hub",
    slug: "naija-fresh-hub",
    image:
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=1200&auto=format&fit=crop",
    eta: "20-35 mins",
    deliveryFee: 2000,
    minOrder: 4000,
    rating: 4.5,
    categories: ["Fresh Food", "Groceries", "Beverages"],
    location: "Lekki, Lagos",
  },
  {
    id: "store-3",
    name: "Home Needs NG",
    slug: "home-needs-ng",
    image:
      "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1200&auto=format&fit=crop",
    eta: "30-50 mins",
    deliveryFee: 3000,
    minOrder: 6000,
    rating: 4.6,
    categories: ["Household", "Personal Care", "Groceries"],
    location: "Abuja Municipal",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    storeId: "store-1",
    name: "Plantain",
    description: "Fresh ripe plantain bundle",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Fresh Food",
    unit: "bundle",
  },
  {
    id: "p2",
    storeId: "store-1",
    name: "Maggi Cubes",
    description: "Seasoning cubes pack",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Groceries",
    unit: "pack",
  },
  {
    id: "p3",
    storeId: "store-1",
    name: "Onions",
    description: "Fresh onions",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Fresh Food",
    unit: "1 kg",
  },
  {
    id: "p4",
    storeId: "store-1",
    name: "Rice",
    description: "Long grain parboiled rice",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Groceries",
    unit: "5 kg",
  },
  {
    id: "p5",
    storeId: "store-2",
    name: "Chicken",
    description: "Whole frozen chicken",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Fresh Food",
    unit: "1 unit",
  },
  {
    id: "p6",
    storeId: "store-2",
    name: "Sachet Water",
    description: "Pure water bag",
    price: 700,
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Beverages",
    unit: "bag",
  },
  {
    id: "p7",
    storeId: "store-3",
    name: "Bath Soap",
    description: "Multipack bathing soap",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Personal Care",
    unit: "pack",
  },
  {
    id: "p8",
    storeId: "store-3",
    name: "Detergent",
    description: "Laundry detergent",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    category: "Household",
    unit: "1 pack",
  },
];

export const getStoreById = (storeId: string) =>
  stores.find((store) => store.id === storeId);

export const getProductsByStoreId = (storeId: string) =>
  products.filter((product) => product.storeId === storeId);

export const getProductById = (productId: string) =>
  products.find((product) => product.id === productId);

