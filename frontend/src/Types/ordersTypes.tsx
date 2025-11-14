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

export type OrderStatus = "production_ready" | "approved" | "canceled";

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: string;
}

// Unified Order interface that supports both mock and API data
export interface Order {
  // Common fields (both sources)
  id: string | number;
  status: OrderStatus;
  date: string;
  total: string | number;

  // Django API fields
  order_id?: string;
  items?: OrderItem[];

  // Mock data fields
  products?: Product[];
  customer?: Customer;
  shipping?: Shipping;
  payment?: Payment;
  breakdown?: Breakdown;
}
