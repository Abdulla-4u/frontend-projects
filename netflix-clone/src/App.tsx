import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Trending from "./components/Trending";
import "./index.css";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="main-container ">
        <Navbar />
        <Hero />
        <div className="curve-container relative h-[150px] overflow-hidden">
          <div className="netflix-curve"></div>
        </div>
        <Trending />
        <Overview />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default App;
