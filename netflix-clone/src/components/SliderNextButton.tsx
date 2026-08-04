import { MdArrowForwardIos } from "react-icons/md";

const SliderNextButton = ({isEnd}: { isEnd: boolean }) => {
  return (
    <button
      className={`custom-next absolute -right-9 top-1/2 -translate-y-1/2 z-20 
    bg-[#1A1A1A] hover:bg-[#333333] h-[120px] w-[28px] flex items-center justify-center 
    cursor-pointer text-white rounded-lg
    transition-all duration-300 ease-in 
    ${
      isEnd
        ? "translate-x-10 opacity-0 pointer-events-none"
        : "translate-x-0 opacity-100"
    }
    `}
    >
      <MdArrowForwardIos className="text-xl" />
    </button>
  );
};

export default SliderNextButton;
