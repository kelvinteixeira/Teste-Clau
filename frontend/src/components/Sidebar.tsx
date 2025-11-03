import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const menuItems = [
    { title: "My Profile", icon: "profile" },
    { title: "My Orders", icon: "orders" },
    { title: "My Design", icon: "design" },
    { title: "Payment Methods", icon: "payment" },
    { title: "Shipping Addresses", icon: "shipping" },
    { title: "Ai Credits", icon: "credits" },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "profile":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        );
      case "orders":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
          </svg>
        );
      case "design":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        );
      case "payment":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
        );
      case "shipping":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-5 0h3l2.25 3h-5.25V8zM7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        );
      case "credits":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!onClose && (
        <button
          className="fixed top-5 left-5 z-50 p-2 text-gray-700 bg-white rounded-full shadow-md lg:hidden"
          onClick={onClose}
        >
          <FiMenu className="w-6 h-6" />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 lg:translate-x-0 lg:static lg:shadow-none lg:w-auto z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ height: "fit-content" }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={onClose}>
            <FiX className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="py-8 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href="#"
              className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 group"
              onClick={onClose}
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
                {getIcon(item.icon)}
              </span>
              <span className="font-medium">{item.title}</span>
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-100 mt-6 pt-4 px-6">
          <a
            href="#"
            className="flex items-center gap-3 py-3 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
            onClick={onClose}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
            </svg>
            <span className="font-medium">Log Out</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
