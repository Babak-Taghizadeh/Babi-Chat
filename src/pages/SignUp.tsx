import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

interface loginProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required") // Required field
    .min(3, "Username must be at least 3 characters long") // Minimum length
    .max(20, "Username cannot exceed 20 characters") // Maximum length
    .matches(
      /^[a-zA-Z0-9-]+$/,
      "Username can only contain letters, numbers and dashes"
    ),
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirm: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const onSubmit = (data: loginProps) => {
  console.log("Form data", data);
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (
      errors.email ||
      errors.password ||
      errors.username ||
      errors.passwordConfirm
    ) {
      toast("Error", {
        description: (
          <>
            {errors.email?.message && (
              <span>
                {errors.email.message}
                <br />
              </span>
            )}

            {errors.username?.message && (
              <span>
                {errors.username.message}
                <br />
              </span>
            )}

            {errors.password?.message && (
              <span>
                {errors.password.message}
                <br />
              </span>
            )}

            {errors.passwordConfirm?.message && (
              <span>{errors.passwordConfirm.message}</span>
            )}
          </>
        ),
      });
    }
  }, [errors.email, errors.password, errors.username, errors.passwordConfirm]);

  const handleErrorOnChange = () => () => {
    clearErrors();
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-evenly">
      <h1 className="text-7xl">
        <strong>Babi Chat</strong>
      </h1>
      <form
        className="flex flex-col w-full justify-center items-center gap-3 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("email")}
          placeholder="E-Mail"
          onChange={() => handleErrorOnChange()}
        />
        <Input
          type="text"
          {...register("username")}
          placeholder="Username"
          onChange={() => handleErrorOnChange()}
        />
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
          onChange={() => handleErrorOnChange()}
        />
        <Input
          type="password"
          {...register("passwordConfirm")}
          placeholder="Confirm Password"
          onChange={() => handleErrorOnChange()}
        />
        <div className="flex flex-col items-center gap-14">
          <button
            className={buttonVariants({ variant: "default", size: "lg" })}
            type="submit"
          >
            Sign Up
          </button>
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            to="/sign-in"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
