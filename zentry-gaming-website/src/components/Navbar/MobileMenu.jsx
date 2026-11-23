import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";


import ProductsButton from "./ProductsButton";
import { navItems } from "./data/navItems";

const MobileMenu = ({ isMenuOpen, onClose }) => {
  const menuRef = useRef(null);

  // Animate menu and navigation links
  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) return;

    const links = menu.querySelectorAll(".mobile-nav-link");

    if (isMenuOpen) {
      gsap.to(menu, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.fromTo(
        links,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
      gsap.to(menu, {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    return () => {
      gsap.killTweensOf([menu, ...links]);
    };
  }, [isMenuOpen]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, onClose]);

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      aria-hidden={!isMenuOpen}
      className={clsx(
        "pointer-events-none fixed inset-0 z-[60] flex flex-col justify-between overflow-hidden bg-[#080808] px-7 pb-10 pt-28 opacity-0 md:hidden",
        isMenuOpen && "pointer-events-auto"
      )}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full bg-[#5542ff]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 size-80 rounded-full bg-[#5542ff]/15 blur-[100px]" />

      {/* Menu Content */}
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <p className="font-General text-[10px] uppercase tracking-[0.3em] text-white/40">
            Navigation
          </p>

          <span className="font-General text-[10px] text-white/40">
            01 — 05
          </span>
        </div>

      {/* Navigation Links */}
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              tabIndex={isMenuOpen ? 0 : -1}
              className="mobile-nav-link group relative flex items-center justify-between overflow-hidden border-b border-white/10 py-4 font-General text-4xl uppercase text-white"
            >
              {/* Hover Background */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#5542ff]/15 via-[#5542ff]/5 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-0" />

              {/* Link Text */}
              <span className="relative z-10 flex items-center gap-3 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#a99cff]">
                <span className="size-1.5 rounded-full bg-[#5542ff] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                {item}
              </span>

              {/* Index Number */}
              <span className="relative z-10 font-circular-web text-xs text-white/30 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-[#a99cff]">
                0{index + 1}
              </span>

              {/* Bottom Accent */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#5542ff] transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="relative flex flex-col gap-7">
        <div className="h-px w-full bg-white/10" />

        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 font-General text-[10px] uppercase tracking-widest text-white/40">
              Explore the world
            </p>

            <p className="font-General text-sm uppercase text-white">
              Discover Zentry
            </p>
          </div>

          <ProductsButton />
        </div>

        <p className="font-General text-[10px] uppercase tracking-widest text-white/30">
          The future is yours to shape.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;


// todo - fix the scroll problem on mobile screen