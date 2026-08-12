import { useDispatch, useSelector } from "react-redux";
import { handleSaveClick } from "../store/features/BoardSlice";

const ImageCard = ({ photo }) => {
  const dispatch = useDispatch();
  const isSaved = useSelector((state) => state.board.allPins.includes(photo.id));

  const savingPinId = useSelector(state => state.board.savingPinId);
  const isSaving = savingPinId === photo.id;

  const handleSave = (photo, event) => {
    event.stopPropagation();
  
    const rect = event.currentTarget.getBoundingClientRect();
  
    dispatch(
      handleSaveClick({
        photo,
        anchor: {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
        },
      })
    );
  };
  

  return (
    <div className="group relative w-full overflow-hidden rounded-xl cursor-zoom-in">
      {/* Image */}
      <img
        src={photo.download_url}
        alt={photo.author}
        loading="lazy"
        className="w-full h-full object-cover rounded-xl"
        style={{
          aspectRatio: `${photo.width} / ${photo.height}`,
        }}
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-b from-black/50 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200 cursor-default
        "
      />

      {/* Save Button */}
      <button
        className={`absolute top-3 right-3
           text-sm font-semibold
          ${
            isSaved || isSaving
              ? "bg-black text-white"
              : "bg-red-600 text-white hover:bg-red-700 "
          } 
          px-4 py-2.5 active:scale-95 rounded-xl
          opacity-0 group-hover:opacity-100
          transition-all duration-200
          -translate-y-1.5 group-hover:translate-y-0
          cursor-pointer`}
          onClick={(e) => handleSave(photo, e)}
      >
        {isSaving ? "Saving..." : isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default ImageCard;
