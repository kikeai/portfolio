import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { view } from "../../types/types";
import { getItem, setItem } from "../../utils/localStorage";

const initialState:view = {
    idiom: getItem("idiom"),
    mode: getItem("mode"),
}

export const ViewSlice = createSlice({
    name: "vista",
    initialState,
    reducers: {
        changeIdiom: (state) => {
            if(state.idiom === null){
                setItem("idiom", "ES");
                state.idiom = getItem("idiom");
            } else if(state.idiom === "ES"){
                setItem("idiom", "US");
                state.idiom = getItem("idiom")
            } else{
                setItem("idiom", "ES");
                state.idiom = getItem("idiom");
            }
        },
        changeMode: (state) => {
            if(state.mode === null){
                setItem("mode", false);
                state.mode = getItem("mode");
            } else if(state.mode){
                setItem("mode", false);
                state.mode = getItem("mode")
            } else{
                setItem("mode", true);
                state.mode = getItem("mode");
            }
        },
    }
})

export default ViewSlice.reducer;
export const {changeIdiom, changeMode} = ViewSlice.actions;