import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-evenly">
      <h1 className="text-5xl leading-tight border border-primary rounded-lg p-10">
        Welcome to <br /> <strong>Babi Chat</strong>
      </h1>
      <div className="flex items-center gap-8">
        <Link
          className={buttonVariants({ variant: "default", size: "lg" })}
          to="/sign-in"
        >
          Login
        </Link>
        <Link
          className={buttonVariants({ variant: "default", size: "lg" })}
          to="/sign-up"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
