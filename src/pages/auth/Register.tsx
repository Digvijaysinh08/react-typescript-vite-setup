import z from 'zod';
import { CustomInput } from '@components/InputsField';
import { useForm } from 'react-hook-form';
import { Button } from '@components/Button';
import { registerSchema } from '@schemas/registerSchema';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiErrorTostHandler } from '@helpers/apiErrorToastHandler';
import { useRegisterMutation } from '@store/services/authService';

type FormValues = z.infer<ReturnType<typeof registerSchema>>;

export default function Register() {
  const [registeredUser] = useRegisterMutation();

  const schema = registerSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await registeredUser(data)?.unwrap();
      toast.success(res.message);
      reset();
    } catch (error) {
      console.error('Error:', error);
      apiErrorTostHandler(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-lg"
    >
      <h2 className="text-center text-2xl font-bold text-gray-700">Register</h2>

      <CustomInput
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
        type="text"
        register={register}
        error={errors.name}
        required
      />

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
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        type="tel"
        register={register}
        error={errors.phone}
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
        className="w-full cursor-pointer rounded-lg bg-green-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500 sm:px-6 sm:py-3 sm:text-base"
      >
        Register
      </Button>
    </form>
  );
}
