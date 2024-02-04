import React from "react";

const GetPrices: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 flex flex-col items-center justify-start h-screen">
      <h1 className="text-3xl font-bold mb-6">What are you moving today?</h1>

      {/* Dropdown Menu */}
      <div className="relative inline-block">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 text-gray-800 font-semibold"
          id="moveType"
        >
          <option value="option1">Furniture</option>
          <option value="option2">Bed</option>
          <option value="option3">Clothes</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* Dropdown arrow icon */}
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 12l-8 8H2l8-8 8 8h-1l-8-8 8-8h1l-8 8z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Your additional content goes here */}
    </div>
  );
};

export default GetPrices;
