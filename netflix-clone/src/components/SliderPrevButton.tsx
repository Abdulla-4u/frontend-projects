import { MdOutlineArrowBackIos } from "react-icons/md"

const SliderPrevButton = ({isBeginning}: {isBeginning: boolean}) => {
  return (
    <button
    className={`custom-prev absolute -left-9 top-1/2 -translate-y-1/2 z-20 
    bg-[#1A1A1A] hover:bg-[#333333] h-[120px] w-[26px] flex items-center justify-center 
    cursor-pointer text-white rounded-lg
    transition-all duration-300 ease-in
    ${isBeginning ? "-translate-x-10 opacity-0 pointer-events-none" : "translate-x-0 opacity-100"}
    `}
>
    <MdOutlineArrowBackIos className="text-xl" />
</button>
  )
}

export default SliderPrevButton

