const SwiperItem = ({image, rank}: {image: string, rank: number}) => {
  return (
    <div className="relative h-[252px] w-[180px] hover rounded-lg transition-transform duration-300 ease-out">
      <div className="h-full w-full rounded-lg overflow-hidden">
        <img
          className="h-full w-full cursor-pointer object-cover"
          src={image}
        />
      </div>
      {/* Hanging Number */}
      <span className="absolute text-black bottom-0 -left-6 font-extrabold text-8xl stroke-white leading-none">
        {rank}
      </span>
    </div>
  );
};

export default SwiperItem;


{
  /* <div className="main hover:scale-105 transition-transform ease-out duration-300 cursor-pointer relative w-[250px] h-[300px] bg-white/45 rounded-lg">
<div className="image-wrapper h-full w-full rounded-lg">
  <img
    src={bg}
    alt=""
    className="h-full w-full object-cover rounded-lg"
  />
</div>

<span className="absolute text-black bottom-0 -left-6 font-extrabold text-8xl stroke-white leading-none">
  4
</span>
</div> */
}