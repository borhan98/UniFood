import { Link } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  // handle form
  const onSubmit = (data) => {
    // console.log(data);

    // create new user
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          toast.success("Registration successful.", {
            style: {
              background: "#000000",
              padding: "12px",
              color: "#FFFAEE",
            },
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="relative flex justify-center bg-login-bg bg-center bg-cover min-h-[90vh] w-full ">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      <div className="relative text-white p-10 my-10 bg-[#0000008e] shadow-md h-fit">
        <h3 className="text-2xl mb-10 font-semibold text-white text-center">
          Sign up for better experience
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="name">Your name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="py-3 px-4 w-96 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="name"
            />
            {errors.name && (
              <span className="text-red-500">Your name is required*</span>
            )}
          </div>
          {/* Photo Field */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="photo">Your photo URL</label>
            <input
              {...register("photo", { required: true })}
              type="text"
              placeholder="Enter your photo URL"
              className="py-3 px-4 w-96 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="photo"
            />

            {errors.photo && (
              <span className="text-red-500">Your photo is required*</span>
            )}
          </div>
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
              placeholder="Enter a password"
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
            Sign Up
          </button>
        </form>
        {/* Redirect to Register page */}
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#F89A20] font-bold underline">
            Login now
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

export default Register;
