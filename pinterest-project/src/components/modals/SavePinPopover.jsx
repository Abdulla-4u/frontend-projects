import { FiPlus, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { closeSavePopover, openCreateBoardModal, savePinToBoard } from "../../store/features/BoardSlice";
import { useState, useMemo } from "react";

const SavePinPopover = () => {
  const dispatch = useDispatch();
  const { isSavePopoverOpen, anchor, boards} = useSelector((state) => state.board);
  const [search, setSearch] = useState("");

  const filteredBoards = useMemo(() => {
    if (!search.trim()) return boards;
  
    return boards.filter((board) =>
      board.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [boards, search]);
  


  if (!isSavePopoverOpen || !anchor) return null;

  const style = {
    position: "absolute",
    top: anchor.top + 40,
    left: Math.max(anchor.left - 260, 16), // prevent overflow on small screens
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => dispatch(closeSavePopover())}
      />

      {/* Popover */}
      <div
        style={style}
        className="
          z-50 w-[350px] max-w-[90vw]
          bg-white rounded-2xl shadow-2xl
          border border-gray-200 flex flex-col overflow-hidden
        "
      >
        {/* Header */}
        <div className="py-4.5 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Save</h3>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <div
            className="
              flex items-center gap-2
              rounded-2xl border border-[#85857F] px-3
              focus-within:ring-1 focus-within:ring-[#435EE5]
            "
          >
            <FiSearch className="text-black text-lg" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                bg-transparent border-none outline-none
                py-3 text-base flex-1
                placeholder:text-gray-900 placeholder:text-base
              "
            />
          </div>
        </div>

        {/* Boards list */}
        <div className="px-2 max-h-[360px] overflow-y-auto pb-20">
           <h4 className="text-sm px-3 py-2 text-gray-900 font-normal">All boards</h4>
          <div className="space-y-1">
            {
              filteredBoards.length === 0 ? (
                <div className="px-3 py-6 text-sm text-gray-500 text-center">
                  No boards found
                </div>
              ) : filteredBoards.map((board) =>(
                <BoardItem key={board.id} board={board} />
              ))}        
          </div>
        </div>

        {/* Create board */}
        <div onClick={()=> dispatch(openCreateBoardModal())} className="absolute bottom-0 left-0 w-full flex items-center gap-2 cursor-pointer bg-white hover:bg-[#E5E5E0] transition border-t border-gray-200 p-2.5">
          <div className="flex items-center justify-center bg-[#E5E5E0] w-20 h-11 rounded-lg px-3 transition-colors">
            <FiPlus size={25} />
          </div>
           <div className="w-full text-base font-semibold">Create board</div>
        </div>
      </div>
    </>
  );
};

export default SavePinPopover;

const BoardItem = ({ board }) => {

  const dispatch = useDispatch();
  const selectedPin = useSelector((state) => state.board.selectedPin);

  if (!selectedPin) return null;

  const handleSavePinToBoard = (e) => {
    e.stopPropagation();

    dispatch(
      savePinToBoard({
        boardId: board.id,
        photo: selectedPin, 
      })
    );
  };

  return (
    <div className="group flex items-center gap-3 hover:bg-gray-100 rounded-xl px-3 py-2 cursor-pointer transition">
    <div className="w-11 h-11 bg-gray-200 rounded-lg" />
    <div className="flex flex-1 items-center justify-between">
      <div className="text-sm font-medium text-gray-900">
        {board.name}
      </div>

      <button
        className="
        px-4 py-2
        rounded-xl
        font-semibold
        text-white
        bg-[#e60023]
        text-sm
        cursor-pointer
        transition-all
        opacity-0 translate-x-1
        group-hover:opacity-100 group-hover:translate-x-0
        pointer-events-none group-hover:pointer-events-auto
      "
        style={{ border: "none" }}
        onClick={handleSavePinToBoard}
      >
        Save
      </button>
    </div>
  </div>
  )
}