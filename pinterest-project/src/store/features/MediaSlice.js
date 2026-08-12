import { createSlice } from "@reduxjs/toolkit";

const MediaSlice = createSlice({
  name: "media",
  initialState: {
    photos: [],
    page: 10,
    isLoading: false,
    error: null,
    hasMore: true,
  },

  reducers: {
    appendPhotos: (state, action) => {
      state.photos.push(...action.payload);
      state.error = null;
      if (action.payload.length === 0) {
        state.hasMore = false;
      }
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { appendPhotos, setIsLoading, setError, incrementPage } =MediaSlice.actions;
export default MediaSlice.reducer;
