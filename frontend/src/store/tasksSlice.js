import { createSlice } from "@reduxjs/toolkit";

const initialTasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: initialTasksState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },

    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },

    updateTask: (state, action) => {
      const { id, data } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task._id === id ? { ...task, ...data } : task,
      );
    },

    checkTask: (state, action) => {
      const { id, check } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task._id === id ? { ...task, check } : task,
      );
    },
  },
});

export const tasksSliceActions = tasksSlice.actions;

export default tasksSlice.reducer;
