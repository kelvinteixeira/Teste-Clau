import type { Order } from "../Types/ordersTypes";

export const ordersData: Order[] = [
  {
    id: "DW983083694-1",
    status: "Production Ready",
    date: "2024-01-15",
    total: 156.8,
    products: [
      {
        id: "1",
        name: "#Item001",
        fragrance:
          "Custom Shape — AI, Full colorFragrance — Vanilla String color — White",
        size: "8oz",
        price: 24.99,
        image: "/images/Frame1.png",
      },
      {
        id: "2",
        name: "#Item002",
        fragrance:
          "Custom Shape — AI, Full colorFragrance — Vanilla String color — White",
        size: "10ml x 3",
        price: 89.99,
        image: "/images/Frame2.png",
      },
      {
        id: "3",
        name: "#Item003",
        fragrance:
          "Custom Shape — AI, Full colorFragrance — Vanilla String color — White",
        size: "150ml",
        price: 41.82,
        image: "/images/Frame3.png",
      },
    ],
    customer: {
      name: "John Smith",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, New York, NY 10001",
    },
    shipping: {
      method: "USPS — First",
      duration: "3 business days",
      estimatedDelivery: "2024-01-20",
    },
    payment: {
      method: "Credit Card",
      last4: "4242",
    },
    breakdown: {
      items: 156.8,
      shipping: 9.99,
      handling: 5.0,
      tax: 12.54,
      total: 184.33,
    },
  },
  {
    id: "DW983083695-2",
    status: "Approved",
    date: "2024-01-14",
    total: 89.99,
    products: [
      {
        id: "4",
        name: "#Item004",
        fragrance:
          "Custom Shape — AI, Full colorFragrance — Vanilla String color — White",
        size: "5pc Set",
        price: 89.99,
        image: "/images/Frame3.png",
      },
    ],
    customer: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      address: "456 Oak Ave, Los Angeles, CA 90210",
    },
    shipping: {
      method: "FedEx — Ground",
      duration: "5 business days",
      estimatedDelivery: "2024-01-22",
    },
    payment: {
      method: "PayPal",
      last4: "7854",
    },
    breakdown: {
      items: 89.99,
      shipping: 12.99,
      handling: 3.0,
      tax: 7.2,
      total: 113.18,
    },
  },
  {
    id: "DW983083695-3",
    status: "Canceled",
    date: "2024-01-14",
    total: 89.99,
    products: [
      {
        id: "4",
        name: "#Item004",
        fragrance:
          "Custom Shape — AI, Full colorFragrance — Vanilla String color — White",
        size: "5pc Set",
        price: 89.99,
        image: "/images/Frame3.png",
      },
    ],
    customer: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      address: "456 Oak Ave, Los Angeles, CA 90210",
    },
    shipping: {
      method: "USPS — First",
      duration: "3 business days",
      estimatedDelivery: "2024-01-22",
    },
    payment: {
      method: "PayPal",
      last4: "7854",
    },
    breakdown: {
      items: 89.99,
      shipping: 12.99,
      handling: 3.0,
      tax: 7.2,
      total: 113.18,
    },
  },
];
