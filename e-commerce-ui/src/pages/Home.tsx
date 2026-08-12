import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import type { Product } from "../data/products";

interface FetchResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { keyword, selectedCategory, query, priceMax, priceMin, filter } = useAppContext();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    let url = keyword
      ? `https://dummyjson.com/products/search?q=${keyword}`
      : `https://dummyjson.com/products`;

    const getProducts = async () => {
      const res = await axios.get<FetchResponse>(url);
      setProducts(res.data.products);
    };
    getProducts();
  }, [keyword]);

  // 🔹 Apply filtering logic
  const getFilteredProducts = (): Product[] => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (priceMin !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= priceMin
      );
    }

    if (priceMax !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= priceMax
      );
    }

    // Sorting
    if (filter) {
      switch (filter) {
        case "lowToHigh":
          filteredProducts = [...filteredProducts].sort(
            (a, b) => a.price - b.price
          );
          break;
        case "highToLow":
          filteredProducts = [...filteredProducts].sort(
            (a, b) => b.price - a.price
          );
          break;
        case "newest":
          filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id);
          break;
        case "popular":
          filteredProducts = [...filteredProducts].sort(
            (a, b) => b.rating - a.rating
          );
          break;
      }
    }

    return filteredProducts;
  };

  // 🔹 Pagination applied AFTER filtering
  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
      <FilterBar />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
        {paginatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 disabled:opacity-50">
          Prev
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`h-8 w-8 rounded-md text-sm ${
                n === 1
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}
