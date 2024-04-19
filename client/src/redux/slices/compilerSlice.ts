import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  html: string;
  css: string;
  javascript: string;
  CurrentLanguage: "html" | "css" | "javascript";
}

const initialState: compilerSliceStateType = {
  html: "",
  css: "",
  javascript: "",
  CurrentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["CurrentLanguage"]>
    ) => {
      state.CurrentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
