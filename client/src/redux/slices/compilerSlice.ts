import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  fullcode: {
    html: string;
    css: string;
    javascript: string;
  };

  CurrentLanguage: "html" | "css" | "javascript";
}

const initialState: compilerSliceStateType = {
  fullcode: {
    html: `
<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo List</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container">
            <h1>Todo List</h1>
            <input type="text" id="taskInput" placeholder="Add new task">
            <button onclick="addTask()">Add Task</button>
            <ul id="taskList"></ul>
        </div>
        <script src="script.js"></script>
    </body>
  </html>
    `,
    css: "css code ",
    javascript: "js code ",
  },
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
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullcode[state.CurrentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
