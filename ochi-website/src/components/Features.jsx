import { motion, useAnimation } from "framer-motion";
import React from "react";
import Card from "./Card";
import {Projects} from "../../public/Constant/Constant"
import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";

const Features = () => {
 {/* hover:scale-[.96] */}


  return (
    <div className="relative w-full mb-10 z-30 bg-zinc-50">
      <h3 className="font-NeueMontreal text-[4vw] pt-10 px-10">
        Featured projects
      </h3>
      <div className="divider w-full h-[1px] my-8 bg-[#D2D2D2]"></div>

    <div className="relative grid sm:grid-cols-2 w-full gap-x-4 gap-y-10 px-10">
        {Projects.map((item, i) =>(
            <Card key={i} item={item} index={i} />
        ))}
    </div>

        <div className="w-full flex items-center justify-center  py-10">

                <button className="bg-zinc-950 text-white h-16 w-72 rounded-[3rem] flex justify-center items-center space-x-4 relative group">
          <span className="font-NeueMontreal text-lg w-fit uppercase">
            View All Case Studies
          </span>
          <span className="bg-white dot h-10 w-10 flex items-center justify-center rounded-full overflow-hidden relative transition-all duration-300 ease-in-out">
            <MdArrowOutward className="text-xl absolute transition-transform duration-300 ease-in-out transform scale-75 group-hover:scale-125" />
          </span>
        </button>


        </div>
     
    </div>
  );
};

export default Features;


