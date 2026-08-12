import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiHeart} from "react-icons/fi";
import type { Product } from "../utils/type";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  // Generate rating stars (max 5)
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`h-3.5 w-3.5 ${
            i < fullStars ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-white to-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Wishlist Icon */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault(); // prevent link navigation
          setLiked(!liked);
        }}
        className={`absolute right-3 top-3 z-10 rounded-full p-1.5 backdrop-blur-sm transition-all duration-300 ${
          liked
            ? "bg-red-100 text-red-500 scale-110"
            : "bg-white/80 text-gray-500 hover:scale-110 hover:text-red-500"
        }`}
        aria-label="Add to wishlist"
      >
        {liked ? (
          <FaHeart className="h-4 w-4 fill-red-500 text-red-500 transition-transform duration-200" />
        ) : (
          <FiHeart className="h-4 w-4 transition-transform duration-200" />
        )}
      </button>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={product.images?.[0] || "https://via.placeholder.com/400x300"}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-[15px] font-semibold text-gray-800 group-hover:text-indigo-600">
          {product.title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold text-indigo-600">
            ${product.price}
          </span>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-0.5">
              {renderStars(product.rating)}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
