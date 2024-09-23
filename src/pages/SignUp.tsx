import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface loginProps {
  username: string
  email: string;
  password: string;
  passwordConfirm: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
  .required('Username is required') // Required field
  .min(3, 'Username must be at least 3 characters long') // Minimum length
  .max(20, 'Username cannot exceed 20 characters') // Maximum length
  .matches(/^[a-zA-Z0-9-]+$/, 'Username can only contain letters, numbers and dashes'),
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  password: Yup
    .string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
});

const onSubmit = (data: loginProps) => {
  console.log("Form data", data);
};

const SignUp = () => {
  console.log("rendered")
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit"
  });

  const handleErrorOnChange = (field: keyof loginProps) =>{
    if (errors[field]) {
      clearErrors(field)
    }
  }
  return (
    <div className="min-h-dvh flex flex-col items-center justify-evenly">
      <h1 className="text-7xl">
        <strong>Babi Chat</strong>
      </h1>
      <form
        className="flex flex-col w-full justify-center items-center gap-7 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input {...register("email")} placeholder="E-Mail" onChange={() =>handleErrorOnChange("email")} />
        {errors.email && <p className="text-red-500 absolute top-11 text-sm">{errors.email.message}</p>}
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
          onChange={() => handleErrorOnChange("password")}
        />
        {errors.password && <p className="text-red-500 absolute bottom-[181px] text-sm">{errors.password.message}</p>}
        <div className="flex flex-col items-center gap-14">
        <button
          className={buttonVariants({ variant: "default", size: "lg" })}
          type="submit"
        >
          Login
        </button>
        <Link
          className={buttonVariants({ variant: "default", size: "lg" })}
          to="/sign-up"
        >
          Sign Up
        </Link>
          </div>
      </form>
    </div>
  );
};

export default SignUp