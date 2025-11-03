import React, { useState, useEffect, useCallback } from "react";
import OrderAccordion from "../components/OrderAccordion";
import type { Order } from "../Types/ordersTypes";

const MyOrders: React.FC = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const filters = ["All orders", "Canceled", "Approved", "Production Ready"];

  const toggleOrder = (id: string) => {
    setExpandedOrder((prev) => (prev === id ? null : id));
  };

  // 🧠 Busca os pedidos no backend Django
  const fetchOrders = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const baseUrl = "http://127.0.0.1:8000/orders/";
      const query =
        activeFilter !== "All orders"
          ? `?status=${encodeURIComponent(
              activeFilter.toLowerCase().replace(" ", "_")
            )}`
          : "";

      const response = await fetch(baseUrl + query);
      if (!response.ok) throw new Error("Erro ao buscar pedidos");

      const data: unknown = await response.json();
      const results = (data as { results?: Order[] }).results || (data as Order[]);
      setOrders(results);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [activeFilter]); // ✅ dependência estável

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]); // ✅ eslint feliz


  return (
    <div className="bg-white font-sans text-sm text-gray-800 w-full px-4 lg:pr-36 pt-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

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
              key={order.id}
              order={order}
              expanded={expandedOrder === order.id}
              onToggle={toggleOrder}
            />
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
