import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <section
      className="
        relative z-20 w-full overflow-hidden
        rounded-tl-2xl rounded-tr-2xl
        bg-[#004D43]
        pt-14 sm:pt-16 lg:pt-20
      "
    >
      {/* Marquee content */}
      <div
        className="
        overflow-hidden 
        pt-2 pb-6
        sm:pt-3 sm:pb-8
        lg:pt-4 lg:pb-10
      "
      >
        <motion.div
          className="flex w-max border-2 pb-4 border-[#427B73]"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
        >
          <div
            className="
            shrink-0 whitespace-nowrap pr-8
            font-FoundersGrotesk uppercase
            text-[clamp(5rem,28vw,30rem)]
            leading-[0.7] text-white
            sm:pr-12 lg:pr-14
          "
          >
            We are ochi
          </div>

          <div
            aria-hidden="true"
            className="
              shrink-0 whitespace-nowrap pr-8
              font-FoundersGrotesk uppercase
              text-[clamp(5rem,28vw,30rem)]
              leading-[0.7] text-white
              sm:pr-12 lg:pr-14
            "
          >
            We are ochi
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
