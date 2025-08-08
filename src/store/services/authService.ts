import { apiPaths } from "@constants/apiPaths";
import { rootApiSlice } from "./rootApiSlice";

export const userService = rootApiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: (body) => ({
        url: apiPaths.auth.register,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation } = userService;
