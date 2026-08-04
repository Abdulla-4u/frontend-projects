import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingSliderData } from "../Data/Data";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

// Custom arrow components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute sm:-right-5 right-0  top-1/2 -translate-y-1/2 z-20 
    bg-[#1A1A1A] hover:bg-[#333333] h-[120px] w-[28px] flex items-center justify-center 
    cursor-pointer text-white rounded-lg
    transition-all duration-300 ease-in "
  >
    <MdArrowForwardIos className="text-xl" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute sm:-left-7 sm:-left-0 left-0 top-1/2 -translate-y-1/2 z-20 
    bg-[#1A1A1A] hover:bg-[#333333] h-[120px] w-[26px] flex items-center justify-center 
    cursor-pointer text-white rounded-lg
    transition-all duration-300 ease-in"
  >
    <MdOutlineArrowBackIos className="text-xl" />
  </button>
);

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // default for XL+
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },

      {
        breakpoint: 640, // sm 📱 small screens → 3 cards
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white font-bold text-xl sm:text-2xl mb-3">
        Trending Now
      </h2>
      <Slider {...settings}>
        {trendingSliderData.map((item, index) => (
          <div
            key={index}
            className="relative px-2 cursor-pointer transition-transform duration-300 hover:scale-105 py-5 pl-5"
          >
            {/* Responsive Aspect Ratio Wrapper */}
            <div
              className="
                img-wrapper
                aspect-[4/6] 
                w-full
                max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px]
                bg-white/30 rounded-lg overflow-hidden mx-auto
              "
            >
              <img
                src={item.image}
                alt={`Trending ${item.rank}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Rank Number */}
            <span
              className="
                absolute sm:bottom-4 bottom-6 sm:-left-0 left-2 font-extrabold 
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                text-black stroke-white leading-none
              "
            >
              {item.rank}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default Trending;
