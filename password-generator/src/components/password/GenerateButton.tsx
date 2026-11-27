
import { motion } from "framer-motion";
import { FiArrowUpRight, FiRefreshCw } from "react-icons/fi";

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const iconVariants = {
  initial: { rotate: 0 },
  hover: { rotate: 180 },
  tap: { rotate: -90 },
};

const GenerateButton = ({
  onClick,
  disabled = false,
}: GenerateButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      variants={{
        initial: {
          y: 0,
          scale: 1,
          boxShadow: "0 8px 30px rgba(141,226,197,0.12)",
        },
        hover: {
          y: -2,
          scale: 1,
          boxShadow: "0 12px 35px rgba(141,226,197,0.2)",
        },
        tap: {
          y: 0,
          scale: 0.975,
          boxShadow: "0 2px 10px rgba(141,226,197,0.08)",
        },
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.6,
      }}
      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#8DE2C5] px-5 py-4 text-sm font-bold text-[#071711] shadow-[0_8px_30px_rgba(141,226,197,0.12)] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <motion.span
        variants={iconVariants}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex"
      >
        <FiRefreshCw size={17} />
      </motion.span>

      Generate new password

      <motion.span
        className="ml-auto flex opacity-60"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: 2, y: -2 },
          tap: { x: 0, y: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        <FiArrowUpRight size={17} />
      </motion.span>
    </motion.button>
  );
};

export default GenerateButton;
