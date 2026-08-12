import { useParams, useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import ImageCard from "../components/ImageCard";
import { selectBoardPinsById } from "../store/features/boardSelectors";
import { IoIosArrowBack } from "react-icons/io";

const breakpointColumnsObj = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

const BoardDetails = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const boardPins = useSelector((state) =>
    selectBoardPinsById(state, boardId)
  );

  const board = useSelector((state) =>
    state.board.boards.find((b) => b.id === boardId)
  );
  

  return (
    <div className="px-6 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/boards")}
          className="text-xl flex items-center justify-center p-2 rounded-full cursor-pointer bg-white hover:bg-[#F6F6F3] transition-colors"
        >
          <IoIosArrowBack />
        </button>

        <h2 className="text-3xl font-bold capitalize">
          {board?.name || "Board"}
        </h2>
      </div>

      {/* Pins */}
      {boardPins.length === 0 ? (
        <p className="text-gray-500 text-sm">No pins yet</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {boardPins.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default BoardDetails;
