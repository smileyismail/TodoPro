import { configureStore } from "@reduxjs/toolkit";

import tasksSlice from "./tasksSlice";

const store = configureStore({
  reducer: { tasksStore: tasksSlice },
});

export default store;
