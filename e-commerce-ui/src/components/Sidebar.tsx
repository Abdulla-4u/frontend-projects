import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";

interface FetchResponse {
  products: {
    category: string;
  }[];
}

export default function Sidebar() {
  const { query, setQuery, selectedCategory, setSelectedCategory, priceMin, priceMax, setPriceMax, setPriceMin, keyword, setKeyword } = useAppContext();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<FetchResponse>(`https://dummyjson.com/products`);
        const uniqueCategories = Array.from(new Set(response.data.products?.map((product) => product.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handlePriceMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceMin(value !== "" ? parseFloat(value) : null);
  };

  const handlePriceMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceMax(value !== "" ? parseFloat(value) : null);
  };

  const resetFilters = ()=>{
    setQuery("");
    setSelectedCategory("");
    setPriceMin(null);
    setPriceMax(null);
    setKeyword("");
  }


  return (
    <aside className="order-1 lg:order-none rounded-xl border border-gray-200 bg-white p-4 sm:p-6 h-fit sticky top-4">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-semibold">
          S
        </div>
        <div>
          <div className="text-lg font-semibold">Shopwise</div>
          <div className="text-xs text-gray-500">Find your style</div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">Search product</label>
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
          <FiSearch className="text-gray-500" />
          <input
            className="w-full bg-transparent text-sm outline-none"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">Price range</label>
        <div className="grid grid-cols-2 gap-3">
          <input
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Min"
            type="number"
            value={priceMin ?? ''}
            onChange={handlePriceMin}
          />
          <input
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Max"
            type="number"
            value={priceMax ?? ''}
            onChange={handlePriceMax}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 text-sm font-medium">Categories</div>
        <div className="space-y-2 text-sm">
          <label key="all" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="All"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
            />
            <span className="capitalize">All</span>
          </label>
          {categories.map(
            (c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  value={c}
                  checked={selectedCategory === c}
                  onChange={() => setSelectedCategory(c)}
                />
                <span className="capitalize">{c}</span>
              </label>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 text-sm font-medium">Keywords</div>
        <div className="flex flex-wrap gap-2">
          {["Watch", "Shirt", "Casual", "Sport", "Fashion", "Trend"].map(
            (k) => (
              <button
                key={k}
                onClick={() => setKeyword(k)}
                className={`rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs hover:border-indigo-300 hover:bg-indigo-50 ${keyword === k ? "border-indigo-300 bg-indigo-50" : ""}`}
              >
                {k}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={resetFilters}
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          <FiRefreshCw /> Reset Filters
        </button>
      </div>
    </aside>
  );
}
