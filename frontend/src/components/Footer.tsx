import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { FaFlagUsa, FaGlobe } from "react-icons/fa";

const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const footerSections = [
    {
      title: "Shop",
      items: [
        "Stock Shapes",
        "Custom Shapes",
        "Retail Ready Stock Shapes",
        "Sample Packs",
        "Catalog",
      ],
    },
    {
      title: "Learn",
      items: ["Categories", "Pricing", "Fragrances", "Promotions"],
    },
    {
      title: "Support",
      items: [
        "Contact Us",
        "Design Tips",
        "FAQ",
        "Store Policy",
        "Shipping & Production",
      ],
    },
    {
      title: "Company",
      items: ["About Us", "Reviews", "Affiliate Program", "Blog"],
    },
  ];

  return (
    <footer className="w-full  text-black px-4 lg:px-36 pb-10">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 bg-gray-50 rounded-4xl px-0 lg:px-8 py-8">
        <div className="flex flex-col items-start w-full lg:w-auto lg:items-start">
          <img
            src="/logo.svg"
            alt="Make My Freshener Logo"
            className="w-40 mb-4"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 lg:gap-6 lg:border-b lg:border-gray-200 pb-0 lg:pb-6 w-full">
          <h3 className="text-lg font-semibold text-center lg:text-left">
            Custom Rides. Fresh Vibes.
          </h3>
          <button className="w-full lg:w-auto bg-[#1E49C3] text-white rounded-2xl px-5 py-2 font-semibold hover:bg-[#163893] transition-colors flex items-center justify-center gap-2">
            ✏️ Design Now
          </button>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-4xl px-0 lg:px-8 py-0 lg:py-8 lg:-mt-4">
        <div className="lg:hidden space-y-4">
          {footerSections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl p-4">
              <button
                onClick={() => toggleAccordion(section.title)}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 py-2"
              >
                {section.title}
                <FaChevronDown
                  className={`transform transition-transform ${
                    openAccordion === section.title ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === section.title && (
                <ul className="space-y-2 text-gray-700 mt-2 pl-4">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Stock Shapes</li>
              <li>Custom Shapes</li>
              <li>Retail Ready Stock Shapes</li>
              <li>Sample Packs</li>
              <li>Catalog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Learn</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Categories</li>
              <li>Pricing</li>
              <li>Fragrances</li>
              <li>Promotions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Contact Us</li>
              <li>Design Tips</li>
              <li>FAQ</li>
              <li>Store Policy</li>
              <li>Shipping & Production</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li>About Us</li>
              <li>Reviews</li>
              <li>Affiliate Program</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end space-y-3">
            <h4 className="font-semibold">We accept:</h4>
            <img
              src="/payments.png"
              alt="Payment Methods"
              className="w-40 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 text-xs text-gray-600 gap-4 lg:border-t lg:border-gray-100 pt-6">
          <p className="font-semibold w-full lg:w-auto text-left">
            © 2024 Make My Freshener. All Rights Reserved.
          </p>

          <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center w-full lg:w-auto gap-2 lg:gap-4">
            <span className="flex items-center gap-2 font-semibold">
              <FaFlagUsa className="text-blue-700" /> Made in the USA | $ (USD)
            </span>
            <span className="flex items-center gap-2 font-semibold">
              <FaGlobe className="text-blue-700" /> Worldwide Shipping
            </span>
          </div>

          <div className="flex gap-4 text-xl text-gray-700 w-full lg:w-auto justify-start lg:justify-end">
            <FaFacebook className="hover:text-[#1E49C3] cursor-pointer" />
            <FaInstagram className="hover:text-[#1E49C3] cursor-pointer" />
            <FaTiktok className="hover:text-[#1E49C3] cursor-pointer" />
            <FaYoutube className="hover:text-[#1E49C3] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
