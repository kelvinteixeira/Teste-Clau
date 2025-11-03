import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MyOrders from "./pages/MyOrders";
import NewslettersBanner from "./components/NewlettersBanner";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      <div className="flex flex-1 relative">
        <div className="hidden lg:block" style={{ marginLeft: "144px" }}>
          <Sidebar />
        </div>

        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="relative z-10">
              <Sidebar
                isOpen={true}
                onClose={() => setMobileSidebarOpen(false)}
              />
            </div>
            <div
              className="absolute inset-0 bg-gray-50 "
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>
        )}

        <div className="flex-1 w-full">
          <MyOrders />
        </div>
      </div>

      <div className="mt-12">
        <NewslettersBanner />
        <Footer />
      </div>
    </div>
  );
};

export default App;
