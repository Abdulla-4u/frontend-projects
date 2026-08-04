import React from "react";
import { useUserStore } from "../store/useUserStore";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const { name, photo, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  return (
    <div className="flex gap-3">
      <div className="size-11 relative ">
        <img
          src={photo}
          alt={name}
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      <button
        onClick={handleLogout}
        className=" bg-red-600 font-normal tracking-wider text-white px-4 py-1 rounded-lg z-50 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Avatar;
