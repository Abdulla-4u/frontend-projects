import FeatureButton from "./common/FeatureButton";

const Review = () => {
  return (
    <section
      className="bg-[#F1F1F1]
      grid w-full grid-cols-1 gap-3
      px-4 py-10
      sm:grid-cols-2 sm:gap-4 sm:px-6
      md:grid-cols-3
      lg:grid-cols-4 lg:px-10
    "
    >
      {/* Card 1 */}
      <div
        className="
        relative col-span-1 flex h-[300px]
        items-center justify-center rounded-lg
        bg-[#004D43]
        sm:col-span-2 sm:h-[360px]
        md:col-span-1 md:h-[420px]
        lg:col-span-2 lg:h-[65vh]
      "
      >
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="Ochi logo"
          className="w-28 object-contain sm:w-36"
        />

        <p
          className="
          absolute bottom-6 left-6 w-fit
          rounded-full border border-[#CDEA68]
          px-3 py-1 font-NeueMontreal text-sm
          text-[#CDEA68]
          sm:bottom-8 sm:left-8
          lg:left-10
        "
        >
          &copy; 2019-2022
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="
        relative flex h-[300px]
        items-center justify-center rounded-lg
        bg-[#212121]
        sm:h-[360px]
        md:h-[420px]
        lg:h-[65vh]
      "
      >
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          alt="Clutch logo"
          className="w-28 object-contain sm:w-36"
        />

        <div className="absolute bottom-6 left-5 w-fit sm:bottom-8 sm:left-8">
          <FeatureButton variant="light">
            Rating 5.0 on Clutch
          </FeatureButton>
        </div>

      </div>

      {/* Card 3 */}
      <div
        className="
        relative flex h-[300px]
        items-center justify-center rounded-lg
        bg-[#212121]
        sm:h-[360px]
        md:h-[420px]
        lg:h-[65vh]
      "
      >
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt="Third client logo"
          className="w-24 object-contain sm:w-28"
        />
        <div className="absolute bottom-8">
          <FeatureButton variant="light">
            business bootcamp alumni
          </FeatureButton>
        </div>
      </div>
    </section>
  );
};

export default Review;
