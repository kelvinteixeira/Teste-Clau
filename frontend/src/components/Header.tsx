import React from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div
        className="w-full flex items-center justify-between px-4 lg:px-36"
        style={{ height: "88px" }}
      >
        <div className="flex items-center gap-3 lg:gap-8">
          <button
            onClick={onMenuClick}
            className="lg:hidden flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            style={{ width: "20px", height: "20px" }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>

          <div
            className="flex items-center justify-center rounded-lg"
            style={{ width: "120px", height: "40px" }}
          >
            <span className="text-gray-600 font-bold text-sm">LOGO</span>
          </div>

          <nav className="hidden lg:flex items-center gap-3">
            {["Shop", "Learn", "Support", "Company"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
              style={{ width: "20px", height: "20px" }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            <button
              className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
              style={{ width: "20px", height: "20px" }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors duration-200 whitespace-nowrap text-sm">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5"
            >
              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
            </svg>
            <span className="hidden sm:inline">Design Now</span>
            <span className="sm:hidden">Design</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
