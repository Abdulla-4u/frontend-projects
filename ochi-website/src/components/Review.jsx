import React from "react";
import Button from "./Button";

const Review = () => {
  return (
    <div className=" w-full flex items-center gap-4 px-10 py-8">
      <div className="bg-[#004D43] relative w-1/2 h-[65vh] rounded-lg flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
          className="w-36 object-cover object-center"
        />
        <p className="text-[#CDEA68] border border-[#CDEA68] absolute bottom-8 left-10 rounded-full px-3 py-1 w-fit font-NeueMontreal">&copy; 2019-2022</p>
      </div>

      <div className="flex items-center relative w-1/2 gap-4">

        <div className="bg-[#212121] relative w-1/2 h-[65vh] rounded-lg flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
              className="w-36 object-cover object-center"
          />
            <div className="absolute bottom-8 left-10 rounded-full px-3 py-1 w-fit font-NeueMontreal">
                <button class="btn btn--default px-3 py-2 uppercase but">
                    <span class="btn__text">rating 5.0 on clutch</span>
               </button>
            </div>
        </div>

        <div className="bg-[#212121] relative w-1/2 h-[65vh] rounded-lg  flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
              className="w-28 object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
};

export default Review;
