import { useForm } from "react-hook-form";
import { LuArrowRight, LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";

const UserForm = ({ isLogin }) => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    if (isLogin) {
      // Handle login logic here
      try {
        setIsLoading(true);
        const loggedInUser = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const userEmail = loggedInUser.user.email;

        const userRes = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/users/getUser?email=${userEmail}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const userData = await userRes.json();
        console.log(userData);

        setIsLoading(false);
        toast.success("Login Successful");
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    } else {
      // Handle registration logic here
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);

        const userRes = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/users/createUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
            }),
          },
        );
        const userData = await userRes.json();
        setIsLoading(false);
        toast.success("Registration Successful");
        navigate("/dashboard");
        reset();
      } catch (error) {
        setIsLoading(false);
        toast.error("Registration Failed");
        console.error("Registration Error:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4"
    >
      <div className="text-center mb-2">
        <h2 className="text-xl font-bold">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="label">
          {isLogin
            ? "Please login to your account"
            : "Please register to create your account"}
        </p>
      </div>

      {/* Google */}
      <button
        type="button"
        className="btn bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Continue with Google
      </button>

      <div className="divider my-1">or</div>

      <label className="label">Email</label>
      <input
        type="email"
        className="input"
        placeholder="Email"
        {...register("email", { required: "Email is Required!" })}
      />
      {errors.email && <p className="text-red-600">{errors.email.message}</p>}

      <label className="label">Password</label>
      <label className="input">
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="cursor-pointer"
        >
          {showPass ? <LuEyeClosed /> : <LuEye />}
        </button>
      </label>
      {errors.password && (
        <p className="text-red-600">{errors.password.message}</p>
      )}

      {isLogin && (
        <Link to="#" className="link link-hover text-blue-600">
          <p>Forgot Password?</p>
        </Link>
      )}

      <button
        type="submit"
        className={`btn ${isLoading ? "" : "btn-main"} mt-4`}
        disabled={isLoading}
      >
        {!isLoading ? (
          <>
            {isLogin ? "Login" : "Registration"} <LuArrowRight />
          </>
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </button>
      <p className="">
        {isLogin ? "Don't Have an Account?" : "Already Have an Account?"}{" "}
        <Link
          to={isLogin ? "/signup" : "/login"}
          className="link link-hover font-bold text-blue-600"
        >
          {isLogin ? "Register Now" : "Login Now"}
        </Link>
      </p>
    </form>
  );
};

export default UserForm;
