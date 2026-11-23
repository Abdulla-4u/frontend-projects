import { useEffect, useRef, useState } from "react";

const useNavbarScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsVisible(
        prevScrollPos.current > currentScrollPos || currentScrollPos < 10
      );

      setIsScrolled(currentScrollPos > 10);

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible, isScrolled };
};

export default useNavbarScroll;