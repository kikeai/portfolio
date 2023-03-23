import { createSlice } from "@reduxjs/toolkit";
import { popups } from "../../types/types";

const initialState:popups = {
    sidepanel: false,
    contact: false,
}

export const PopupsSlice = createSlice({
    name: "vista",
    initialState,
    reducers: {
        OpenCloseSidePanel: (state) => {
            state.sidepanel? state.sidepanel = false: state.sidepanel = true 
        },
        OpenCloseContact: (state) => {
            state.contact? state.contact = false: state.contact = true
        },
    }
})

export default PopupsSlice.reducer;
export const {OpenCloseSidePanel, OpenCloseContact} = PopupsSlice.actions;