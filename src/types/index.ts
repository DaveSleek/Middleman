export type Category =
  | "Groceries"
  | "Fresh Food"
  | "Household"
  | "Beverages"
  | "Personal Care";

export type Store = {
  id: string;
  name: string;
  slug: string;
  image: string;
  eta: string;
  deliveryFee: number;
  minOrder: number;
  rating: number;
  categories: Category[];
  location: string;
};

export type Product = {
  id: string;
  storeId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
  category: Category;
  unit?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Address = {
  fullName: string;
  phone: string;
  street: string;
  area: string;
  city: string;
  note?: string;
};

export type OrderStatus =
  | "pending"
  | "accepted"
  | "shopping"
  | "out_for_delivery"
  | "delivered";

export type Order = {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  address: Address;
  paymentMethod: "card" | "bank_transfer" | "pay_on_delivery";
  status: OrderStatus;
};

