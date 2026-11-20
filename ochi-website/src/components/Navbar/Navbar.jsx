
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

export const navItems = [
  "Services",
  "Our work",
  "About us",
  "Insights",
  "Contact us",
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const prevScrollPos = useRef(0);

  // Hide navbar while scrolling down and reveal it while scrolling up.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsVisible(
        prevScrollPos.current > currentScrollPos ||
        currentScrollPos < 10
      );

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling.
  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);

    window.addEventListener("scroll", closeMenu, { passive: true });

    return () => window.removeEventListener("scroll", closeMenu);
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: isVisible || isMenuOpen ? 0 : "-100%",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`
        fixed left-0 top-0 z-50 w-full backdrop-blur-sm
        transition-colors duration-300
        ${isMenuOpen ? "bg-[#212121] lg:bg-[#F1F1F1]/70" : "bg-[#F1F1F1]/70"}
      `}
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10 xl:px-12">

        {/* Logo */}
        <div className={`
          transition-all duration-300
          ${isMenuOpen ? "brightness-0 invert lg:brightness-100 lg:invert-0" : ""}
        `}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0 lg:flex">
          {navItems.map((item, index) => (
            <NavLink key={item} item={item} index={index} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        setIsMenuOpen={setIsMenuOpen}
      />
    </motion.header>
  );
};

export default Navbar;
