import { createSlice, nanoid } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    pins: {},
    boards: [],
    allPins: [],
    lastAction: {},

    // UI
    isCreateBoardOpen: false,
    isSavePopoverOpen: false,

    selectedPin: null,
    savingPinId: null,
    anchor: null,
  },

  reducers: {
    // 2️⃣ Create board
    createBoard: {
      reducer: (state, action) => {
        state.boards.push(action.payload);
      },
      prepare: ({ name, isPrivate }) => ({
        payload: {
          id: nanoid(),
          name,
          isPrivate,
          pinIds: [],
          createdAt: new Date().toISOString(),
        },
      }),
    },

    // 3️⃣ Save pin to board
    savePinToBoard: (state, action) => {
      const { boardId, photo } = action.payload;

      if (!photo || !photo.id) return;

      // Save pin globally if not exists
      if (!state.pins[photo.id]) {
        state.pins[photo.id] = { id: photo.id, photo };
        state.allPins.push(photo.id);
      }

      // Save to board
      const board = state.boards.find((b) => b.id === boardId);
      if (board && !board.pinIds.includes(photo.id)) {
        board.pinIds.push(photo.id);
      }

      state.lastAction = {
       type: "SAVED_TO_BOARD",
       photo,
      };

      // Close popover
      state.isSavePopoverOpen = false;
      state.selectedPin = null;
      state.anchor = null;
    },

    // 4️⃣ Save button logic
    handleSaveClick: (state, action) => {
      const payload = action.payload;

      // ✅ Normalize payload
      const photo = payload?.photo ?? payload;
      const anchor = payload?.anchor ?? null;

      if (!photo) return;

      const isSaved = state.allPins.includes(photo.id);

      // 🔁 Undo save
      if (isSaved) {
        state.allPins = state.allPins.filter((id) => id !== photo.id);

        state.boards.forEach((board) => {
          board.pinIds = board.pinIds.filter((id) => id !== photo.id);
        });

        delete state.pins[photo.id];
        state.lastAction = {
          type: "REMOVED",
          photo,
        };
        return;
      }

      // 🧠 No boards → save instantly
      if (state.boards.length === 0) {
        state.pins[photo.id] = { id: photo.id, photo };
        state.allPins.push(photo.id);
        state.lastAction = {
          type: "SAVED",
          photo,
        };
        return;
      }

      // 🎯 Boards exist → open popover
      state.selectedPin = photo;
      state.anchor = anchor;
      state.isSavePopoverOpen = true;
    },

    openCreateBoardModal: (state) => {
      state.isCreateBoardOpen = true;
      state.isSavePopoverOpen = false;
    },

    closeCreateBoardModal: (state) => {
      state.isCreateBoardOpen = false;
    },

    openSavePopover: (state, action) => {
      state.selectedPin = action.payload.photo;
      state.anchor = action.payload.anchor;
      state.isSavePopoverOpen = true;
    },

    closeSavePopover: (state) => {
      state.isSavePopoverOpen = false;
      state.selectedPin = null;
      state.anchor = null;
    },
  },
});

export const {
  savePin,
  createBoard,
  savePinToBoard,
  handleSaveClick,
  openCreateBoardModal,
  closeCreateBoardModal,
  openSavePopover,
  closeSavePopover,
} = boardSlice.actions;

export default boardSlice.reducer;
