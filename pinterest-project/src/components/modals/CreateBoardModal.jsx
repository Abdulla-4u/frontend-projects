import { useDispatch, useSelector } from "react-redux";
import AppModal from "./AppModal";
import { closeCreateBoardModal, createBoard } from "../../store/features/BoardSlice";
import { useState } from "react";

const CreateBoardModal = () => {
  const dispatch = useDispatch();
  const { isCreateBoardOpen } = useSelector((state) => state.board);
  const [boardName, setBoardName] = useState("");
  const [isBoardPrivate, setIsBoardPrivate] = useState(false);
  const [inputError, setInputError] = useState(""); 

  const handleCreateBoard = () => {
    if (!boardName.trim()) {
      setInputError("Don't forget to name your board!");
      return;
    }
    setInputError(""); 

    dispatch(createBoard({ name: boardName, isPrivate: isBoardPrivate }));
    dispatch(closeCreateBoardModal())
    setBoardName(""); 
    setIsBoardPrivate(false);
  };

  const handleInputChange = (e) => {
    setBoardName(e.target.value);
    if (e.target.value.trim()) {
      setInputError("");
    }
  };

  return (
    <AppModal
      open={isCreateBoardOpen}
      size="xl"
      onClose={() => {
        dispatch(closeCreateBoardModal());
        setInputError("");
        setBoardName("");
        setIsBoardPrivate(false);
      }}
    >
      <div className="relative flex flex-col w-full mx-auto bg-white rounded-2xl shadow-lg px-6 py-8 sm:px-10 sm:py-10 min-h-[370px]">
        {/* Modal Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 ">
          Create board
        </h3>

        {/* Name Label and Input */}
        <div className="w-full mb-6">
          <label
            htmlFor="board-name"
            className="block text-base sm:text-md text-gray-900 font-normal mb-2 pl-1"
          >
            Name
          </label>
          <input
            id="board-name"
            type="text"
            className={`w-full border ${
              inputError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-[#85857F] focus:border-[#435ee5FF] focus:ring-[#435ee5FF]"
            } focus:ring-1 outline-none rounded-2xl px-4 py-3 text-base transition mb-0 placeholder:text-gray-600`}
            placeholder='Like "Places to Go" or "Recipes to Make"'
            maxLength={50}
            value={boardName}
            onChange={handleInputChange}
          />
          {inputError && (
            <p className="text-red-500 text-sm mt-2 pl-1">{inputError}</p>
          )}
        </div>

        {/* Private switch */}
        <label
          htmlFor="private-board"
          className="flex items-center gap-4 py-4 cursor-pointer select-none"
        >
          {/* Checkbox */}
          <input
            id="private-board"
            type="checkbox"
            className="
              mt-1
              h-5 w-5
              rounded-md
              border border-[#85857F]
              text-[#435ee5]
              accent-[#435ee5]
              cursor-pointer
            "
            value={isBoardPrivate}
            onChange={(e) => setIsBoardPrivate(e.target.checked)}
          />

          {/* Text */}
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-semibold text-black">
              Keep this board secret
            </p>
            <p className="text-sm text-gray-600 leading-snug">
              So only you and collaborators can see it.
            </p>
          </div>
        </label>

        {/* Button Row */}
        <div className="flex justify-end mt-auto">
          <button
            onClick={handleCreateBoard}
            className={`font-semibold px-5 py-3 rounded-2xl shadow-sm transition min-w-[96px] focus:outline-none 
              ${boardName.trim().length === 0
                ? "bg-[#d8d8d8FF] text-[#24242180]"
                : "bg-red-600 hover:bg-red-700 text-white active:scale-95 cursor-pointer"
              }`}
            type="button"
            disabled={boardName.trim().length === 0}
          >
            Create
          </button>
        </div>
      </div>
    </AppModal>
  );
};

export default CreateBoardModal;
