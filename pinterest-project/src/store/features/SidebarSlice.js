import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        activeSidebarTab: "Home"
    },

    reducers: {
        setActiveSidebarTab: (state, actions)=>{
            state.activeSidebarTab = actions.payload
        }
    }
})
export const {setActiveSidebarTab} = SidebarSlice.actions;
export default SidebarSlice.reducer;
