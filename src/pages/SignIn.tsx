import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

interface loginProps {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().required("Email is Required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
});

const onSubmit = (data: loginProps) => {
  console.log("Form data", data);
};

const SignInPage = () => {
  console.log("rendered");
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
    if (errors.email || errors.password) {
      toast("Error", {
        description: (
          <>
            {errors.email?.message && <span>{errors.email.message}</span>}
            <br />
            {errors.password?.message && <span>{errors.password.message}</span>}
          </>
        ),
        action: {
          label: "OK",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }, [errors.email, errors.password]);

  const handleErrorOnChange = () => () => {
    clearErrors();
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-evenly">
      <h1 className="text-7xl">
        <strong>Babi Chat</strong>
      </h1>
      <form
        className="flex flex-col w-full justify-center items-center gap-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("email")}
          placeholder="E-Mail"
          onChange={handleErrorOnChange()}
        />
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
          onChange={handleErrorOnChange()}
        />
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

export default SignInPage;
