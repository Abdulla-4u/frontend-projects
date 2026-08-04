import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { trendingSliderData } from "./Data/Data";

// ✅ Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 h-full w-12 bg-black/50 flex items-center justify-center hover:bg-black/70 transition"
  >
    <FaChevronLeft className="text-white text-2xl" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 h-full w-12 bg-black/50 flex items-center justify-center hover:bg-black/70 transition"
  >
    <FaChevronRight className="text-white text-2xl" />
  </button>
);

const TrendingSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6, // show 6 like Netflix
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024, // medium
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full bg-white px-8">
      <h2 className="text-white text-2xl font-bold mb-4">Trending Now</h2>
      <Slider {...settings}>
        {trendingSliderData.map(({ image, rank }, index) => (
          <div key={index} className="px-2">
            <div className="group relative h-[250px] w-[180px] rounded-lg overflow-hidden cursor-pointer">
              <img
                src={image}
                alt={`Trending ${rank}`}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              {/* Netflix-style Rank Number */}
              <span className="absolute bottom-0 -left-6 font-extrabold text-8xl text-black stroke-white leading-none">
                {rank}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
