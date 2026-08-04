import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import clsx from "clsx";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
const Navbar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Refs for audio and navigation container
  const navbarRef = useRef(null);
  const audioElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Add or remove the scrolled class based on the scroll position
      setIsScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        y: isVisible ? 0 : "-100%",
        opacity: isVisible ? 1 : 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isVisible]);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <header
      ref={navbarRef}
      style={{
        opacity: isVisible ? 1 : 0, 
        transition: "opacity 0.5s ease-in-out",
      }}
      className={`fixed top-0 left-0 right-0 m-2 flex justify-between items-center md:px-8 px-4 py-3 z-50 transition-all ${
        isScrolled ? "bg-black rounded-lg" : ""
      }`}
    >
      <div className="flex items-center gap-6 text-white">
        <img src="/img/logo.png" alt="logo" className="w-10 object-cover" />
        <Button
          title="Products"
          containerClass="bg-blue-50 md:flex items-center justify-center gap-1 hidden"
          rightIcon={<TiLocationArrow />}
        />
      </div>

      <nav className="flex items-center gap-8 md:pr-5">
        <div className="hidden md:block">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="flex items-center space-x-0.5"
          onClick={toggleAudioIndicator}
        >
          <audio
            loop
            ref={audioElementRef}
            className="hidden"
            src="/audio/loop.mp3"
          ></audio>

          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={clsx("indicator-line", {
                active: isIndicatorActive,
              })}
              style={{
                animationDelay: `${bar * 0.1}s`,
              }}
            ></div>
          ))}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
