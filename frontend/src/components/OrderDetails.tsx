import React from "react";
import type { Order, OrderItem, Product } from "../Types/ordersTypes";
import { formatCurrency, formatDate, formatStatus } from "../utils/formatters";
import { FaFileDownload } from "react-icons/fa";
interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  // Helper functions to handle both data structures
  const getOrderItems = (): (OrderItem | Product)[] => order.items || order.products || [];
  const getOrderTotal = () =>
    typeof order.total === "string" ? parseFloat(order.total) : order.total;
  const hasFullOrderData = () =>
    order.customer && order.shipping && order.payment && order.breakdown;
  return (
    <div className="border-t border-gray-100 p-6 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-gray-400 mb-4 flex items-center gap-2 bg-gray-50 border-gray-50 border-b p-2 rounded-full">
            Information about products
          </h4>
          <div>
            {getOrderItems().map((item: OrderItem | Product) => (
              <div
                key={item.id}
                className="flex  justify-between gap-2 p-3 bg-white rounded-lg sm:gap-4"
              >
                {"image" in item && item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full object-cover hidden sm:block"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg object-cover sm:hidden shrink-0"
                      style={{ width: "68px", height: "62px" }}
                    />
                  </>
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-sm font-medium shrink-0">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 flex-col min-w-0 sm:w-24">
                  <p className="font-medium text-gray-800 text-lg sm:text-2xl ">{item.name}</p>
                  <p className="text-gray-400 text-xs sm:text-sm ">
                    {"fragrance" in item ? `${item.fragrance} • ${item.size}` : "Django API Item"}
                  </p>
                </div>
                <div className="shrink-0 sm:w-24 flex items-center">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {"quantity" in item ? item.quantity : 1}
                  </p>
                </div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base shrink-0  flex items-center">
                  {formatCurrency(
                    typeof item.price === "string" ? parseFloat(item.price) : item.price
                  )}
                </p>
              </div>
            ))}
          </div>
          {hasFullOrderData() ? (
            <div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Items:</span>
                  <span>{formatCurrency(order.breakdown!.items)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{formatCurrency(order.breakdown!.shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Handling:</span>
                  <span>{formatCurrency(order.breakdown!.handling)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>{formatCurrency(order.breakdown!.tax)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-2xl">
                  <span>Total:</span>
                  <span>{formatCurrency(order.breakdown!.total)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-2xl">
                <span>Total:</span>
                <span>{formatCurrency(getOrderTotal())}</span>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h4 className="text-gray-400 mb-4 flex items-center gap-2 bg-gray-50 border-gray-50 border-b p-2 rounded-full">
            Information about order
          </h4>
          {hasFullOrderData() ? (
            <div className="bg-white rounded-xl  p-5 space-y-3">
              <h4 className="text-gray-400 mb-4 flex items-center gap-2  p-2 ">
                Personal data & Shipping
              </h4>
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2 text-2xl">
                  {order.customer!.name}
                  <span className="  text-gray-400 font-normal text-sm">
                    {order.customer!.phone}
                  </span>
                </p>
                <p className=" font-medium text-gray-400 text-sm">{order.customer!.address}</p>
              </div>

              <hr className="border-gray-200" />

              <p className="text-gray-400">Handling</p>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-gray-800">No Rush</p>
                  <p className="text-gray-400 ">Shipped by</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800 ">$20.00</p>
                  <p className="font-semibold text-gray-800">Feb 24</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <p className="text-gray-400">Shipping</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <img src="/images/usps-logo.png" alt="USPS Logo" className="object-contain" />
                  <div>
                    <p className="font-medium text-gray-800">{order.shipping!.method}</p>
                    <p className="text-gray-500">{order.shipping!.duration}</p>
                    <p className="text-gray-500">Estimated delivery by </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    {formatCurrency(order.breakdown!.shipping)}
                  </p>
                  <p className="font-semibold text-gray-800">
                    {formatDate(order.shipping!.estimatedDelivery)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Tracking</p>
                <p className="text-gray-400 font-medium">Finish order and see</p>
              </div>

              <hr className="border-gray-200" />

              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Payment</p>
                <p className="text-gray-800 font-semibold flex items-center gap-2">
                  Credit Card{" "}
                  <img
                    src="/images/mastercard.png"
                    alt="Mastercard"
                    className="w-5 h-5 object-contain"
                  />
                  •••• {order.payment!.last4}
                </p>
              </div>

              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Status</p>
                <p
                  className={`font-semibold ${
                    order.status === "production_ready"
                      ? "text-[#4CAF50]"
                      : order.status === "approved"
                      ? "text-[#2196F3]"
                      : "text-[#F44336]"
                  }`}
                >
                  {formatStatus(order.status)}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Order ID</p>
                <p className="text-gray-800 font-semibold">{order.order_id || order.id}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Status</p>
                <p
                  className={`font-semibold ${
                    order.status === "production_ready"
                      ? "text-[#4CAF50]"
                      : order.status === "approved"
                      ? "text-[#2196F3]"
                      : "text-[#F44336]"
                  }`}
                >
                  {formatStatus(order.status)}
                </p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Date</p>
                <p className="text-gray-800 font-medium">{formatDate(order.date)}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex  items-center justify-center gap-2 lg:px-8 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors w-full sm:w-auto lg:order-2 sm:order-0">
          Re-Order
        </button>
        <button className="flex items-center justify-center gap-2 lg:px-8 py-3 border border-gray-300 rounded-3xl text-gray-700 hover:bg-gray-50 transition-colors w-full lg:order-1 sm:w-auto order-2 sm:order-0 font-bold">
          <FaFileDownload className="w-4 h-4" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
