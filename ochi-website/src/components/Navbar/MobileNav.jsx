
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ isMenuOpen, navItems, setIsMenuOpen }) => (
  <AnimatePresence>
    {isMenuOpen && (
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
        aria-label="Mobile navigation"
        className="
          absolute left-0 top-full h-screen z-[-1]
          flex max-h-[calc(100svh-64px)] w-full
          flex-col overflow-y-auto
          bg-[#212121] px-5 pb-10 pt-5
          sm:px-8 lg:hidden
        "
      >
        <div className="mt-2 mb-2 h-px w-full bg-white/20" />

        <div className="flex flex-col gap-2 pt-2">
          {navItems.map((item, index) => (
            <MobileNavLink
              key={item}
              item={item}
              index={index}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </div>

        <div className="mt-auto pt-12 font-NeueMontreal text-xs uppercase tracking-wider text-white/40">
          © Ochi Design 2026
        </div>
      </motion.nav>
    )}
  </AnimatePresence>
);

const MobileNavLink = ({ item, index, onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      delay: 0.2 + index * 0.055,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover="hover"
    className="
      group relative flex w-full items-center
      justify-between text-left font-FoundersGrotesk uppercase
      text-[clamp(3.1rem,7vw,4rem)]
      leading-none text-white
    "
  >
    <motion.span
      variants={{ hover: { scale: 1.04 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative inline-block origin-left"
    >
      {item}

      <motion.span
        variants={{
          hover: {
            scaleX: 1,
            transformOrigin: "left",
          },
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="
          absolute -bottom-1 left-0
          h-[2px] w-full bg-white
        "
      />
    </motion.span>
  </motion.button>
);

export default MobileNav;
