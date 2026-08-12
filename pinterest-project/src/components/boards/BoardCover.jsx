const BoardCover = ({ pins = [] }) => {
  const [first, second, third] = pins;

  const Placeholder = () => (
    <div className="bg-gray-200 w-full h-full rounded-md" />
  );

  return (
    <div className="h-52 rounded-xl overflow-hidden bg-gray-100 flex gap-[2px]">
      {/* Left big image */}
      <div className="w-[74%] h-full">
        {first ? (
          <img
            src={first.download_url}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <Placeholder />
        )}
      </div>

      {/* Right stacked images */}
      <div className="w-[26%] h-full flex flex-col gap-[2px]">
        <div className="h-1/2">
          {second ? (
            <img
              src={second.download_url}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div className="h-1/2">
          {third ? (
            <img
              src={third.download_url}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <Placeholder />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardCover;
