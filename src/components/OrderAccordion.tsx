import React from "react";
import { FaChevronDown } from "react-icons/fa";
import OrderDetails from "./OrderDetails";
import type { Order } from "../Types/ordersTypes";
import { formatCurrency, formatDate } from "../utils/formatters";

interface OrderAccordionProps {
  order: Order;
  expanded: boolean;
  onToggle: (id: string) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Production Ready":
      return 'bg-[#4CAF5020] text-[#4CAF50] before:content-["●"] before:mr-1 before:text-[#4CAF50]';
    case "Approved":
      return 'bg-[#2196F320] text-[#2196F3] before:content-["●"] before:mr-1 before:text-[#2196F3]';
    case "Canceled":
      return 'bg-[#F4433620] text-[#F44336] before:content-["●"] before:mr-1 before:text-[#F44336]';
    default:
      return 'bg-gray-200 text-gray-700 before:content-["●"] before:mr-1';
  }
};

const OrderAccordion: React.FC<OrderAccordionProps> = ({
  order,
  expanded,
  onToggle,
}) => {
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm mb-3 transition-all duration-300 bg-white w-full">
      <div
        className="p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => onToggle(order.id)}
      >
        <div className="sm:hidden flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1 flex-1">
            <span
              className={`inline-flex items-center w-fit rounded-full px-2 py-0.5 text-[0.75rem] font-medium ${getStatusColor(
                order.status
              )}`}
            >
              {order.status}
            </span>
            <h3 className="text-gray-500 text-sm font-medium">{order.id}</h3>
            <span className="text-lg font-semibold ">
              {formatDate(order.date)}
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <FaChevronDown
              className={`text-gray-400 text-lg transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
            <span className="text-gray-500 text-xs">Total Price</span>
            <p className="font-semibold text-gray-900 text-base">
              {formatCurrency(order.total)}
            </p>
          </div>
        </div>

        <div className="sm:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-">
              {order.products.slice(0, 3).map((product, index) => (
                <img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  className="rounded-2xl border-2 border-white object-cover pr-1"
                  style={{ zIndex: 3 - index }}
                />
              ))}
              <span className="text-gray-500 text-sm  flex items-center">
                +{order.products.length}
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
              {order.status}
            </span>
            <h3 className="text-gray-800 text-sm font-medium">{order.id}</h3>
            <span className="text-gray-500 text-xs">
              {formatDate(order.date)}
            </span>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:text-center sm:justify-center">
            <span className="text-gray-500 text-xs sm:text-sm">
              Total Price
            </span>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {formatCurrency(order.total)}
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <h3 className="text-gray-500">+{order.products.length}</h3>
            <div className="flex items-center align-middle -space-x-2">
              {order.products.slice(0, 3).map((product, index) => (
                <img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  className=" rounded-2xl border-2 border-white object-cover"
                  style={{ zIndex: 3 - index }}
                />
              ))}
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