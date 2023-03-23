import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PopupsSlice } from "./features/popups";
import { ViewSlice } from "./features/view";

export const store = configureStore({
  reducer: {
    view: ViewSlice.reducer,
    popups: PopupsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;