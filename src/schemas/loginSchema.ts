import { z } from "zod";
import { email, password } from "./commonSchema";

export const loginSchema = () =>
  email()
    .merge(password())
    .merge(
      z.object({
        rememberMe: z.boolean().optional(),
      })
    );
