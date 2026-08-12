import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import blogs from "../data/Blogs";

interface User {
  id: string;
  name: string;
  image: string;
  isFollowing: boolean;
}

export default function RightRail() {
  const [users, setUsers] = useState<User[]>([]);

 
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=5");
      const usersData: User[] = res.data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.medium,
        isFollowing: false,
      }));
      setUsers(usersData);
    };

    getUsers();
  }, []);

  const handleFollowToggle = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 h-fit sticky top-4">
     <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">🔥 Top Sellers</h2>
        <span className="text-xs text-gray-500">Updated daily</span>
      </div>

      <div className="space-y-3">
        {users.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm p-3 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={s.image}
                alt={s.name}
                className="h-10 w-10 rounded-full object-cover border border-gray-200"
              />
              <div>
                <div className="text-sm font-medium text-gray-800 line-clamp-1">{s.name}</div>
                <div className="text-xs text-gray-500">Top Rated Seller</div>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleFollowToggle(s.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                s.isFollowing
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {s.isFollowing ? "Following" : "Follow"}
            </motion.button>
          </motion.div>
        ))}
      </div>

       {/* BLogs  */}

      <div className="mt-8">
      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">📰 Popular Blogs</h2>
        <span className="text-xs text-gray-500">Top picks for you</span>
      </div>

      <div className="space-y-3">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Blog Title */}
            <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {b.title}
            </div>

            {/* Excerpt */}
            <div className="mt-1 text-xs text-gray-500 line-clamp-2">{b.excerpt}</div>

            {/* Likes & Comments */}
            <div className="mt-3 flex items-center gap-5 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <FiHeart className="text-pink-500" size={14} />
                <span>{b.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMessageCircle className="text-indigo-500" size={14} />
                <span>{b.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </aside>
  );
}
