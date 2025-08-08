import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "@config/env";

export const rootApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_BACKEND_BASE_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["User"],
});
