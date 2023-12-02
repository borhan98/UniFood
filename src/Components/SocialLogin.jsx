import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const SocialLogin = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <button className="p-3 rounded-full bg-[#F89A20] text-white" title="Google">
        <FaGoogle />
      </button>
      <button className="p-3 rounded-full bg-[#F89A20] text-white" title="Github">
        <PiGithubLogoFill />
      </button>
      <button className="p-3 rounded-full bg-[#F89A20] text-white" title="Facebook">
        <FaFacebookF />
      </button>
    </div>
  );
};

export default SocialLogin;
