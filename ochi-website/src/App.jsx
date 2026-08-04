// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Marquee from "./components/Marquee";
// import About from "./components/About";
// import PlayingEyes from "./components/PlayingEyes";
// import Features from "./components/Features";
// import LocomotiveScroll from "locomotive-scroll";
// import Review from "./components/Review";

// const App = () => {
//   const locomotiveScroll = new LocomotiveScroll();

//   return (
//     <div className="h-screen relative w-full bg-[#F1F1F1]">
//       <Navbar />
//       <Hero />
//       <Marquee />
//       <About />
//       <PlayingEyes />
//       <Features />
//       <Review/>
//     </div>
//   );
// };

// export default App;







import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import PlayingEyes from "./components/PlayingEyes";
import Features from "./components/Features";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen relative w-full bg-[#F1F1F1]">
      {isLoading ? (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#F1F1F1] z-50"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.42, 0, 0.58, 1],
          }}
        >
          <motion.div
            className="text-6xl font-bold text-[#212121] relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 1.2,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.5,
                }}
              >
                Hi there
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      ) : (
        <>
          {/* Main Content */}
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <PlayingEyes />
          <Features />
        </>
      )}
    </div>
  );
};

export default App;