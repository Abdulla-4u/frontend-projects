import { auth, provider } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserStore } from "../store/useUserStore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setUserLoginDetails, name, photo } = useUserStore();
  const navigate = useNavigate();

  const NavMenu = [
    { img: "/images/home-icon.svg", name: "home" },
    { img: "/images/search-icon.svg", name: "search" },
    { img: "/images/watchlist-icon.svg", name: "watchList" },
    { img: "/images/original-icon.svg", name: "original" },
    { img: "/images/movie-icon.svg", name: "movies" },
    { img: "/images/series-icon.svg", name: "series" },
  ];

  const setUserData = (user, token = "") => {
    setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      token: token || user.accessToken || "",
    });
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      setUserData(user, token);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
        if (location.pathname !== "/home") {
          navigate("/home");
        }
      } else {
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-8 w-full bg-gray-900 flex justify-between items-center z-10">
      <img
        className="h-10 cursor-pointer"
        src="/images/logo.svg"
        alt="Disney Logo"
      />
      {name && (
        <div className="hidden md:flex items-center gap-7 mr-auto ml-8">
          {NavMenu.map((item, i) => (
            <NavMenuItem item={item} key={i} />
          ))}
        </div>
      )}
      {photo ? (
        <Avatar/>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-transparent hover:bg-zinc-200 hover:border-transparent hover:text-black border transition duration-300 ease-in-out cursor-pointer text-[#f3f3f3] tracking-widest text-base font-semibold uppercase py-2.5 px-6 rounded-md shadow-sm"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;

const NavMenuItem = ({ item }) => (
  <Link to={item.name} className="flex items-center gap-2 cursor-pointer ">
    <img className="w-5" src={item.img} alt={item.name} />
    <span className="uppercase text-[14px] tracking-wide">{item.name}</span>
  </Link>
);
