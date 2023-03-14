import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { view } from "../../types/types";

const initialState:view = {
    idiom: "ES",
    mode: false,
}

export const ViewSlice = createSlice({
    name: "vista",
    initialState,
    reducers: {
        changeIdiom: (state) => {
            state.idiom === "ES" ? state.idiom = "US": state.idiom = "ES"
        },
        changeMode: (state) => {
            state.mode ? state.mode = false: state.mode = true
        },
    }
})

export default ViewSlice.reducer;
export const {changeIdiom, changeMode} = ViewSlice.actions;