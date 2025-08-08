import { toast } from "react-toastify";
import { isApiErrorResponse } from "./isApiErrorResponse";

export const apiErrorTostHandler = (error: unknown) => {
  if (isApiErrorResponse(error)) {
    toast.error(error?.data?.message ?? "An unexpected error occurred");
  }
};
