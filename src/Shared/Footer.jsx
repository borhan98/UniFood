import { Link } from "react-router-dom";
import UniFoodLogo from "../assets/UniLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="container mx-auto px-2 lg:px-0 grid gap-6 md:grid-cols-3 footer p-10 text-neutral-content">
        {/* Website logo and contact information */}
        <div>
          {/* loog */}
          <Link>
            <div className="flex items-center mb-6">
              <img className="w-12" src={UniFoodLogo} alt="Logo" />
              <h3 className="text-3xl font-bold">
                Uni<span className="text-[#F89A20]">Food</span>{" "}
              </h3>
            </div>
          </Link>
          <div className="flex items-center gap-2  text-lg">
            <span className="p-2 rounded-full bg-[#49525e] ">
              <FaLocationDot />
            </span>
            <span>Wellington Square, Oxford OX1 2JD, UK</span>
          </div>
          <div className="flex items-center gap-2  text-lg">
            <span className="p-2 rounded-full bg-[#49525e] ">
              <IoIosCall />
            </span>
            <span><a href="#">+1555 123456</a></span>
          </div>
          <div className="flex items-center gap-2  text-lg">
            <span className="p-2 rounded-full bg-[#49525e] ">
              <MdEmail />
            </span>
            <span><a href="#">unifood@gmail.com</a></span>
          </div>
        </div>
        {/* Important links to visit */}
        <div>
          <h3 className="text-2xl font-semibold text-zinc-300 mb-6">Visit</h3>
          <ul className="space-y-2">
            <li><a className="hover:ml-1 duration-300" href="#">- Home</a></li>
            <li><a className="hover:ml-1 duration-300" href="#">- All Meals</a></li>
            <li><a className="hover:ml-1 duration-300" href="#">- Upcoming meals</a></li>
            <li><a className="hover:ml-1 duration-300" href="#">- Join Us</a></li>
          </ul>
        </div>
        {/* Follow on social media */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-zinc-300 mb-6">Follow Us</h3>
          <button className="flex items-center justify-center text-xl rounded-md gap-2 border py-3 px-5 w-full">
            <span><FaFacebook /></span>
            <span>Facebook</span>
          </button>
          <button className="flex items-center justify-center text-xl rounded-md gap-2 border py-3 px-5 w-full">
            <span><FaInstagram /></span>
            <span>Instagram</span>
          </button>
          <button className="flex items-center justify-center text-xl rounded-md gap-2 border py-3 px-5 w-full">
            <span><FaYoutube /></span>
            <span>YouTube</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
