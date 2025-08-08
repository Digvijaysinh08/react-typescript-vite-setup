import { configureStore } from "@reduxjs/toolkit";
import { rootApiSlice } from "./services/rootApiSlice";

export const store = configureStore({
  reducer: {
    [rootApiSlice.reducerPath]: rootApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApiSlice.middleware),
});
