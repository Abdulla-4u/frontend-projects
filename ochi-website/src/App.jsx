import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Marquee from "./components/Marquee";
import About from "./components/About";
import PlayingEyes from "./components/PlayingEyes";
import Review from "./components/Review";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/footer";
import Features from "./components/Features";



const App = () => {
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();

    return () => {
      locomotiveScrollRef.current?.destroy();
      locomotiveScrollRef.current = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#F1F1F1]">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PlayingEyes />
      <Features />
      <Review />
      <Footer />
    </div>
  );
};

export default App;

