import clsx from "clsx";

const MobileMenuToggle = ({ isMenuOpen, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-navigation"
      className="relative z-[70] flex size-10 flex-col items-center justify-center gap-[6px]"
    >
      <span
        className={clsx(
          "h-[2px] w-7 rounded-full bg-white transition-all duration-300",
          isMenuOpen && "translate-y-[4px] rotate-45"
        )}
      />

      <span
        className={clsx(
          "h-[2px] w-7 rounded-full bg-white transition-all duration-300",
          isMenuOpen && "-translate-y-[4px] -rotate-45"
        )}
      />
    </button>
  );
};

export default MobileMenuToggle;