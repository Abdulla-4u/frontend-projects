
import { motion } from "framer-motion";

const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="relative cursor-default z-[60] flex size-10 items-center justify-center lg:hidden"
    >
      <span className="relative flex h-5 w-6 flex-col items-center justify-center">
        <motion.span
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 0 : -4,
            backgroundColor: isMenuOpen ? "#ffffff" : "#212121",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute h-[1.5px] w-full rounded-full"
        />

        <motion.span
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? 0 : 4,
            backgroundColor: isMenuOpen ? "#ffffff" : "#212121",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute h-[1.5px] w-full rounded-full"
        />
      </span>
    </button>
  );
};

export default MenuButton;
