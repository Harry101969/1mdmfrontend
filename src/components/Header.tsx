import React from "react";
import { User, Phone } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="text-gray-600 text-sm">
              World's Largest Medical Equipment Market Place
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <User size={16} />
                My account
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-red-500 flex items-center gap-1 transition-colors"
              >
                <Phone size={16} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-3xl font-bold text-red-500 hover:text-red-600 transition-colors"
              >
                1MDM
              </button>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("about")}
                className={`transition-colors ${
                  currentPage === "about"
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setCurrentPage("story")}
                className={`transition-colors ${
                  currentPage === "story"
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setCurrentPage("home")}
                className={`transition-colors ${
                  currentPage === "home"
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                Sell on 1MDM
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className={`transition-colors ${
                  currentPage === "pricing"
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                Pricing
              </button>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
