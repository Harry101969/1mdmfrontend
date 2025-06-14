import { ShoppingCart, Headphones } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-4">
      <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105">
        <ShoppingCart size={20} />
        <span className="font-semibold">Start Selling</span>
      </button>

      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105">
        <Headphones size={20} />
        <span className="font-semibold">Customer Service</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
