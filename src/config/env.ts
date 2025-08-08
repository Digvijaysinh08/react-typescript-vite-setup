import z from "zod";

const envSchema = z.object({
  VITE_BACKEND_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse({
  VITE_BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
});

if (!parsedEnv.success) {
  throw new Error(
    "Invalid environment variables found:(\n" + JSON.stringify(parsedEnv?.error)
  );
}

export const env = parsedEnv.data;
