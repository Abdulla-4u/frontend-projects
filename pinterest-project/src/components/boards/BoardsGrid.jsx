import { useNavigate } from "react-router-dom";
import { openCreateBoardModal } from "../../store/features/BoardSlice";
import { useDispatch, useSelector } from "react-redux";
import BoardCover from "./BoardCover";
import { IoFilter } from "react-icons/io5";


const BoardsGrid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { boards, pins } = useSelector((state) => state.board);

  if (boards.length === 0) return <EmptyBoards />;

  return (
    <div className="pt-4">

      <div className="flex items-center justify-between">   
        <div className="flex items-center justify-center w-11 h-11 rounded-xl cursor-pointer hover:bg-[#F6F6F3] transition-colors">
          <IoFilter size={28} />
        </div>
        <button
          onClick={() => dispatch(openCreateBoardModal())}
          className={`font-semibold px-5 py-2.5 rounded-2xl shadow-sm bg-(--red) hover:bg-(--darkred) text-white cursor-pointer transition-colors duration-300 focus:outline-none active:scale-95`}
          type="button"
        >
          Create
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        {boards.map((board) => {
          const boardPins =
            board.pinIds?.map((id) => pins[id]?.photo).filter(Boolean) || [];

          return (
            <div
              key={board.id}
              onClick={() => navigate(`/boards/${board.id}`)}
              className="cursor-pointer group hover:opacity-80 transition-opacity"
            >
              {/* Board cover */}
              <BoardCover pins={boardPins.slice(0, 3)} />

              {/* Board info */}
              <div className="mt-2 px-1">
                <h4 className="font-semibold text-black">{board.name}</h4>
                <p className="text-sm text-gray-500">
                  {board.pinIds?.length || 0} Pins
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardsGrid;

const EmptyBoards = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center text-center max-w-md w-52 gap-2">
        <img
          src="https://s.pinimg.com/gestalt/illustrations/v1/ill.pinboard.spot.light.svg.webp"
          alt="Empty boards illustration"
          className="w-64 md:w-72 object-contain"
          loading="lazy"
        />
      </div>
      <h4 className="text-2xl font-bold text-gray-900">Organize your ideas</h4>
      <p className="text-black text-sm max-w-sm py-2 leading-relaxed">
        Pins are sparks of inspiration. Boards are where they live. Create
        boards to organize your Pins your way.
      </p>
      <button
        onClick={() => dispatch(openCreateBoardModal())}
        className="mt-2 bg-red-600 hover:bg-red-700 transition cursor-pointer text-white px-5 py-2 rounded-xl font-medium shadow-sm"
      >
        Create a board
      </button>
    </div>
  );
};
