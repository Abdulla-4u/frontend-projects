import Masonry from "react-masonry-css";
import ShimmerCard from "./ShimmerCard";

const breakpointColumnsObj = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

const shimmerHeights = [
  180, 220, 260, 300, 340, 380,
  200, 240, 280, 320
];

const ShimmerGrid = ({ count = 20 }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <ShimmerCard
          key={i}
          height={shimmerHeights[i % shimmerHeights.length]}
        />
      ))}
    </Masonry>
  );
};

export default ShimmerGrid;
