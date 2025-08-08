import z from "zod";
import { CustomInput } from "@components/InputsField";
import { loginSchema } from "@schemas/loginSchema";
import { useForm } from "react-hook-form";
import { Button } from "@components/Button";

type FormValues = z.infer<ReturnType<typeof loginSchema>>;

export default function LoginForm() {
  console.log("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm mx-auto"
    >
      <CustomInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        register={register}
        error={errors.email}
        required
      />

      <CustomInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        register={register}
        error={errors.password}
        required
      />

      <Button
        type="submit"
        className=" bg-green-300 w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition sm:px-6 sm:py-3 sm:text-base"
      >
        Submit
      </Button>
    </form>
  );
}
