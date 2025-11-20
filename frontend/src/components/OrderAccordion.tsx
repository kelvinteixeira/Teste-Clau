import React from "react";
import { FaChevronDown } from "react-icons/fa";
import OrderDetails from "./OrderDetails";
import type { Order, OrderItem, Product } from "../Types/ordersTypes";
import { formatCurrency, formatDate, formatStatus } from "../utils/formatters";

interface OrderAccordionProps {
  order: Order;
  expanded: boolean;
  onToggle: (id: string) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "production_ready":
      return 'bg-[#4CAF5020] text-[#4CAF50] before:content-["●"] before:mr-1 before:text-[#4CAF50]';
    case "approved":
      return 'bg-[#2196F320] text-[#2196F3] before:content-["●"] before:mr-1 before:text-[#2196F3]';
    case "canceled":
      return 'bg-[#F4433620] text-[#F44336] before:content-["●"] before:mr-1 before:text-[#F44336]';
    default:
      return 'bg-gray-200 text-gray-700 before:content-["●"] before:mr-1';
  }
};

const OrderAccordion: React.FC<OrderAccordionProps> = ({ order, expanded, onToggle }) => {
  // Helper functions to handle both data structures
  const getOrderItems = (): (OrderItem | Product)[] => order.items || order.products || [];
  const getOrderTotal = () =>
    typeof order.total === "string" ? parseFloat(order.total) : order.total;
  const hasImages = () => order.products && order.products.length > 0 && order.products[0].image;
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm mb-3 transition-all duration-300 bg-white w-full">
      <div
        className="p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => onToggle(order.id.toString())}
      >
        <div className="sm:hidden flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1 flex-1">
            <span
              className={`inline-flex items-center w-fit rounded-full px-2 py-0.5 text-[0.75rem] font-medium ${getStatusColor(
                order.status
              )}`}
            >
              {formatStatus(order.status)}
            </span>
            <h3 className="text-gray-500 text-sm font-medium">{order.id}</h3>
            <span className="text-lg font-semibold ">{formatDate(order.date)}</span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <FaChevronDown
              className={`text-gray-400 text-lg transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
            <span className="text-gray-500 text-xs">Total Price</span>
            <p className="font-semibold text-gray-900 text-base">
              {formatCurrency(getOrderTotal())}
            </p>
          </div>
        </div>

        <div className="sm:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-">
              {getOrderItems()
                .slice(0, 3)
                .map((item: OrderItem | Product, index: number) =>
                  hasImages() && "image" in item && item.image ? (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      className="w-8 h-8 rounded-2xl border-2 border-white object-cover"
                      style={{ zIndex: 3 - index }}
                    />
                  ) : (
                    <div
                      key={item.id}
                      className="w-8 h-8 bg-gray-200 rounded-2xl border-2 border-white flex items-center justify-center text-xs font-medium"
                      style={{ zIndex: 3 - index }}
                    >
                      {item.name.charAt(0)}
                    </div>
                  )
                )}
              <span className="text-gray-500 text-sm  flex items-center">
                +{getOrderItems().length}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-3 sm:items-center gap-3 sm:gap-0">
          <div className="flex flex-col gap-1">
            <span
              className={`inline-flex items-center w-fit rounded-full px-2 py-0.5 text-[0.75rem] font-medium ${getStatusColor(
                order.status
              )}`}
            >
              {formatStatus(order.status)}
            </span>
            <h3 className="text-gray-800 text-sm font-medium">{order.id}</h3>
            <span className="text-gray-500 text-xs">{formatDate(order.date)}</span>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:text-center sm:justify-center">
            <span className="text-gray-500 text-xs sm:text-sm">Total Price</span>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {formatCurrency(getOrderTotal())}
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <h3 className="text-gray-500">+{getOrderItems().length}</h3>
            <div className="flex items-center align-middle -space-x-2">
              {getOrderItems()
                .slice(0, 3)
                .map((item: OrderItem | Product, index: number) =>
                  hasImages() && "image" in item && item.image ? (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      className=" p-1.5 rounded-2xl border-2 border-white object-cover"
                      style={{ zIndex: 3 - index }}
                    />
                  ) : (
                    <div
                      key={item.id}
                      className="w-10 h-10 bg-gray-200 rounded-2xl border-2 border-white flex items-center justify-center text-sm font-medium"
                      style={{ zIndex: 3 - index }}
                    >
                      {item.name.charAt(0)}
                    </div>
                  )
                )}
            </div>
            <FaChevronDown
              className={`text-gray-400 text-sm transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {expanded && <OrderDetails order={order} />}
    </div>
  );
};

export default OrderAccordion;
