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
    css: `
   body {
      font-family: Arial, sans-serif;
  }
  
  .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
  }
  
  input[type="text"] {
      width: 70%;
      padding: 8px;
      margin-right: 5px;
      border-radius: 3px;
      border: 1px solid #ccc;
  }
  
  button {
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
  }
  
  button:hover {
      background-color: #45a049;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      margin: 10px 0;
  }
  
  .delete {
      color: red;
      cursor: pointer;
  }
  
    `,
    javascript: `
function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskList = document.getElementById("taskList");
  
      if (taskInput.value === "") {
          alert("Please enter a task");
          return;
      }
  
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      taskList.appendChild(li);
  
      var deleteButton = document.createElement("span");
      deleteButton.textContent = " ❌🗑️";
      deleteButton.className = "delete";
      deleteButton.onclick = function() {
          taskList.removeChild(li);
      };
      li.appendChild(deleteButton);
  
      taskInput.value = "";
  }
  
    `,
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
