import React, { useState } from "react";
import OrderAccordion from "../components/OrderAccordion";
import { ordersData } from "../data/ordersMock";

const MyOrders: React.FC = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All orders");

  const filters = ["All orders", "Canceled", "Approved", "Production Ready"];

  const toggleOrder = (id: string) => {
    setExpandedOrder((prev) => (prev === id ? null : id));
  };

  const filteredOrders =
    activeFilter === "All orders"
      ? ordersData
      : ordersData.filter((order) => order.status === activeFilter);

  return (
    <div className="bg-white  font-sans text-sm text-gray-800 w-full px-4 lg:pr-36  pt-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

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

      <div className="space-y-6">
        {filteredOrders.map((order) => (
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
