import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewslettersBanner: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-36">
      {" "}
      <section className="w-full bg-[#1E49C3] text-white py-8 sm:py-10 px-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
          <div className="text-left sm:text-left flex-1">
            <h2 className="text-lg sm:text-xl font-semibold">Newsletter</h2>
            <p className="text-sm text-gray-100 mt-1">
              Get special offers delivered straight to your inbox
            </p>
          </div>

          <form
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1 sm:justify-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white placeholder:text-black"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit <FaArrowRight className="text-sm" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewslettersBanner;
