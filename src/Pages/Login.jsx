import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // handle form
  const onSubmit = (data) => {
    // login user
    loginUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          navigate(location.state ? location.state : "/");
          toast.success("Logged in successfully.", {
            style: {
              background: "#000000",
              padding: "12px",
              color: "#FFFAEE",
            },
          });
        }
      })
      .catch(() => {
        toast.error("Invalid email or wrong password", {
          style: {
            background: "#000000",
            padding: "12px",
            color: "#FFFAEE",
          },
        });
      });
  };

  return (
    <div className="relative flex justify-center bg-center bg-cover min-h-[90vh] w-full " style={{
      backgroundImage: "url(https://i.ibb.co/Qf3jCgX/loginBG.jpg)"
    }}>
      <Helmet>
        <title>UniFood | Login</title>
      </Helmet>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      <div className="relative text-white p-10 my-10 bg-[#0000008e] shadow-md h-fit">
        <h3 className="text-2xl mb-10 font-semibold text-white text-center">
          Sign In to your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="email">Your email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="py-3 px-4 w-96 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="email"
            />
            {errors.email && (
              <span className="text-red-500">Your email is required*</span>
            )}
          </div>
          {/* Password Field */}
          <div className="relative flex flex-col space-y-2">
            <label htmlFor="password">Your password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={showPass ? "password" : "text"}
              placeholder="Enter your password"
              className="py-3 px-4 w-96 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="password"
            />
            {errors.password && (
              <span className="text-red-500">
                Password must have at least 6 character*
              </span>
            )}
            {/* Show Password */}
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-10 right-2 text-black text-xl"
            >
              {showPass ? <IoEye /> : <IoEyeOff />}
            </span>
            <a className="block text-right underline" href="#">
              <small>Forgot Password?</small>
            </a>
          </div>
          {/* Sign In button */}
          <button
            type="submit"
            className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
          >
            Sign In
          </button>
        </form>
        {/* Redirect to Register page */}
        <p className="text-center mt-6">
          New to UniFood?{" "}
          <Link to={"/register"} className="text-[#F89A20] font-bold underline">
            Register Now
          </Link>
        </p>
        {/* Divider */}
        <div className="flex gap-4 justify-between items-center font-bold mt-6">
          <div className="bg-white h-[2px] w-full"></div>
          <span>OR</span>
          <div className="bg-white h-[2px] w-full"></div>
        </div>
        {/* Social login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
