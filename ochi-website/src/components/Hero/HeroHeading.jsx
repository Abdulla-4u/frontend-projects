import { motion } from "framer-motion";

const headingLines = ["We create", "eye-opening", "presentations"];

const HeroHeading = () => {
  return (
    <div className="w-full">
      <h1 className="font-FoundersGrotesk text-[#212121]">
        {headingLines.map((item, index) => (
          <div
            key={item}
            className="
              flex w-fit max-w-full items-end overflow-hidden whitespace-nowrap
              text-[clamp(4rem,9vw,3rem)] leading-[0.82] tracking-normal uppercase
              sm:text-[clamp(4rem,9vw,4rem)]
              md:text-[clamp(4rem,13vw,7rem)]
              lg:text-[130px] lg:leading-[98px]
            "
          >
            {index === 1 && (
              <motion.div
              initial={{ width: 0, marginRight: 0 }}
              animate={{
                width: "0.9em",
                marginRight: "0.08em",
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.6,
              }}
              className="
                relative h-[0.7em] shrink-0
                overflow-hidden rounded-md
                lg:h-[83px]
              "
              aria-hidden="true"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            )}
            {item}
          </div>
        ))}
      </h1>
    </div>
  );
};

export default HeroHeading;