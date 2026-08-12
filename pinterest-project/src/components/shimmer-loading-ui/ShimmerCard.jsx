const ShimmerCard = ({ height }) => {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-gray-200 animate-pulse"
      style={{ height }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 shimmer" />
    </div>
  );
};

export default ShimmerCard;
