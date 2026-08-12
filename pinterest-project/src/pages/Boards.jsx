import { useState } from "react";
import PinsGrid from "../components/PinsGrid";
import BoardsGrid from "../components/boards/BoardsGrid";

const Boards = () => {
  const [activeTab, setActiveTab] = useState("boards");

  return (
    <div className="px-6 pt-6">
      <h2 className="text-4xl font-bold text-black">
        Your saved ideas
      </h2>

      {/* Tabs */}
      <div className="relative mt-6 flex items-center gap-8 border-b border-transparent">
        <button
          onClick={() => setActiveTab("pins")}
          className={`pb-3 px-2 font-medium cursor-pointer transition-colors ${
            activeTab === "pins"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Pins
        </button>

        <button
          onClick={() => setActiveTab("boards")}
          className={`pb-3 font-medium cursor-pointer transition-colors ${
            activeTab === "boards"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Boards
        </button>

        {/* Active underline */}
        <span
          className={`absolute bottom-0 h-0.5 bg-black transition-all duration-300 ${
            activeTab === "pins"
              ? "left-0 w-12"
              : "left-18 w-16"
          }`}
        />
      </div>

      <div >
        {activeTab === "pins" ? <PinsGrid /> : <BoardsGrid />}
      </div>
    </div>
  );
};

export default Boards;
