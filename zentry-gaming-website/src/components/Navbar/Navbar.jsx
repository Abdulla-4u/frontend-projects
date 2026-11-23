import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import clsx from "clsx";

import NavbarLogo from "./NavbarLogo";
import ProductsButton from "./ProductsButton";
import AudioToggle from "./AudioToggle";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";

import useNavbarScroll from "../../hooks/useNavbarScroll";
import useAudio  from "../../hooks/useAudio";



const Navbar = () => {
  const navbarRef = useRef(null);

  const { isVisible, isScrolled } = useNavbarScroll();

  const {
    audioRef,
    isAudioPlaying,
    toggleAudio,
  } = useAudio();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Animate navbar on scroll
  useEffect(() => {
    if (!navbarRef.current) return;

    gsap.to(navbarRef.current, {
      y: isVisible || isMenuOpen ? 0 : "-120%",
      opacity: isVisible || isMenuOpen ? 1 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [isVisible, isMenuOpen]);

  return (
    <>
      <header
        ref={navbarRef}
        className={clsx(
          "fixed left-0 right-0 top-0 z-[70] m-2 flex items-center justify-between rounded-lg px-4 py-3 transition-colors duration-300 md:px-8",
          isScrolled || isMenuOpen ? "bg-black" : "bg-transparent"
        )}
      >
        {/* Logo and Products */}
        <div className="flex items-center gap-6 text-white">
          <NavbarLogo />

          <div className="hidden md:block">
            <ProductsButton />
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav
          isAudioPlaying={isAudioPlaying}
          onAudioToggle={toggleAudio}
        />

        {/* Mobile Controls */}
        <div className="flex items-center gap-5 md:hidden">
          <AudioToggle
            isAudioPlaying={isAudioPlaying}
            onToggle={toggleAudio}
          />

          <MobileMenuToggle
            isMenuOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src="/audio/loop.mp3"
          loop
          className="hidden"
        />
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};

export default Navbar;