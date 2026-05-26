import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router";

const UserForm = ({ isLogin }) => {
  return (
    <form className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
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
      <button className="btn bg-white text-black border-[#e5e5e5]">
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

      {/* Facebook */}
      <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
        <svg
          aria-label="Facebook logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
          ></path>
        </svg>
        Continue with Facebook
      </button>

      <div className="divider my-1">or</div>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />
      {isLogin && (
        <Link to="#" className="link link-hover text-blue-600">
          <p>Forgot Password?</p>
        </Link>
      )}

      <button className="btn btn-main mt-4">
        {isLogin ? "Login" : "Registration"} <LuArrowRight />
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
