import z from "zod";

export const emailRegex1 = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

export const emailValidator = (requiredMessage: string) =>
  z
    .string()
    .trim()
    .nonempty(requiredMessage)
    .email("schemaValidation.common.email_Invalid")
    .regex(emailRegex1, "schemaValidation.common.email_Invalid");

export const passwordValidator = () =>
  z
    .string()
    .nonempty("schemaValidation.common.password")
    .min(8, "schemaValidation.common.min_length")
    .refine((value) => /[a-z]/.test(value), {
      message: "schemaValidation.common.lowercase",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "schemaValidation.common.uppercase",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "schemaValidation.common.number",
    })
    .refine((value) => /[@$!%*?&]/.test(value), {
      message: "schemaValidation.common.special",
    });

const email = () =>
  z.object({
    email: emailValidator("schemaValidation.common.email_Required"),
  });
const password = () => z.object({ password: passwordValidator() });

export { email, password };
