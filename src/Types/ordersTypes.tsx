export interface Product {
  id: string;
  name: string;
  fragrance: string;
  size: string;
  price: number;
  image: string;
}

export interface Customer {
  name: string;
  phone: string;
  address: string;
}

export interface Shipping {
  method: string;
  duration: string;
  estimatedDelivery: string;
}

export interface Payment {
  method: string;
  last4: string;
}

export interface Breakdown {
  items: number;
  shipping: number;
  handling: number;
  tax: number;
  total: number;
}

export interface Order {
  id: string;
  status: "Production Ready" | "Approved" | "Canceled";
  date: string;
  total: number;
  products: Product[];
  customer: Customer;
  shipping: Shipping;
  payment: Payment;
  breakdown: Breakdown;
}
