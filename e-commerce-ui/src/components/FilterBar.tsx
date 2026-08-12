import { useState } from "react";
import { FiFilter, FiChevronDown, FiCheck } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";

export default function FilterBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { filter, setFilter } = useAppContext();

  const filters = [
    { key: "lowToHigh", label: "Price: Low to High" },
    { key: "highToLow", label: "Price: High to Low" },
    { key: "newest", label: "Newest" },
    { key: "popular", label: "Popular" },
  ] as const;

  // Find the current active filter label
  const activeFilterLabel = filters.find((f) => f.key === filter)?.label || "Default";

  return (
    <div className="mb-4 flex flex-col items-stretch justify-between gap-3 sm:mb-6 sm:flex-row sm:items-center">
      <div className="text-lg md:text-2xl font-semibold">Products</div>

      {/* Filter Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm hover:bg-gray-100 transition"
        >
          <FiFilter className="text-gray-600" />
          <span className="font-medium text-gray-700">
            {activeFilterLabel}
          </span>
          <FiChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
            {/* Default Filter */}
            <div
              onClick={() => {
                setFilter("");
                setIsOpen(false);
              }}
              className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-50 ${
                filter === "" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              Default
              {filter === "" && <FiCheck className="text-green-600" />}
            </div>

            {/* Other Filters */}
            {filters.map((f) => (
              <div
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setIsOpen(false); // auto-close dropdown
                }}
                className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-50 ${
                  filter === f.key ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                {f.label}
                {filter === f.key && <FiCheck className="text-green-600" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
