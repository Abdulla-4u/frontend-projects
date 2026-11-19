import { MdArrowOutward } from "react-icons/md";

const CaseStudiesButton = () => {
  return (
    <div className="flex w-full items-center justify-center py-10 my-10 ">
      <button
        type="button"
        className="
          group relative flex
          items-center 
          overflow-hidden rounded-full bg-black
          ps-6 pe-10 py-4 text-white transition-transform
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-black
          focus-visible:ring-offset-4
        "
      >
        <span className="relative mr-5 font-medium text-sm tracking-tight font-NeueMontreal uppercase">
          View All Case Studies
        </span>

        <span className="absolute z-50 right-4 mr-1 size-2 scale-100 group-hover:scale-[4.8] flex items-center justify-center transition-all overflow-hidden duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)] bg-white rounded-full" >
          <span>
            <MdArrowOutward className="text-black text-[5px] sm:text-[4px] scale-0
              transition-all duration-300
              ease-out
              group-hover:scale-100
               "/>
          </span>
        </span>
      </button>
    </div>
  );
};

export default CaseStudiesButton;