import { createSelector } from "@reduxjs/toolkit";

export const selectPinnedPhotoIds = (state) => state.board.allPins;
export const selectPinsMap = (state) => state.board.pins;

export const selectPinnedPhotos = createSelector(
  [selectPinnedPhotoIds, selectPinsMap],
  (ids, pins) => ids.map(id => pins[id]?.photo).filter(Boolean)
);


export const selectBoardPinsById = createSelector(
  [
    (state) => state.board.boards,
    (state) => state.board.pins,
    (_, boardId) => boardId,
  ],
  (boards, pins, boardId) => {
    const board = boards.find((b) => b.id === boardId);
    if (!board) return [];

    return board.pinIds
      .map((id) => pins[id]?.photo)
      .filter(Boolean);
  }
);


export const selectBoards = (state) => state.board.boards;

export const selectIsSaveModalOpen = (state) =>
  state.board.isSaveModalOpen;

export const selectSelectedPin = (state) =>
  state.board.selectedPin;
