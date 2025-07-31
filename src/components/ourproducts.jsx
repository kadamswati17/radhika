import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const categories = [
  "Gels",
  "Face Creams",
  "Haircare Products",
  "Face Scrubs",
  "Toners",
  "Face Wash & Cleansers",
  "Face Moisturizers & Lotions",
  "Face Moisturizers & Lotions",
];

export default function OurProducts() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="py-6 font-playfair">
      <div className="relative px-8 mb-6">
        <h2
          className="text-[28px] text-gray-700 text-center"
          style={{ fontFamily: "Lora" }}
        >
          Our Products
        </h2>

        <div className="absolute right-40 top-0 mt-2">
  <div className="relative">
    <button
      onClick={toggleDropdown}
      className="flex items-center gap-2 px-4 py-2 border border-[#7E9E86] rounded-md text-gray-600 hover:bg-[#7E9E86] hover:text-white transition"
    >
      Select Category
      {showDropdown ? <FiChevronUp /> : <FiChevronDown />}
    </button>

    {showDropdown && (
      <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
        {categories.map((item, idx) => (
          <button
            key={idx}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#7E9E86] hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
</div>

        
      </div>
    </div>
  );
}
