import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import { selectPinnedPhotos } from "../store/features/boardSelectors";

const breakpointColumnsObj = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

const PinsGrid = () => {

  const pinnedPhotos = useSelector(selectPinnedPhotos);
  if (pinnedPhotos.length === 0) return <EmptyPins/>

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 pt-6"
      columnClassName="flex flex-col gap-4"
    >
      {pinnedPhotos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </Masonry>
  );
};

export default PinsGrid;

const EmptyPins = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center max-w-md">
      <div className="flex flex-col items-center text-center max-w-md w-52 gap-2">
        <img src="https://s.pinimg.com/gestalt/illustrations/v1/ill.pinjar.spot.light.svg.webp" loading="lazy" alt="Empty boards illustration" className="w-64 md:w-72 object-contain" />
      </div>

        <h4 className="text-2xl font-semibold text-gray-900">
          Save what inspires you
        </h4>

        <p className="text-black text-sm max-w-sm py-2 leading-relaxed">
          Saving Pins is Pinterest’s superpower. Browse Pins, save what you love,
          and find them here to get inspired all over again.
        </p>

        <Link to={'/'} className="mt-2 bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-xl font-medium shadow-sm">
          Explore Pins
        </Link>
      </div>
    </div>
  );
};

