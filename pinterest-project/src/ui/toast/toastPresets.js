import { showToast } from "./toastService";

export const pinSavedToast = ({ onUndo, photo }) =>
  showToast({
    title: "Save to Pins",
    action: {
      label: "Undo",
      onClick: onUndo,
    },
    photo: photo
  });

// export const pinSavedToBoardToast = ({boardName, photo, onUndo}) =>
//   showToast({
//     title: `Saved to ${boardName}`,
//     action: {
//       label: "Undo",
//       onClick: onUndo,
//     },
//     photo: photo
//   });

  export const pinRemovedToast = () => {
    showToast({
      title: "Pin removed",
    });
  };

export const boardSavedToast = (boardName) =>
  showToast({
    title: "Saved to board",
    description: boardName,
  });

export const errorToast = (message) =>
  showToast({
    title: "Something went wrong",
    description: message,
  });
