import React, { useState, useEffect, useCallback } from "react";
import OrderAccordion from "../components/OrderAccordion";
import type { Order } from "../Types/ordersTypes";

const MyOrders: React.FC = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [useMockData, setUseMockData] = useState<boolean>(false);

  const filters = ["All orders", "Production Ready", "Approved", "Canceled"];

  const toggleOrder = (id: string) => {
    setExpandedOrder((prev) => (prev === id ? null : id));
  };

  // 🧠 Busca os pedidos do backend Django ou mock data
  const fetchOrders = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      if (useMockData) {
        // Import and use mock data
        const { ordersData } = await import("../data/ordersMock");
        let filteredOrders = ordersData;

        if (activeFilter !== "All orders") {
          filteredOrders = ordersData.filter((order) => {
            const normalizedOrderStatus = order.status.toLowerCase().replace(" ", "_");
            const normalizedFilter = activeFilter.toLowerCase().replace(" ", "_");
            return normalizedOrderStatus === normalizedFilter;
          });
        }

        setOrders(filteredOrders);
      } else {
        // Fetch from Django API
        const baseUrl = "http://127.0.0.1:8000/api/orders/";
        const query =
          activeFilter !== "All orders"
            ? `?status=${encodeURIComponent(activeFilter.toLowerCase().replace(" ", "_"))}`
            : "";

        const response = await fetch(baseUrl + query);
        if (!response.ok) throw new Error("Erro ao buscar pedidos");

        const data: unknown = await response.json();
        const results = (data as { results?: Order[] }).results || (data as Order[]);
        setOrders(results);
      }
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [activeFilter, useMockData]); // ✅ dependência estável

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]); // ✅ eslint feliz

  return (
    <div className="bg-white font-sans text-sm text-gray-800 w-full px-4 lg:pr-36 pt-10">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">My Orders</h1>
          <button
            onClick={() => setUseMockData(!useMockData)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              useMockData
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-blue-100 text-blue-700 border border-blue-300"
            }`}
          >
            {useMockData ? "Using Mock Data" : "Using API Data"}
          </button>
        </div>

        {/* FILTROS */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === filter
                    ? "bg-[#2463EB20] font-bold border-2 border-[#2463EB] text-[#2463EB]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-4 w-6 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* LISTA DE ORDERS */}
      <div className="space-y-6">
        {loading && <p className="text-gray-500">Carregando pedidos...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
        {!loading && orders.length === 0 && (
          <p className="text-gray-500">Nenhum pedido encontrado.</p>
        )}
        {!loading &&
          orders.map((order) => (
            <OrderAccordion
              key={order.id.toString()}
              order={order}
              expanded={expandedOrder === order.id.toString()}
              onToggle={toggleOrder}
            />
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
