import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();

  // Handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          if (result.user) {
            // POST API to store new user
            const newUser = {
              name: result.user?.displayName,
              email: result.user?.email,
              image: result.user?.photoURL,
              badge: "bronze",
            };
            axiosPublic.post("/users", newUser).then((res) => {
              console.log(res.data);
            });
          }
          toast.success("Logged in successfully.", {
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
    <div className="flex gap-4 justify-center mt-4">
      <button
        onClick={handleGoogleLogin}
        className="p-3 rounded-full bg-[#F89A20] text-white"
        title="Google"
      >
        <FaGoogle />
      </button>
      <button
        className="p-3 rounded-full bg-[#F89A20] text-white"
        title="Github"
      >
        <PiGithubLogoFill />
      </button>
      <button
        className="p-3 rounded-full bg-[#F89A20] text-white"
        title="Facebook"
      >
        <FaFacebookF />
      </button>
    </div>
  );
};

export default SocialLogin;
