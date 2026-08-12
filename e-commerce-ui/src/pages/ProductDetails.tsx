import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../data/products";
import { FiArrowLeft } from "react-icons/fi";

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product>(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to load product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) getProductDetails();
  }, [id]);

  // 🔄 Shimmer Loader
  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-gray-200 bg-white/70 p-6 backdrop-blur">
        <div className="mb-4 h-6 w-24 rounded bg-gray-200" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="h-80 rounded-xl bg-gray-200" />
          <div className="space-y-4">
            <div className="h-6 w-3/4 rounded bg-gray-200" />
            <div className="h-5 w-1/3 rounded bg-gray-200" />
            <div className="h-24 w-full rounded bg-gray-200" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 rounded bg-gray-200" />
              <div className="h-10 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
        <div className="text-sm text-gray-600 mb-3">Product not found.</div>
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-8 shadow-sm transition">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        <FiArrowLeft className="text-gray-600 text-lg" />
        Back
      </button>


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/400"}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm">
            {product.description}
          </p>

          <div className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-sm text-yellow-500">
              {"⭐".repeat(Math.round(product.rating))}
              <span className="text-gray-500">({product.rating})</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-3">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
