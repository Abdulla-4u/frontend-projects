import { MdArrowOutward } from "react-icons/md";


const HeroFooter = () => {
  return (
    <div className="mt-0">
      <div className="h-px w-full bg-[#B2B2B2]" />

      <div className="flex flex-col gap-5 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex w-full flex-col gap-3 font-NeueMontreal text-sm text-[#212121] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pr-6 md:text-base">
          <p>Presentation and storytelling agency</p>
          <p>For innovation teams and global brands</p>
        </div>

        <ProjectCTA />
      </div>
    </div>
  );
};

const ProjectCTA = () => {
  return (
    <div className="group relative inline-flex w-fit shrink-0 items-center">
      {/* Main CTA button */}
      <button
        type="button"
        className="
          relative z-10 mr-6 whitespace-nowrap rounded-full
          border border-[#212121] bg-transparent
          px-3.5 py-1.5
          font-NeueMontreal text-sm uppercase text-black
          transition-colors duration-500 ease-in-out
          group-hover:bg-zinc-900 group-hover:text-white
          sm:text-base
        "
      >
        Start the project
      </button>

      {/* Icon button */}
      <button
        type="button"
        aria-label="Start the project"
        className="
          absolute right-[-1rem] top-1/2
          flex -translate-y-1/2 items-center justify-center
          overflow-hidden rounded-full border border-[#212121]
          bg-transparent p-1.5 text-black
          transition-colors duration-500 ease-in-out
          group-hover:bg-zinc-900 group-hover:text-white
        "
      >
        <span
          className="
            absolute inset-0 scale-0 rounded-full bg-zinc-900
            transition-transform duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-100
          "
        />
        <span
          className="
            relative z-10 transition-transform duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:rotate-45
          "
        >
          <MdArrowOutward size={19} />
        </span>
      </button>
    </div>
  );
};

export default HeroFooter;
