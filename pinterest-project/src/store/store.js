import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "../store/features/SidebarSlice";
import MediaReducer from "../store/features/MediaSlice";
import BoardReducer from "../store/features/BoardSlice";

export const store = configureStore({
    reducer:{
        sidebar: SidebarReducer,
        media: MediaReducer,
        board: BoardReducer,
    }
})