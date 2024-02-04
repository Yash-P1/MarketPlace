import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

// Navbar component for navigation and cart link
export const Navbar = () => {
  return (
    <div className="bg-gray-800 mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-semibold flex items-center"
        >
          Furniture MarketPlace
        </Link>

        {/* Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/get-prices" className="text-white hover:text-gray-300">
            Get Prices
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Shopping Cart Link */}
        <Link to="/cart" className="text-white flex items-center">
          {/* ShoppingCart icon from Phosphor */}
          <ShoppingCart size={24} className="mr-2" />
          {/* Text indicating Cart */}
          <span className="text-sm font-medium">Cart</span>
        </Link>
      </div>
    </div>
  );
};
