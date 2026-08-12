import { toast as sonnerToast } from "sonner";

const ToastBase = ({ id, title, action, photo }) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl bg-black/80 p-3 shadow-lg">
      <div className="flex flex-1 items-center gap-3">
        {photo && (
          <div className="h-10 w-10 rounded-lg overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src={photo.download_url}
              alt={photo.author}
            />
          </div>
        )}

        <p className="font-medium text-white">{title} </p>
      </div>

      {action && (
        <button
          onClick={() => {
            action.onClick();
            sonnerToast.dismiss(id);
          }}
          className="font-semibold text-sm cursor-pointer transition bg-white text-black px-2 py-1 rounded-lg"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default ToastBase;
